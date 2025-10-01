import { Router } from "express";
import { createQuiz , getAllQuizes, submitQuiz} from "../controllers/quiz.controller";

const router = Router();

router.post('/createQuiz', createQuiz)
router.get('/allQuizes', getAllQuizes)
router.post('/:quizId/submit', submitQuiz)



export default router;