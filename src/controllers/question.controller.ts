import {Request, Response} from "express";
import { questionModel } from "../models/question.model";

export const addQuestion = async (req: Request, res: Response) => {
    try {
    
        const{quizId} = req.params;
        const {text, type, options, correctOptions, answerText} = req.body;

        console.log('Request body', req.body);

        if(!text || !type ){
            return res.status(400).json({message: "Text and type are required"})
        }

        const question = await new questionModel({
            quizId,
            text, 
            type, 
            options, 
            correctOptions,  
            answerText
        }).save();

        res.status(201).json({
            message: "Question added successfully",
            AddedQuestion: question,
        });
        
    }catch(error){
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export const getAllQuestions = async (req: Request, res: Response) => {
    try {
        const {quizId} = req.params;
        const questions = await questionModel.find({quizId}, '-correctOptions -answerText');
        res.status(200).json({
            message: "Questions fetched successfully",
            questions,
            TotalScore : questions.length
        });
    }catch(error){
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}
