import { ContainerSectionLite } from "@/components/ContainerSectionLite";
import { ResizablePanel } from "@/components/ui/resizable";

export default function Two() {
  return (
    <ResizablePanel defaultSize={400} className="bg-slate-800">
      <ContainerSectionLite log>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ContainerSectionLite>
    </ResizablePanel>
  );
}
