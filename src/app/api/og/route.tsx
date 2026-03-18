import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "oklch(0.053 0.018 292)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "oklch(0.64 0.29 294)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
              color: "white",
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "white",
              letterSpacing: -1,
            }}
          >
            Coverty{" "}
            <span style={{ color: "oklch(0.64 0.29 294)" }}>AI</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          דפי נחיתה שממירים
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.45)",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          פי 2 המרות · חצי מחיר לליד · 989₪ בלבד
        </div>

        {/* Price tag */}
        <div
          style={{
            marginTop: 48,
            padding: "14px 32px",
            borderRadius: 100,
            background: "oklch(0.64 0.29 294 / 0.15)",
            border: "1px solid oklch(0.64 0.29 294 / 0.4)",
            fontSize: 24,
            fontWeight: 700,
            color: "oklch(0.83 0.16 85)",
            display: "flex",
          }}
        >
          989₪ · ללא עלויות נסתרות
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
