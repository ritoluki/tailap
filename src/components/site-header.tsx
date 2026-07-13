import Link from "next/link";

import { ContentContainer } from "@/components/content-container";
import { UrgentHelpLink } from "@/components/urgent-help-link";

const navigation = [
  { href: "/bat-dau", label: "Bắt đầu" },
  { href: "/ke-hoach-hanh-dong", label: "Kế hoạch chung" },
  { href: "/quyen-rieng-tu", label: "Quyền riêng tư" },
  { href: "/ve-du-an", label: "Về dự án" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <ContentContainer>
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            Tái Lập
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <nav aria-label="Điều hướng chính">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <UrgentHelpLink compact />
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}
