export const PREFER_NOT_TO_ANSWER = "prefer-not-to-answer" as const;

export type Hc01Answer =
  | "yes-or-unsure"
  | "no"
  | typeof PREFER_NOT_TO_ANSWER;

export type Hc02Answer = "yes" | "no" | typeof PREFER_NOT_TO_ANSWER;

export type Hc03OrHc04Answer =
  | "yes"
  | "no"
  | "unsure"
  | typeof PREFER_NOT_TO_ANSWER;

export type HealthCheckAnswers = {
  hc01?: Hc01Answer;
  hc02?: Hc02Answer;
  hc03?: Hc03OrHc04Answer;
  hc04?: Hc03OrHc04Answer;
};

export type HealthCheckResult =
  | "urgent-support"
  | "debt-spiral-signs"
  | "early-action"
  | "monitor-and-prepare";

export type HealthCheckDecision = {
  result: HealthCheckResult;
  hasSkippedAnswer: boolean;
  highlightUrgentHelp: boolean;
  prioritizeEssentialNeeds: boolean;
  showUnsureExplanation: boolean;
  stopFinancialContent: boolean;
};

export function isHealthCheckComplete(
  answers: HealthCheckAnswers,
): answers is Required<HealthCheckAnswers> {
  return Boolean(
    answers.hc01 && answers.hc02 && answers.hc03 && answers.hc04,
  );
}

export function evaluateHealthCheck(
  answers: HealthCheckAnswers,
): HealthCheckDecision | null {
  const hasSkippedAnswer = Object.values(answers).some(
    (answer) => answer === PREFER_NOT_TO_ANSWER,
  );
  const highlightUrgentHelp = answers.hc01 === PREFER_NOT_TO_ANSWER;

  if (answers.hc01 === "yes-or-unsure") {
    return {
      result: "urgent-support",
      hasSkippedAnswer,
      highlightUrgentHelp: false,
      prioritizeEssentialNeeds: false,
      showUnsureExplanation: false,
      stopFinancialContent: true,
    };
  }

  if (!isHealthCheckComplete(answers)) {
    return null;
  }

  if (answers.hc02 === "yes") {
    return {
      result: "debt-spiral-signs",
      hasSkippedAnswer,
      highlightUrgentHelp,
      prioritizeEssentialNeeds: false,
      showUnsureExplanation: false,
      stopFinancialContent: false,
    };
  }

  if (answers.hc03 === "no") {
    return {
      result: "early-action",
      hasSkippedAnswer,
      highlightUrgentHelp,
      prioritizeEssentialNeeds: true,
      showUnsureExplanation: false,
      stopFinancialContent: false,
    };
  }

  if (answers.hc04 === "yes") {
    return {
      result: "early-action",
      hasSkippedAnswer,
      highlightUrgentHelp,
      prioritizeEssentialNeeds: false,
      showUnsureExplanation: false,
      stopFinancialContent: false,
    };
  }

  if (answers.hc03 === "unsure" || answers.hc04 === "unsure") {
    return {
      result: "early-action",
      hasSkippedAnswer,
      highlightUrgentHelp,
      prioritizeEssentialNeeds: false,
      showUnsureExplanation: true,
      stopFinancialContent: false,
    };
  }

  return {
    result: "monitor-and-prepare",
    hasSkippedAnswer,
    highlightUrgentHelp,
    prioritizeEssentialNeeds: false,
    showUnsureExplanation: false,
    stopFinancialContent: false,
  };
}
