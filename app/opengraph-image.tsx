import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Learn With iKay — Academic Precision in Data Science Education";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1B3B2F",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#C9E265",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#1B3B2F",
            }}
          >
            iK
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#ffffff" }}>Learn With iKay</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 58,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Academic Precision in Data Science Education
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#C9E265", fontFamily: "monospace" }}>
          learnwithikay.com
        </div>
      </div>
    ),
    { ...size }
  );
}