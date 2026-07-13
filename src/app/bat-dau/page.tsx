import type { Metadata } from "next";

import { ContentContainer } from "@/components/content-container";
import { SensitiveDataWarning } from "@/components/sensitive-data-warning";
import { UrgentHelpLink } from "@/components/urgent-help-link";

export const metadata: Metadata = {
  title: "Bắt đầu",
};

export default function StartPage() {
  return (
    <ContentContainer>
      <article className="py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
          First slice
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Bắt đầu khi bạn lo mình sắp không đủ khả năng thanh toán
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Trang này mới là khung nội dung. Health check và decision table chưa
          được triển khai trong lần scaffold này.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Khu vực health check
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Khi được triển khai ở slice tiếp theo, câu trả lời chỉ tồn tại
              trong bộ nhớ của trang và bị xóa khi tải lại hoặc đóng tab.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-600">
              Hiện chưa có câu hỏi, lưu trữ, phân loại hoặc kết quả động.
            </p>
          </section>
          <div>
            <UrgentHelpLink />
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Bạn có thể mở trang hỗ trợ khẩn cấp mà không cần hoàn thành bất
              kỳ công cụ nào.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <SensitiveDataWarning />
        </div>
      </article>
    </ContentContainer>
  );
}
