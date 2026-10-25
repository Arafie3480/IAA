import { ImageResponse } from "next/og";
import { company } from "@/lib/company";

export const alt = `${company.brand} — ${company.nameFa}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(61,184,160,0.28), transparent 50%), linear-gradient(160deg, #070b12 0%, #0c1220 55%, #070b12 100%)",
          color: "#e8eef8",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          {company.brand}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 36, color: "#c9a66b" }}>
          {company.nameFa}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            maxWidth: 820,
            fontSize: 28,
            lineHeight: 1.45,
            color: "#8b9bb4",
          }}
        >
          جایی که توانمندی واقعی دیده می‌شود — نه فقط مدرک.
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 22, color: "#3db8a0" }}>
          {company.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
