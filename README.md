# Quiz API - Verto ASE Challenge

## 📖 Project Description

This project implements a **backend service for a quiz application**, built as part of the **Verto ASE Challenge**.

It provides APIs to create quizzes, add questions, fetch questions (without exposing correct answers), and submit answers with scoring logic.

---

## ⚙️ Setup Instructions

### Prerequisites

* **Node.js** (>= 18)
* **MongoDB** (local or Atlas cluster)
* **pnpm** (preferred package manager) → [Install guide](https://pnpm.io/installation)
  *(npm, yarn, or bun can also work, but `pnpm` is the default used in this project)*

---

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/ctrly4sh/QuizAPI-Verto-ASE-challenge.git
   cd QuizAPI-Verto-ASE-challenge
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**p
   * Create a `.env` file in the root directory
   * A `.env.example` is provided as a template

   ```env
   PORT=3001
   MONGO_URI=mongodb+srv://<your-connection-string>
   ```

4. **Run the development server**

   ```bash
   pnpm run dev
   ```

---

## 🧪 Running Test Cases

Unit tests are written with **Jest**.

Run them with:

```bash
pnpm run test
```

Tests cover:

* Quiz submission & scoring logic
* Validation for single / multiple / text-type questions

---

## 📝 Assumptions & Design Choices

* **Options**: Max 5 per question, stored as an array (user answers matched by index).
* **Single Choice**: Exactly one correct option.
* **Multiple Choice**: Must select all correct options (order doesn’t matter).
* **Text Questions**: Currently strict word/substring matching.
* **Validation**: Text answers limited to 300 chars.
* **Database**: MongoDB chosen for schema flexibility + Node.js/TypeScript compatibility.
* **Quiz → Question relation**: Linked via `quizId` (no duplicate quiz titles in questions).

---

## 📝 Text Answer Handling

* **Current Implementation**: Exact word match (simple keyword logic).
* **Improvement Possibilities**:

  * Use similarity metrics (e.g., Levenshtein distance, cosine similarity).
  * Integrate with an **NLP/LLM API** (e.g., Gemini API) to semantically evaluate answers.

---

## 📬 Postman Collection

A Postman collection is provided for easy testing.

👉 [Download the collection here](https://github.com/ctrly4sh/QuizAPI-Verto-ASE-challenge/blob/main/assets/postman-collection.json)

Steps to use:

1. Open Postman
2. Import the collection file
3. Ensure MongoDB and the dev server (`pnpm run dev`) are running
4. Replace `quizId` with the one you create, then run requests directly

