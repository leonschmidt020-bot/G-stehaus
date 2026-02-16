import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1E120A",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "serif",
            color: "#E8E0D4",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          DG
        </div>
      </div>
    ),
    { ...size }
  );
}
