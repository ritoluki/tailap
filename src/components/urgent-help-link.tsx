import Link from "next/link";

type UrgentHelpLinkProps = {
  compact?: boolean;
};

export function UrgentHelpLink({ compact = false }: UrgentHelpLinkProps) {
  return (
    <Link
      href="/ho-tro-khan-cap"
      className={
        compact
          ? "inline-flex rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm font-semibold text-red-900 hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          : "inline-flex rounded-xl border border-red-300 bg-red-50 px-5 py-3 font-semibold text-red-900 hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
      }
    >
      Hỗ trợ khẩn cấp
    </Link>
  );
}
