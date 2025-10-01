import { Router } from "express";
import { addQuestion, getAllQuestions } from "../controllers/question.controller";

const router = Router();

router.post('/:quizId/question', addQuestion)
router.get('/:quizId/question', getAllQuestions)

export default router;