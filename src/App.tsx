import One from "./components/One";
import Three from "./components/Three";
import Two from "./components/Two";
import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "./components/ui/resizable";

export default function App() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="rounded-lg grow">
      <One /> <ResizableHandle />
      <ResizablePanel defaultSize={800}>
        <ResizablePanelGroup orientation="vertical">
          <Two />
          <ResizableHandle />
          <Three />
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
