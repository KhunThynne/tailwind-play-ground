import ResizeContainer from "./components/ResizeContainer";
import {
  ResizablePanelGroup,
  ResizableHandle,
} from "./components/ui/resizable";

export default function App() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="rounded-lg grow">
      <ResizeContainer /> <ResizableHandle />
    </ResizablePanelGroup>
  );
}
