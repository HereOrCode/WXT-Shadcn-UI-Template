import { Button } from "@/components/ui/button";
import { useState } from "react";
import wxtLogo from "/wxt.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-75 p-4 flex flex-col gap-4 bg-background text-foreground">
      <div className="flex items-center gap-2">
        <img src={wxtLogo} alt="WXT logo" className="h-6 w-6" />
        <h1 className="text-lg font-semibold">WXT + Shadcn UI</h1>
      </div>

      <p className="text-sm text-muted-foreground">
        A clean boilerplate for your next extension.
      </p>

      <Button onClick={() => setCount((c) => c + 1)} className="w-full">
        Count: {count}
      </Button>

      <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
        <a
          href="https://wxt.dev"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-primary transition-colors"
        >
          WXT Docs
        </a>
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-primary transition-colors"
        >
          Shadcn Docs
        </a>
      </div>
    </div>
  );
}

export default App;
