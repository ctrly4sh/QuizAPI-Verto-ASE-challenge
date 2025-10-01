import { Schema, model, Document, Types } from "mongoose";


export interface IQuestion extends Document {
    quizId : Types.ObjectId
    text: string
    type: "single" | "multiple" | "text"
    options?: string[],
    correctOptions?: number[]
    answerText?: string
    createdAt: Date
}    

const questionSchema = new Schema<IQuestion>({
    quizId: {type: Schema.Types.ObjectId, ref: "quiz", required: true},
    text: {type: String, required: true, trim: true},
    type: {type: String, enum: ["single", "multiple", "text"], required: true},
    options: {type: [String], default: undefined },
    correctOptions: {type: [Number], default: undefined },
    answerText: {type: String, default: undefined, maxLength: 300}
}, {timestamps: true})

export const questionModel = model<IQuestion>("question", questionSchema)
