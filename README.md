# Tailwind CSS Playground

A dedicated project for testing and playing with Tailwind CSS, specifically designed to help you experiment with Breakpoints and Container Queries with ease.

## 🚀 Features

- **Resizable Container**: Instantly resize the container to visualize your layout on different screen sizes.
- **Live Width Indicator**: Shows the current container width in `rem` in real-time.
- **Container Queries Ready**: Built-in support for `@container` queries, allowing you to test component layouts based on container size immediately.
- **Tailwind v4 (Preview)**: Pre-configured and ready to use with Tailwind CSS.

## 📦 Installation & Getting Started

1. Install Dependencies:

   ```bash
   npm install
   ```

2. Run the project:

   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually `http://localhost:5173`).

## 🛠️ Usage

1. **Resize**: Drag the center handle to adjust the width of the display area.
2. **Check Breakpoints**: Watch the width indicator at the top to see which breakpoint is currently active.
3. **Edit Code**: Modify `src/components/ResizeContainer.tsx` to insert the Tailwind code you want to test.

```tsx
// src/components/ResizeContainer.tsx
export default function ResizeContainer() {
  return (
    <ResizablePanel className="bg-secondary">
      <ContainerSectionLite
        log
        className="@container relative h-full"
        classNames={{ contentContainer: "p-5" }}
      >
        {/* Put your code here */}
        <div className="bg-red-500 md:bg-blue-500 @md:bg-green-500 p-4 rounded">
          Resize me!
        </div>
      </ContainerSectionLite>
    </ResizablePanel>
  );
}
```

## 🧩 Components

- `ResizeContainer`: The main component that handles the resizable area.
- `ContainerSectionLite`: A wrapper that displays width information and establishes the scope for container queries.

## 📄 License

MIT
