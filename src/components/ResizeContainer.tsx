import { ContainerSectionLite } from "@/components/ContainerSectionLite";
import { ResizablePanel } from "@/components/ui/resizable";
import { ViewportBreakpointDemo } from "./ViewportBreakpointDemo";
import { ContainerQueryDemo } from "./ContainerQueryDemo";

export default function ResizeContainer() {
  return (
    <ResizablePanel className="bg-secondary  ">
      <ContainerSectionLite
        log
        className="@container relative h-full"
        classNames={{ contentContainer: "", log: "px-3" }}
      >
        <article className="flex flex-col gap-4 h-full overflow-y-auto">
          <ViewportBreakpointDemo />
          <ContainerQueryDemo />
        </article>
      </ContainerSectionLite>
    </ResizablePanel>
  );
}
