import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Das Gästehaus Eimeldingen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1E120A",
          color: "#E8E0D4",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            fontFamily: "serif",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Das Gästehaus
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8B9E8B",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Eimeldingen
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#6B6358",
            marginTop: 32,
            letterSpacing: "0.05em",
          }}
        >
          Ankommen. Durchatmen. Wohlfühlen.
        </div>
      </div>
    ),
    { ...size }
  );
}
