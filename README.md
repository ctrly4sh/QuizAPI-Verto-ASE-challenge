# Quiz API - Verto ASE Challenge

## 1. 📖 Project Description

**This project implements a backend service for a quiz application as part of the Verto ASE Challenge.**

### Core Features:
* Create quizzes and add questions (single choice, multiple choice, or text-based).
* Fetch quiz questions (without exposing correct answers).
* Submit answers and receive a calculated score.
* Supports keyword/text matching for free-text questions.

---

## 2. ⚙️ Setup Instructions

### Prerequisites

* Node.js (>= 18)
* MongoDB instance (local or Atlas)
* pnpm ( preferred ) or any node package manager npm, bun, yarn, etc.

### Steps

1. Clone this repo:

   ```bash
   git clone https://github.com/<ctrly4sh>/QuizAPI-Verto-ASE-challenge.git
   cd QuizAPI-Verto-ASE-challenge
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```
3. Create a `.env` file in the root directory:


   ```
   Note: You can refer to the .env.example file in this repository for the expected environment variables.

   ```env
   PORT=3001
   MONGO_URI=mongodb+srv://<your-connection-string>
   ```
4. Run the development server:

   ```bash
   pnpm run dev
   ```

---

## 3. 🧪 Running Test Cases

Unit tests are written with **Jest**.

To run them:

```bash
npm run test
```

Tests focus on:

* Quiz submission and scoring logic
* Single vs multiple vs text-type validation

---

## 4. 📝 Assumptions & Design Choices

* **Options**: Max 5 per question, stored as an array (user answers are matched by index).
* **Single Choice**: Exactly one correct option.
* **Multiple Choice**: Requires selecting all correct options (order doesn’t matter).
* **Text Questions**: Basic keyword/substring matching for scoring.
* **Validation**: Text answers limited to 300 chars.
* **Database**: MongoDB was chosen for its schema flexibility and also works well with TypeScript and Node.js.
* **Quiz → Question Relation**: Linked by `quizId` (questions don’t duplicate quiz title).

---

## Observation and Suggestions

### 📝 Text Answer Handling

- In this project, **text-based answers are matched exactly by word** (simple string/keyword matching).  
- This was chosen for simplicity and transparency.  
- In a real-world system, better approaches could be used, such as:
  - Using **similarity metrics** for approximate matching.  
  - Passing the question and user’s answer to a **language model (LLM)** or NLP service for semantic evaluation by using gemini api this can be implemented  fairly easily.  
- This design decision was intentional to keep the scope focused, but the project can be extended in these directions.  

### 📬 Postman Collection

Below is the postman collection file to view or test the API endpoints.

👉 [Download the collection here](https://github.com/ctrly4sh/QuizAPI-Verto-ASE-challenge/blob/main/assets/Quiz%20API%20-%20verto%20ASE%20Challenge.postman_collection.json)  

Steps to use:
1. Open Postman  
2. Import the above collection file  
3. Make sure the server (`pnpm run dev`) and MongoDB are running  
4. Run the requests directly (replace `quizId` in the requests with the one you will create and use the collection to test all the routes and features)  


