"use client";

import { useRef, useState } from "react";

import { UrgentHelpLink } from "@/components/urgent-help-link";

import {
  HC01,
  HC02,
  HC03,
  HC04,
  HEALTH_CHECK_NOTICE,
  RESULT_CONTENT,
  SKIPPED_ANSWER_EXPLANATION,
  UNSURE_EXPLANATION,
  type HealthCheckOption,
} from "./health-check-content";
import {
  evaluateHealthCheck,
  type Hc01Answer,
  type Hc02Answer,
  type Hc03OrHc04Answer,
  type HealthCheckAnswers,
  type HealthCheckDecision,
} from "./health-check";

type QuestionProps<TValue extends string> = {
  id: string;
  legend: string;
  onChange: (value: TValue) => void;
  options: HealthCheckOption<TValue>[];
  value?: TValue;
};

function Question<TValue extends string>({
  id,
  legend,
  onChange,
  options,
  value,
}: QuestionProps<TValue>) {
  return (
    <fieldset className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-6">
      <legend className="max-w-3xl px-1 text-lg font-semibold leading-7 text-slate-950">
        {legend}
      </legend>
      <div className="mt-4 grid gap-3">
        {options.map((option) => (
          <label
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-800 hover:border-teal-400 hover:bg-teal-50/60 has-[:checked]:border-teal-700 has-[:checked]:bg-teal-50"
            key={option.value}
          >
            <input
              checked={value === option.value}
              className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
              name={id}
              onChange={() => onChange(option.value)}
              required
              type="radio"
              value={option.value}
            />
            <span className="leading-6">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function HealthCheckForm() {
  const [answers, setAnswers] = useState<HealthCheckAnswers>({});
  const [decision, setDecision] = useState<HealthCheckDecision | null>(null);
  const actionPlanRef = useRef<HTMLElement>(null);
  const actionPlanHeadingRef = useRef<HTMLHeadingElement>(null);

  const chooseHc01 = (value: Hc01Answer) => {
    const nextAnswers: HealthCheckAnswers = { hc01: value };
    setAnswers(nextAnswers);
    setDecision(
      value === "yes-or-unsure" ? evaluateHealthCheck(nextAnswers) : null,
    );
  };

  const chooseAnswer = <TKey extends "hc02" | "hc03" | "hc04">(
    key: TKey,
    value: NonNullable<HealthCheckAnswers[TKey]>,
  ) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setDecision(null);
  };

  const submitHealthCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDecision(evaluateHealthCheck(answers));
  };

  const showNextQuestions =
    answers.hc01 === "no" || answers.hc01 === "prefer-not-to-answer";
  const highlightUrgentHelp =
    answers.hc01 === "prefer-not-to-answer" ||
    decision?.highlightUrgentHelp === true;

  const scrollToActionPlan = () => {
    actionPlanRef.current?.scrollIntoView({ block: "start" });
    actionPlanHeadingRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="mt-8">
      <aside
        aria-label="Cách health check xử lý câu trả lời"
        className="rounded-2xl border border-sky-300 bg-sky-50 p-5 text-sm leading-6 text-sky-950"
      >
        <p className="font-semibold">Câu trả lời chỉ tồn tại trên trang này.</p>
        <p className="mt-2">{HEALTH_CHECK_NOTICE}</p>
      </aside>

      {decision?.stopFinancialContent ? (
        <Result decision={decision} />
      ) : (
        <form className="mt-8 grid gap-6" onSubmit={submitHealthCheck}>
          <Question
            id={HC01.id}
            legend={HC01.legend}
            onChange={chooseHc01}
            options={HC01.options}
            value={answers.hc01}
          />

          {highlightUrgentHelp ? (
            <aside
              aria-label="Bạn có thể mở hỗ trợ khẩn cấp"
              className="rounded-2xl border-2 border-red-500 bg-red-50 p-5 text-red-950"
            >
              <p className="font-semibold">
                Bạn có thể mở trang hỗ trợ khẩn cấp ngay, không cần hoàn thành
                health check.
              </p>
              <div className="mt-4">
                <UrgentHelpLink />
              </div>
            </aside>
          ) : null}

          {showNextQuestions ? (
            <>
              <Question
                id={HC02.id}
                legend={HC02.legend}
                onChange={(value: Hc02Answer) =>
                  chooseAnswer("hc02", value)
                }
                options={HC02.options}
                value={answers.hc02}
              />
              <Question
                id={HC03.id}
                legend={HC03.legend}
                onChange={(value: Hc03OrHc04Answer) =>
                  chooseAnswer("hc03", value)
                }
                options={HC03.options}
                value={answers.hc03}
              />
              <Question
                id={HC04.id}
                legend={HC04.legend}
                onChange={(value: Hc03OrHc04Answer) =>
                  chooseAnswer("hc04", value)
                }
                options={HC04.options}
                value={answers.hc04}
              />
              <button
                className="w-fit rounded-xl bg-teal-800 px-5 py-3 font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
                type="submit"
              >
                Xem kết quả
              </button>
            </>
          ) : null}
        </form>
      )}

      {decision ? (
        <>
          {!decision.stopFinancialContent ? <Result decision={decision} /> : null}
          <button
            className="mt-5 rounded-xl border border-teal-700 bg-white px-5 py-3 font-semibold text-teal-900 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            onClick={scrollToActionPlan}
            type="button"
          >
            Xem bước tiếp theo
          </button>
          <ActionPlan
            decision={decision}
            headingRef={actionPlanHeadingRef}
            sectionRef={actionPlanRef}
          />
        </>
      ) : null}
    </div>
  );
}

function Result({ decision }: { decision: HealthCheckDecision }) {
  const content = RESULT_CONTENT[decision.result];

  return (
    <section
      aria-live={decision.stopFinancialContent ? "assertive" : "polite"}
      className={`mt-8 rounded-2xl border p-6 ${
        decision.stopFinancialContent
          ? "border-red-400 bg-red-50"
          : "border-teal-300 bg-teal-50"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">
        Kết quả health check
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {content.label}
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-800">
        {content.explanation}
      </p>
      {decision.prioritizeEssentialNeeds ? (
        <p className="mt-3 font-semibold leading-7 text-slate-900">
          Hãy ưu tiên giữ lại chi phí cho các nhu cầu sống thiết yếu.
        </p>
      ) : null}
      {decision.showUnsureExplanation ? (
        <p className="mt-3 leading-7 text-slate-800">{UNSURE_EXPLANATION}</p>
      ) : null}
      {decision.hasSkippedAnswer ? (
        <p className="mt-3 leading-7 text-slate-800">
          {SKIPPED_ANSWER_EXPLANATION}
        </p>
      ) : null}
      {decision.stopFinancialContent ? (
        <div className="mt-5">
          <UrgentHelpLink />
        </div>
      ) : null}
    </section>
  );
}

type ActionPlanProps = {
  decision: HealthCheckDecision;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  sectionRef: React.RefObject<HTMLElement | null>;
};

function ActionPlan({ decision, headingRef, sectionRef }: ActionPlanProps) {
  const content = RESULT_CONTENT[decision.result];

  return (
    <section
      className="mt-8 scroll-mt-24 rounded-2xl border border-slate-300 bg-white p-6 sm:p-8"
      id={`action-plan-${decision.result}`}
      ref={sectionRef}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Bước tiếp theo — thông tin giáo dục chung
      </p>
      <h2
        className="mt-2 text-2xl font-bold text-slate-950 focus:outline-none"
        ref={headingRef}
        tabIndex={-1}
      >
        {content.label}
      </h2>
      <ul className="mt-5 grid gap-3 pl-5 text-slate-800 marker:text-teal-700">
        {content.actions.map((action) => (
          <li className="list-disc pl-1 leading-7" key={action}>
            {action}
          </li>
        ))}
      </ul>
      {decision.result === "urgent-support" ? (
        <div className="mt-6">
          <UrgentHelpLink />
        </div>
      ) : null}
    </section>
  );
}
