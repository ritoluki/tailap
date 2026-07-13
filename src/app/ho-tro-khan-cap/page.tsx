import type { Metadata } from "next";

import { ContentContainer } from "@/components/content-container";

export const metadata: Metadata = {
  title: "Hỗ trợ khẩn cấp",
};

export default function UrgentHelpPage() {
  return (
    <ContentContainer>
      <article className="py-12 sm:py-16">
        <div className="rounded-3xl border-2 border-red-300 bg-red-50 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
            Hỗ trợ trực tiếp
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-red-950">
            Nếu bạn cảm thấy bản thân hoặc người khác không an toàn
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-red-950">
            Hãy dừng nội dung tài chính và tìm hỗ trợ trực tiếp ngay từ cơ sở
            y tế hoặc cơ quan chức năng gần nhất qua kênh chính thức.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-red-950">
            <li>Liên hệ một người đáng tin cậy nếu có thể.</li>
            <li>Không ở một mình nếu bạn lo nguy cơ có thể xảy ra ngay.</li>
            <li>Không gửi câu chuyện hoặc hồ sơ cho dự án.</li>
          </ul>
          <p className="mt-8 border-t border-red-300 pt-5 font-semibold text-red-950">
            Tái Lập không phải dịch vụ cấp cứu và không có nhân sự theo dõi
            hoặc phản hồi 24/7.
          </p>
        </div>
      </article>
    </ContentContainer>
  );
}
