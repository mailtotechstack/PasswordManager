import { useState } from "react";
import CopyButton from "./copy";
// 1. एक छोटा हेल्पर कॉम्पोनेंट जो अपनी स्टेट खुद संभालेगा


export default function PasswordRow({ detail, idx, onEdit, onDelete, onCopy }) {
  const [isHoverEdit, setIsHoverEdit] = useState(false);
  const [isHoverDelete, setIsHoverDelete] = useState(false);

  return (
    <tr className="border text-center h-12 hover:bg-gray-50 transition-colors">
      <td className="px-2 wrap-break-word">
        <span>{detail.site}</span>
        <CopyButton text={detail.site} onCopy={onCopy} />
      </td>
      
      <td className="border-x px-2 wrap-break-word">
        <span>{detail.username}</span>
        <CopyButton text={detail.username} onCopy={onCopy} />
      </td>

      <td className="border-e px-2 wrap-break-word">
        <span>{"•".repeat(Math.min(detail.password.length, 15))}</span>
        <CopyButton text={detail.password} onCopy={onCopy} />
      </td>

      <td className="py-2 w-20">
        <div className="flex justify-center items-center gap-2">
          <img
            onClick={() => onEdit(idx)}
            onMouseEnter={() => setIsHoverEdit(true)}
            onMouseLeave={() => setIsHoverEdit(false)}
            className="h-5 cursor-pointer"
            src={isHoverEdit ? "/edit.gif" : "/edit.svg"}
            alt="edit"
          />
          <img
            onClick={() => onDelete(idx)}
            onMouseEnter={() => setIsHoverDelete(true)}
            onMouseLeave={() => setIsHoverDelete(false)}
            className="h-5 cursor-pointer"
          src={isHoverDelete ? "/delete.gif" : "/delete.svg"}
            alt="delete"
          />
        </div>
      </td>
    </tr>
  );
}