import { useState } from "react";
export default function CopyButton ({ text, onCopy }){
  const [copied, setCopied] = useState(false);

  const handleAction = () => {
    onCopy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <img
      onClick={handleAction}
      className="h-5 px-2 inline-block mb-1 cursor-pointer hover:scale-110 transition-transform"
      src={copied ? "/copy.gif" : "/copyStatic.svg"}
      alt="copy"
    />
  );
};