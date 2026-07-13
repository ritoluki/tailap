import Link from "next/link";

import { ContentContainer } from "@/components/content-container";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-8 text-sm text-slate-700">
      <ContentContainer>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Tái Lập – Dự án cộng đồng miễn phí.</p>
          <nav aria-label="Điều hướng cuối trang">
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link className="underline underline-offset-4" href="/quyen-rieng-tu">
                  Quyền riêng tư
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/ve-du-an">
                  Về dự án
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </ContentContainer>
    </footer>
  );
}
