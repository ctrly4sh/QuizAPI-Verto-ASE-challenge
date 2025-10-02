export function calculateScore(questions: any[], answers: any[]) {
    let score = 0;
  
    for (const ans of answers) {
      const q = questions.find(q => q._id.toString() === ans.questionId);
      if (!q) continue;
  
      if (q.type === "single") {
        if (ans.selectedOptions?.[0] === q.correctOptions?.[0]) score++;
      }
  
      if (q.type === "multiple") {
        const correct = q.correctOptions || [];
        const selected = ans.selectedOptions || [];
        if (
          correct.length === selected.length &&
          correct.every((opt: string) => selected.includes(opt))
        ) score++;
      }
  
      if (q.type === "text") {
        if (ans.answerText?.trim().toLowerCase() === q.answerText?.trim().toLowerCase())
          score++;
      }
    }
  
    return score;
  }
  