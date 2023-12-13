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
      className="flex items-center justify-center space-x-4 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-md overflow-y-auto"
      style={{ maxWidth: "max-content" }}
    >
      <pre>
        <code className="font-semibold">{children}</code>
      </pre>
      <button
        className="flex items-center justify-center text-xs text-center text-white px-2 p-1 rounded-md bg-purple-700 hover:bg-purple-400 dark:bg-purple-400 hover:dark:bg-purple-700 "
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Command;
