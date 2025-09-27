import { Schema, model, Document, Types } from "mongoose";

interface IOption {
    _id: Types.ObjectId
    text: string
}

export interface IQuestion extends Document {
    quizId : Types.ObjectId
    text: string
    type: "single" | "multiple" | "text"
    options?: IOption[]
    correctOptions?: Types.ObjectId[]
    answerText?: string
    createdAt: Date
}    

const optionSchema = new Schema<IOption>({
    text: {type: String, required: true}
})

const questionSchema = new Schema<IQuestion>({
    quizId: {type: Schema.Types.ObjectId, ref: "quiz", required: true},
    text: {type: String, required: true, trim: true},
    type: {type: String, enum: ["single", "multiple", "text"], required: true},
    options: {type: [optionSchema], default: undefined },
    correctOptions: {type: [Schema.Types.ObjectId], default: undefined },
    answerText: {String, default: undefined, maxLength: 300}
}, {timestamps: true})

export const questionModel = model<IQuestion>("question", questionSchema)
