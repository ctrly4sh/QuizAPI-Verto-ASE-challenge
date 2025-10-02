import { calculateScore } from "../services/scoringService";

describe("calculateScore", () => {
  const questions = [
    {
      _id: "q1",
      type: "single",
      correctOptions: [0]
    },
    {
      _id: "q2",
      type: "multiple",
      correctOptions: [0, 2]
    },
    {
      _id: "q3",
      type: "text",
      answerText: "express"
    }
  ];

  it("should score a single choice question correctly", () => {
    const answers = [{ questionId: "q1", selectedOptions: [0] }];
    const score = calculateScore(questions, answers);
    expect(score).toBe(1);
  });

  it("should fail if wrong option selected in single choice", () => {
    const answers = [{ questionId: "q1", selectedOptions: [1] }];
    expect(calculateScore(questions, answers)).toBe(0);
  });

  it("should score multiple choice only if all options match", () => {
    const answers = [{ questionId: "q2", selectedOptions: [0, 2] }];
    expect(calculateScore(questions, answers)).toBe(1);
  });

  it("should not score multiple choice if missing an option", () => {
    const answers = [{ questionId: "q2", selectedOptions: [0] }];
    expect(calculateScore(questions, answers)).toBe(0);
  });

  it("should match text answers case-insensitively", () => {
    const answers = [{ questionId: "q3", answerText: "Express" }];
    expect(calculateScore(questions, answers)).toBe(1);
  });
});
