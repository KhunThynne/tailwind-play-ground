import clsx from "clsx";

export const ContainerQueryDemo = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg bg-background">
      <h2 className="text-xl font-bold">Container Queries</h2>
      <p className="text-muted-foreground">
        Resize the <strong>panel handle</strong> to see changes. These classes
        respond to the parent container&apos;s width.
      </p>

      <div className="grid gap-2">
        <ContainerIndicator
          label="@xs (320px / 20rem)"
          className="hidden @xs:flex"
          description="Extra Small container (≥ 20rem)"
        />
        <ContainerIndicator
          label="@sm (384px / 24rem)"
          className="hidden @sm:flex"
          description="Small container (≥ 24rem)"
        />
        <ContainerIndicator
          label="@md (448px / 28rem)"
          className="hidden @md:flex"
          description="Medium container (≥ 28rem)"
        />
        <ContainerIndicator
          label="@lg (512px / 32rem)"
          className="hidden @lg:flex"
          description="Large container (≥ 32rem)"
        />
        <ContainerIndicator
          label="@xl (576px / 36rem)"
          className="hidden @xl:flex"
          description="Extra Large container (≥ 36rem)"
        />
        <ContainerIndicator
          label="@2xl (672px / 42rem)"
          className="hidden @2xl:flex"
          description="2X Large container (≥ 42rem)"
        />
      </div>

      <div className="p-4 text-center text-white transition-colors rounded bg-slate-500 @sm:bg-blue-500 @md:bg-green-500 @lg:bg-purple-500">
        Current Container Color
      </div>
    </div>
  );
};

const ContainerIndicator = ({
  label,
  className,
  description,
}: {
  label: string;
  className?: string;
  description: string;
}) => {
  return (
    <div
      className={clsx(
        "p-2 rounded flex items-center justify-between border-2 border-transparent",
        // Default state (hidden/inactive logic handling is done via parent className usually, but here we want to show 'inactive' style if not matched)
        // Since the className passed includes 'hidden', this entire div will be hidden if not active.
        // To "show inactive" state effectively with container queries, we'd need a different approach (e.g. style queries or always visible with conditional styling).
        // For simple demo, we'll let them appear/disappear.
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        className
      )}
    >
      <span className="font-mono font-medium">{label}</span>
      <span className="text-sm">{description}</span>
      <span className="ml-2 font-bold">✓</span>
    </div>
  );
};
