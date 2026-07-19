import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.title}`;

// Social share image (used for OpenGraph + Twitter cards).
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
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#818cf8" }}>
          {profile.location}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 12 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#a1a1aa", marginTop: 8 }}>
          {profile.title}
        </div>
      </div>
    ),
    size,
  );
}
