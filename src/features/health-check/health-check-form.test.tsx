import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  SKIPPED_ANSWER_EXPLANATION,
  UNSURE_EXPLANATION,
} from "./health-check-content";
import { HealthCheckForm } from "./health-check-form";

const questions = {
  hc01: /Ngay lúc này, bạn có cảm thấy bản thân hoặc người khác không an toàn/,
  hc02: /Bạn có đang vay thêm hoặc sử dụng một khoản tín dụng khác/,
  hc03: /Sau khi thanh toán các khoản đến hạn/,
  hc04: /Hiện tại, bạn có đang chậm thanh toán/,
};

async function chooseAnswer(
  user: ReturnType<typeof userEvent.setup>,
  questionName: RegExp,
  answerName: string,
) {
  const group = screen.getByRole("group", { name: questionName });
  await user.click(within(group).getByRole("radio", { name: answerName }));
}

describe("HealthCheckForm", () => {
  it("cho phép chọn crisis gate bằng bàn phím", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    const crisisGate = screen.getByRole("group", { name: questions.hc01 });
    const urgentAnswer = within(crisisGate).getByRole("radio", {
      name: "Có hoặc tôi không chắc",
    });
    urgentAnswer.focus();
    await user.keyboard(" ");

    expect(
      screen.getAllByRole("heading", { name: "Cần hỗ trợ khẩn cấp" }),
    ).toHaveLength(2);
  });

  it("dừng ngay và chỉ hiển thị hỗ trợ khẩn cấp khi HC-01 có tín hiệu", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Có hoặc tôi không chắc");

    expect(
      screen.getAllByRole("heading", { name: "Cần hỗ trợ khẩn cấp" }),
    ).toHaveLength(2);
    expect(
      screen.queryByRole("group", { name: questions.hc02 }),
    ).not.toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Hỗ trợ khẩn cấp" }).length,
    ).toBeGreaterThan(0);
  });

  it("tiếp tục sau HC-01 = Không", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Không");

    expect(
      screen.getByRole("group", { name: questions.hc02 }),
    ).toBeInTheDocument();
  });

  it("làm nổi bật hỗ trợ khẩn cấp và vẫn tiếp tục khi bỏ qua HC-01", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Tôi không muốn trả lời");

    expect(
      screen.getByText(/Bạn có thể mở trang hỗ trợ khẩn cấp ngay/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: questions.hc02 }),
    ).toBeInTheDocument();
  });

  it("hiển thị copy bỏ qua mà không tự nâng mức kết quả", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Không");
    await chooseAnswer(user, questions.hc02, "Tôi không muốn trả lời");
    await chooseAnswer(user, questions.hc03, "Có");
    await chooseAnswer(user, questions.hc04, "Không");
    await user.click(screen.getByRole("button", { name: "Xem kết quả" }));

    expect(
      screen.getAllByRole("heading", {
        name: "Tiếp tục theo dõi và chuẩn bị",
      }),
    ).toHaveLength(2);
    expect(screen.getByText(SKIPPED_ANSWER_EXPLANATION)).toBeInTheDocument();
  });

  it("hiển thị copy Tôi không chắc với kết quả hành động sớm", async () => {
    const user = userEvent.setup();
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Không");
    await chooseAnswer(user, questions.hc02, "Không");
    await chooseAnswer(user, questions.hc03, "Tôi không chắc");
    await chooseAnswer(user, questions.hc04, "Không");
    await user.click(screen.getByRole("button", { name: "Xem kết quả" }));

    expect(
      screen.getAllByRole("heading", { name: "Cần hành động sớm" }),
    ).toHaveLength(2);
    expect(screen.getByText(UNSURE_EXPLANATION)).toBeInTheDocument();
  });

  it("cuộn và chuyển focus đến action plan trên cùng trang", async () => {
    const user = userEvent.setup();
    const scrollIntoView = vi.spyOn(Element.prototype, "scrollIntoView");
    render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Không");
    await chooseAnswer(user, questions.hc02, "Không");
    await chooseAnswer(user, questions.hc03, "Có");
    await chooseAnswer(user, questions.hc04, "Không");
    await user.click(screen.getByRole("button", { name: "Xem kết quả" }));
    await user.click(
      screen.getByRole("button", { name: "Xem bước tiếp theo" }),
    );

    const actionPlan = document.getElementById(
      "action-plan-monitor-and-prepare",
    );
    const actionPlanHeading = within(actionPlan as HTMLElement).getByRole(
      "heading",
      { name: "Tiếp tục theo dõi và chuẩn bị" },
    );

    expect(scrollIntoView).toHaveBeenCalledOnce();
    expect(actionPlanHeading).toHaveFocus();
    expect(window.location.pathname).toBe("/bat-dau");
    expect(window.location.search).toBe("");
    expect(window.location.hash).toBe("");
  });

  it("không gửi network, không ghi browser storage và remount xóa state", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const storageSpy = vi.spyOn(Storage.prototype, "setItem");
    const firstRender = render(<HealthCheckForm />);

    await chooseAnswer(user, questions.hc01, "Không");
    await chooseAnswer(user, questions.hc02, "Có");
    await chooseAnswer(user, questions.hc03, "Có");
    await chooseAnswer(user, questions.hc04, "Không");
    await user.click(screen.getByRole("button", { name: "Xem kết quả" }));

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(storageSpy).not.toHaveBeenCalled();
    expect(
      screen.getAllByRole("heading", { name: "Có dấu hiệu vòng xoáy nợ" }),
    ).toHaveLength(2);

    firstRender.unmount();
    render(<HealthCheckForm />);

    const crisisGate = screen.getByRole("group", { name: questions.hc01 });
    expect(
      within(crisisGate)
        .getAllByRole("radio")
        .every((radio) => !(radio as HTMLInputElement).checked),
    ).toBe(true);
    expect(
      screen.queryByRole("group", { name: questions.hc02 }),
    ).not.toBeInTheDocument();
  });
});
