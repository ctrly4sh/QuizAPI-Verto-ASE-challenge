import { Request, Response } from "express";
import { quizModel } from "../models/quiz.model";
import { IQuestion, questionModel } from "../models/question.model";
import { Types } from "mongoose";
import { calculateScore } from "../services/scoringService";

export const createQuiz = async (req: Request, res: Response) => {
    try {

        const { title } = req.body;

        if (!title) return res.status(400).json({ message: "Title is required" })

        const quiz = new quizModel({ title })
        await quiz.save();

        return res.status(201).json({ quiz })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getAllQuizes = async (req: Request, res: Response) => {
    try {

        const allQuizes = await quizModel.find();

        return res.status(200).json({ allQuizes })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const submitQuiz = async (req: Request, res: Response) => {
    try {
        const { quizId } = req.params;
        const { answers } = req.body;

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ message: "Answers are required and must be an array" })
        }

        const questions = await questionModel.find({ quizId });
        let score = 0;

        score = calculateScore(questions, answers)

        return res.status(200).json({
            "Total Score": questions.length,
            "Your Score": score
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}


