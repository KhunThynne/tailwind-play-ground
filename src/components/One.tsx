import { ContainerSectionLite } from "@/components/ContainerSectionLite";
import { ResizablePanel } from "@/components/ui/resizable";

export default function One() {
  return (
    <ResizablePanel defaultSize={500} className="bg-slate-500 ">
      <ContainerSectionLite log>
        <div className="flex h-[200px] items-center justify-center p-6 ">
          <span className="font-semibold">One</span>
        </div>
      </ContainerSectionLite>
    </ResizablePanel>
  );
}
