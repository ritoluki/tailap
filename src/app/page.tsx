import Link from "next/link";

import { ContentContainer } from "@/components/content-container";
import { SensitiveDataWarning } from "@/components/sensitive-data-warning";
import { UrgentHelpLink } from "@/components/urgent-help-link";

export default function HomePage() {
  return (
    <>
      <section className="bg-teal-950 py-16 text-white sm:py-24">
        <ContentContainer>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Dự án cộng đồng miễn phí
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Một điểm bắt đầu bình tĩnh khi bạn đang gặp khó khăn vì nợ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-teal-50">
            Bạn không cần gửi giấy tờ để bắt đầu. Tái Lập cung cấp thông tin
            giáo dục chung, giúp bạn chuẩn bị bước tiếp theo qua kênh chính
            thức.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/bat-dau"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-950 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Bắt đầu
            </Link>
            <UrgentHelpLink />
          </div>
        </ContentContainer>
      </section>

      <ContentContainer>
        <section className="grid gap-6 py-12 md:grid-cols-3" aria-label="Phạm vi first slice">
          {[
            ["Nhận diện sớm", "Xem các dấu hiệu chung cần chú ý mà không xác định CIC hoặc dự đoán kết quả."],
            ["Chuẩn bị", "Sắp xếp việc cần làm và câu hỏi để tự liên hệ qua kênh chính thức."],
            ["Tìm đúng hỗ trợ", "Biết khi nào nên dừng nội dung tài chính và tìm hỗ trợ trực tiếp."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{description}</p>
            </article>
          ))}
        </section>
        <SensitiveDataWarning />
      </ContentContainer>
    </>
  );
}
