import type { ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
};

export function ContentContainer({ children }: ContentContainerProps) {
  return <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</div>;
}
