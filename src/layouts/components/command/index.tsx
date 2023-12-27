import { useState } from "react";
import CommandProps from "./types";

function Command({ children }: Readonly<CommandProps>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy to clipboard logic here
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <div
      className="flex items-center justify-center space-x-4 px-4 py-2 bg-dark-800 dark:bg-dark-600 text-white rounded-md overflow-y-auto"
      style={{ maxWidth: "max-content" }}
    >
      <pre>
        <code className="font-semibold">{children}</code>
      </pre>
      <button
        className="flex items-center justify-center text-xs text-center text-white px-2 p-1 rounded-md bg-primary-700 hover:bg-primary-400 dark:bg-primary-400 hover:dark:bg-primary-700 "
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Command;
