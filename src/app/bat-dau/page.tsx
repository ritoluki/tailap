import type { Metadata } from "next";
import Link from "next/link";

import { ContentContainer } from "@/components/content-container";
import { SensitiveDataWarning } from "@/components/sensitive-data-warning";
import { UrgentHelpLink } from "@/components/urgent-help-link";
import { HealthCheckForm } from "@/features/health-check/health-check-form";

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
          Bốn câu hỏi dưới đây giúp bạn nhận diện một số tín hiệu chung và chọn
          bước tiếp theo an toàn hơn. Công cụ không xác định nhóm nợ CIC, không
          chẩn đoán và không dự đoán hành động của tổ chức tín dụng.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-slate-300 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Trước khi bắt đầu
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Chỉ chọn đáp án phù hợp nhất với tình trạng hiện tại. Bạn không
              cần nhập tên, số tiền, tổ chức tín dụng, số hợp đồng hoặc gửi giấy
              tờ.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-600">
              Bạn có thể chọn “Tôi không muốn trả lời” và vẫn tiếp tục.
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

        <HealthCheckForm />

        <noscript>
          <section className="mt-8 rounded-2xl border border-slate-300 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Health check cần JavaScript để xử lý câu trả lời trong trình duyệt
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Bạn vẫn có thể đọc kế hoạch hành động chung hoặc mở trang hỗ trợ
              khẩn cấp mà không cần hoàn thành health check.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                className="font-semibold text-teal-800 underline"
                href="/ke-hoach-hanh-dong"
              >
                Xem kế hoạch hành động chung
              </Link>
              <Link
                className="font-semibold text-red-800 underline"
                href="/ho-tro-khan-cap"
              >
                Mở trang hỗ trợ khẩn cấp
              </Link>
            </div>
          </section>
        </noscript>
      </article>
    </ContentContainer>
  );
}
