"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

export type WithClassNames<T extends string = string, Base = object> = Base & {
  classNames?: Partial<Record<T, string>>;
  className?: string;
};

export const ContainerLog = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  const [widthRem, setWidthRem] = useState<number>(0);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const px = entry.contentRect.width;
      setWidthRem(px / 16); // 👈 base 16px
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <span className="text-xs">{widthRem}rem</span>;
};

export const ContainerLogDemo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [widthRem, setWidthRem] = useState<number>(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const px = entry.contentRect.width;
      setWidthRem(px / 16); // 👈 base 16px
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <span className="self-start text-start text-xs">{widthRem}rem</span>
      <div ref={ref} className={className}>
        {children}
      </div>
    </>
  );
};
interface ContainerSectionProps
  extends WithClassNames<
    | "section"
    | "description"
    | "title"
    | "content"
    | "contentContainer"
    | "separator"
    | "log"
  > {
  title?: string;
  description?: string | React.JSX.Element;
  log?: boolean;
  children: React.ReactNode;
}

export const ContainerSectionLite = ({
  className,
  classNames,
  children,
  title,
  description,
  log,
}: ContainerSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      id="container-content-section"
      className={clsx("flex flex-col gap-8", className, classNames?.section)}
    >
      {(description || title) && (
        <section className="flex flex-col">
          {title && (
            <label
              className={clsx(`text-2xl font-semibold`, classNames?.title)}
            >
              {title}
            </label>
          )}
          {description && (
            <span
              className={clsx(
                "wrap-break-word break-all text-muted-foreground",
                classNames?.description
              )}
            >
              {description}
            </span>
          )}

          <div
            id="container-content-section-separator"
            className={clsx(
              `mt-4 bg-secondary-foreground/15 border-t`,
              classNames?.separator
            )}
          />
        </section>
      )}

      {log && (
        <aside className={classNames?.log}>
          <ContainerLog ref={ref} />
        </aside>
      )}
      <section
        className={clsx("@container grow z-50", classNames?.contentContainer)}
        ref={ref}
      >
        <div className={clsx(`content h-full`, classNames?.content)}>
          {children}
        </div>
      </section>
    </section>
  );
};
