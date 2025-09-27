import express, {Application, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import quizRouter from "./routes/quiz.routes";

const app: Application = express();

app.use(helmet());

app.use(cors({
    origin: "*", 
    methods: "GET, POST, PUT, DELETE", 
}));

app.use(express.json());

app.use('/ping', (_req, res: Response) => {
    res.status(200).send('pong🏓');
})

app.use('/quiz', quizRouter);

export default app;