import clsx from "clsx";

export const ViewportBreakpointDemo = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg bg-background">
      <h2 className="text-xl font-bold">Viewport Breakpoints</h2>
      <p className="text-muted-foreground">
        Resize the <strong>window</strong> to see changes. These classes respond
        to the browser window width.
      </p>

      <div className="grid gap-2">
        <BreakpointIndicator
          label="base"
          active={true}
          description="Always active"
        />
        <BreakpointIndicator
          label="sm (640px / 40rem)"
          className="hidden sm:flex"
          description="Active at ≥ 640px (40rem)"
        />
        <BreakpointIndicator
          label="md (768px / 48rem)"
          className="hidden md:flex"
          description="Active at ≥ 768px (48rem)"
        />
        <BreakpointIndicator
          label="lg (1024px / 64rem)"
          className="hidden lg:flex"
          description="Active at ≥ 1024px (64rem)"
        />
        <BreakpointIndicator
          label="xl (1280px / 80rem)"
          className="hidden xl:flex"
          description="Active at ≥ 1280px (80rem)"
        />
        <BreakpointIndicator
          label="2xl (1536px / 96rem)"
          className="hidden 2xl:flex"
          description="Active at ≥ 1536px (96rem)"
        />
      </div>

      <div className="p-4 text-center text-white transition-colors rounded bg-slate-500 sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500 xl:bg-orange-500">
        Current Active Color Class
      </div>
    </div>
  );
};

const BreakpointIndicator = ({
  label,
  className,
  active = false,
  description,
}: {
  label: string;
  className?: string;
  active?: boolean;
  description: string;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between p-2 rounded",
        active || className
          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
          : "bg-muted"
      )}
    >
      <span className="font-mono font-medium">{label}</span>
      <span className="text-sm">{description}</span>
      {/* This ensures the visual indicator only shows when the parent className condition is met (if provided) */}
      <span className={clsx("ml-2 font-bold", !active && className)}>
        {active ? "✓" : "✓"}
      </span>
    </div>
  );
};
