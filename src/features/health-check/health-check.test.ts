import { describe, expect, it } from "vitest";

import {
  evaluateHealthCheck,
  type HealthCheckAnswers,
  type HealthCheckResult,
} from "./health-check";

type DecisionCase = {
  answers: HealthCheckAnswers;
  expectedResult: HealthCheckResult;
  id: string;
};

const decisionCases: DecisionCase[] = [
  {
    id: "T01",
    answers: { hc01: "yes-or-unsure" },
    expectedResult: "urgent-support",
  },
  {
    id: "T02",
    answers: { hc01: "no", hc02: "yes", hc03: "no", hc04: "yes" },
    expectedResult: "debt-spiral-signs",
  },
  {
    id: "T03",
    answers: { hc01: "no", hc02: "no", hc03: "no", hc04: "no" },
    expectedResult: "early-action",
  },
  {
    id: "T04",
    answers: { hc01: "no", hc02: "no", hc03: "yes", hc04: "yes" },
    expectedResult: "early-action",
  },
  {
    id: "T05",
    answers: { hc01: "no", hc02: "no", hc03: "unsure", hc04: "no" },
    expectedResult: "early-action",
  },
  {
    id: "T06",
    answers: { hc01: "no", hc02: "no", hc03: "yes", hc04: "unsure" },
    expectedResult: "early-action",
  },
  {
    id: "T07",
    answers: { hc01: "no", hc02: "no", hc03: "yes", hc04: "no" },
    expectedResult: "monitor-and-prepare",
  },
  {
    id: "T08",
    answers: {
      hc01: "prefer-not-to-answer",
      hc02: "no",
      hc03: "yes",
      hc04: "no",
    },
    expectedResult: "monitor-and-prepare",
  },
  {
    id: "T09",
    answers: {
      hc01: "prefer-not-to-answer",
      hc02: "yes",
      hc03: "no",
      hc04: "yes",
    },
    expectedResult: "debt-spiral-signs",
  },
  {
    id: "T10",
    answers: {
      hc01: "no",
      hc02: "prefer-not-to-answer",
      hc03: "yes",
      hc04: "no",
    },
    expectedResult: "monitor-and-prepare",
  },
  {
    id: "T11",
    answers: { hc01: "no", hc02: "no", hc03: "no", hc04: "yes" },
    expectedResult: "early-action",
  },
  {
    id: "T12",
    answers: { hc01: "no", hc02: "yes", hc03: "yes", hc04: "no" },
    expectedResult: "debt-spiral-signs",
  },
];

describe("evaluateHealthCheck", () => {
  it.each(decisionCases)(
    "$id trả đúng kết quả trong decision table",
    ({ answers, expectedResult }) => {
      expect(evaluateHealthCheck(answers)?.result).toBe(expectedResult);
    },
  );

  it("chỉ HC-02 = Có có thể tạo kết quả vòng xoáy nợ", () => {
    const hc01Answers = ["no", "prefer-not-to-answer"] as const;
    const hc02Answers = ["no", "prefer-not-to-answer"] as const;
    const hc03AndHc04Answers = [
      "yes",
      "no",
      "unsure",
      "prefer-not-to-answer",
    ] as const;

    for (const hc01 of hc01Answers) {
      for (const hc02 of hc02Answers) {
        for (const hc03 of hc03AndHc04Answers) {
          for (const hc04 of hc03AndHc04Answers) {
            expect(
              evaluateHealthCheck({ hc01, hc02, hc03, hc04 })?.result,
            ).not.toBe("debt-spiral-signs");
          }
        }
      }
    }
  });

  it("đánh dấu đúng giải thích bổ sung theo pseudocode", () => {
    expect(
      evaluateHealthCheck({
        hc01: "no",
        hc02: "no",
        hc03: "no",
        hc04: "no",
      }),
    ).toMatchObject({
      prioritizeEssentialNeeds: true,
      showUnsureExplanation: false,
    });

    expect(
      evaluateHealthCheck({
        hc01: "no",
        hc02: "no",
        hc03: "unsure",
        hc04: "no",
      }),
    ).toMatchObject({
      prioritizeEssentialNeeds: false,
      showUnsureExplanation: true,
    });

    expect(
      evaluateHealthCheck({
        hc01: "no",
        hc02: "prefer-not-to-answer",
        hc03: "yes",
        hc04: "no",
      }),
    ).toMatchObject({ hasSkippedAnswer: true });
  });

  it("chưa trả kết quả khi các câu bắt buộc còn chưa được chọn", () => {
    expect(evaluateHealthCheck({ hc01: "no", hc02: "yes" })).toBeNull();
  });
});
