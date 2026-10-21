import { ImageResponse } from "next/og";

export const alt = "Impaxo – Agência de Tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#15233D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 500,
            background: "radial-gradient(ellipse, rgba(44,91,255,0.35) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            gap: 0,
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Impaxo
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.45)",
              marginTop: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Agência de Tecnologia
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 12,
            }}
          >
            {["Sites", "Marketing", "Apps"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                  borderRadius: 100,
                  padding: "10px 24px",
                  color: "#00D4FF",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
