import type { Metadata } from "next";

import { ContentContainer } from "@/components/content-container";
import { UrgentHelpLink } from "@/components/urgent-help-link";

export const metadata: Metadata = {
  title: "Kế hoạch hành động chung",
};

const sections = [
  {
    title: "Những việc không nên làm trong 24 giờ đầu",
    items: [
      "Không vay thêm chỉ để thanh toán khoản hiện có.",
      "Không cố gỡ bằng cờ bạc, đầu cơ hoặc khoản vay rủi ro hơn.",
      "Không trả tiền cho dịch vụ hứa xóa CIC hoặc cam kết giảm nợ.",
    ],
  },
  {
    title: "Những việc có thể chuẩn bị",
    items: [
      "Giữ ưu tiên cho chỗ ở, ăn uống, điện nước, đi lại thiết yếu và chăm sóc sức khỏe.",
      "Ghi lại các ngày đến hạn mà bạn đã biết.",
      "Chuẩn bị câu hỏi để tự liên hệ tổ chức tín dụng qua kênh chính thức.",
    ],
  },
];

export default function ActionPlanPage() {
  return (
    <ContentContainer>
      <article className="py-12 sm:py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Kế hoạch hành động chung
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Nội dung dưới đây là khung giáo dục chung. Trang không nhận dữ liệu
          từ health check và không tạo kế hoạch cá nhân hóa.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-8">
          <UrgentHelpLink />
        </div>
      </article>
    </ContentContainer>
  );
}
