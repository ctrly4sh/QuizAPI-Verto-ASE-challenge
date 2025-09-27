import { Router } from "express";
import { createQuiz , getAllQuizes} from "../controllers/quiz.controller";

const router = Router();

router.post('/createQuiz', createQuiz)
router.get('/allQuizes', getAllQuizes)



export default router;