"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageUploadProps {
  currentImage?: string;
  onUpload: (formData: FormData) => Promise<{ url?: string; error?: string }>;
  label?: string;
}

export default function ImageUpload({
  currentImage,
  onUpload,
  label = "Bild",
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const result = await onUpload(formData);

    if (result.error) {
      setError(result.error);
      setPreview(currentImage || null);
    } else if (result.url) {
      setPreview(result.url);
    }

    setUploading(false);
  }

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-300 mb-2">
        {label}
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        className="relative w-full aspect-video rounded-lg border-2 border-dashed border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer overflow-hidden bg-neutral-900"
      >
        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
            sizes="400px"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-neutral-500 text-sm">
            Klicken zum Hochladen
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleChange}
        className="hidden"
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
