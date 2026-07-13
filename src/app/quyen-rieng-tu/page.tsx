import type { Metadata } from "next";

import { ContentContainer } from "@/components/content-container";
import { SensitiveDataWarning } from "@/components/sensitive-data-warning";

export const metadata: Metadata = {
  title: "Quyền riêng tư",
};

export default function PrivacyPage() {
  return (
    <ContentContainer>
      <article className="py-12 sm:py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Quyền riêng tư trong first slice
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Scaffold hiện tại không có form, health-check logic, analytics,
          cookie, tài khoản, database hoặc API nhận dữ liệu người dùng.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Trong trình duyệt</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Health check trong first slice tương lai sẽ chỉ dùng state trong
              memory; tải lại trang hoặc đóng tab sẽ xóa câu trả lời.
            </p>
          </section>
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Trên hosting</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Nhà cung cấp hosting chưa được chọn. Access-log retention và
              security headers phải được xác nhận trước khi public.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <SensitiveDataWarning />
        </div>
      </article>
    </ContentContainer>
  );
}
