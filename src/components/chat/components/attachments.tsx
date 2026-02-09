"use client";

import { FileText, X } from "lucide-react";

interface Attachment {
  id: string;
  name: string;
  type: string;
}

interface AttachmentsProps {
  attachments: Attachment[];
  onRemove?: (id: string) => void;
  readonly?: boolean;
}

export function AttachmentComponent({ attachments, onRemove, readonly }: AttachmentsProps) {
  if (!attachments.length) return null;

  return (
    <div className="flex flex-wrap gap-2 my-2">
      {attachments.map((file) => (
        <div
          key={file.id}
          className="flex items-center gap-2 p-2 pr-1 rounded-lg bg-muted border text-xs font-medium group"
        >
          <div className="p-1 rounded bg-background">
            <FileText className="w-3 h-3 text-primary" />
          </div>
          <span className="max-w-[120px] truncate">{file.name}</span>
          {!readonly && onRemove && (
            <button
              onClick={() => onRemove(file.id)}
              className="p-1 hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
