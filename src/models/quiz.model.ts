import {Schema, model,Document} from "mongoose"

export interface IQuiz extends Document {
    title: string;
    createdAt: Date;
}

const quizSchema = new Schema<IQuiz>({
    title: {type: String, required: true},
}, {timestamps: true})

export const quizModel =  model<IQuiz>("quiz", quizSchema)
