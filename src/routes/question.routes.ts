import { Router } from "express";
import { addQuestion, getAllQuestions } from "../controllers/question.controller";

const router = Router();

router.post('/addQuestion', addQuestion)
router.get('/getQuestions/:quizId', getAllQuestions)

export default router;