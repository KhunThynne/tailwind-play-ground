import { ContainerSectionLite } from "@/components/ContainerSectionLite";
import { ResizablePanel } from "@/components/ui/resizable";

export default function Three() {
  return (
    <ResizablePanel defaultSize={300} className="bg-gray-600">
      <ContainerSectionLite log>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ContainerSectionLite>
    </ResizablePanel>
  );
}
