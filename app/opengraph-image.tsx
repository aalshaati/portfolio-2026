import { ImageResponse } from "next/og";
import { site } from "./content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#faf7f2",
          borderTop: "12px solid #9a4b24",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#9a4b24",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Computer Engineering · PSU &apos;27
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#2b241d",
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#5f5344",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
