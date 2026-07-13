import type { Metadata } from "next";

import { ContentContainer } from "@/components/content-container";

export const metadata: Metadata = {
  title: "Về dự án",
};

export default function AboutPage() {
  return (
    <ContentContainer>
      <article className="py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
          Về Tái Lập
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Dự án cộng đồng hỗ trợ phục hồi tài chính
        </h1>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Tái Lập là dự án cộng đồng miễn phí đang trong giai đoạn xây dựng
            first slice. Mục tiêu là cung cấp một điểm bắt đầu trung lập,
            không phán xét và tôn trọng quyền riêng tư.
          </p>
          <p>
            Dự án không phải tổ chức phi lợi nhuận, tổ chức tín dụng, tổ chức
            hành nghề luật sư, cơ sở y tế hoặc dịch vụ xử lý nợ.
          </p>
          <p>
            Tái Lập không đại diện người dùng, không xác định nhóm nợ CIC,
            không dự đoán hành động của ngân hàng và không hứa giảm nợ hoặc
            xử lý CIC.
          </p>
        </div>
      </article>
    </ContentContainer>
  );
}
