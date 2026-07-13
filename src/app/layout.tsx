import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContentContainer } from "@/components/content-container";
import { EducationalDisclaimer } from "@/components/educational-disclaimer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tái Lập",
    template: "%s | Tái Lập",
  },
  description:
    "Dự án cộng đồng miễn phí cung cấp thông tin giáo dục chung và công cụ tự quản lý cho người đang gặp khó khăn vì nợ.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi">
      <body>
        <a className="skip-link" href="#noi-dung-chinh">
          Bỏ qua điều hướng
        </a>
        <SiteHeader />
        <main id="noi-dung-chinh">{children}</main>
        <ContentContainer>
          <div className="mt-12">
            <EducationalDisclaimer />
          </div>
        </ContentContainer>
        <SiteFooter />
      </body>
    </html>
  );
}
