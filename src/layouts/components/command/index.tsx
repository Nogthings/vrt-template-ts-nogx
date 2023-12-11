import { useState } from "react";
import CommandProps from "./types";

function Command({ children }: Readonly<CommandProps>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy to clipboard logic here
    setCopied(true);
  };
  return (
    <div className="flex space-x-4 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-md">
      <pre>
        <code>{children}</code>
      </pre>
      <button
        className="text-center text-white px-2 items-center p-1 rounded-md bg-purple-700 hover:bg-purple-300 dark:bg-purple-300 hover:dark:bg-purple-700 "
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Command;