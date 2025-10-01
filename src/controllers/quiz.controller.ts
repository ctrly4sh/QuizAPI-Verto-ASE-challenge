import { Request, Response } from "express";
import { quizModel } from "../models/quiz.model";
import { IQuestion, questionModel } from "../models/question.model";
import { Types } from "mongoose";

export const createQuiz = async (req: Request, res: Response) => {
    try {

        const {title} = req.body;

        if(!title) return res.status(400).json({message: "Title is required"})

        const quiz = new quizModel({title})
        await quiz.save();

        return res.status(201).json({quiz})

    }catch(error){
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export const getAllQuizes = async(req: Request, res: Response) => {
    try {

        const allQuizes = await quizModel.find();

        return res.status(200).json({allQuizes})

    }catch(error){
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export const submitQuiz = async(req: Request, res: Response) => {
    try {
        const {quizId} = req.params;
        const {answers} = req.body;

        if(!answers || !Array.isArray(answers)){
            return res.status(400).json({message: "Answers are required and must be an array"})
        }

        const questions = await questionModel.find({quizId});
        let score = 0;

        console.log("Questions ", questions)

        for(const ans of answers){

            const question = questions.find((question: IQuestion) => (question._id as Types.ObjectId).toString() === ans.questionId)

            if(!question) continue;

            if(question.type == "single"){
                if(ans.selectedOptions[0] == question.correctOptions?.[0]) score++
            }

            if(question.type == "multiple"){
                if(JSON.stringify(ans.selectedOptions) == JSON.stringify(question.correctOptions)) score++
            }

            /*
            here we can manually check the text answer 
            but a better option would be to use a similarity metric
            or we can simply pass the question to a language model and then compare the answers passed by users and just evaluate on the basis of that
            */

            if(question.type == "text"){
                if(ans.answerText == question.answerText) score++
            }
        }
        
        return res.status(200).json({
            "Total Score" : questions.length,
            "Your Score" : score
        })
 
    }catch(error){
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}


