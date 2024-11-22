import { getFormattedDate } from "@/lib/date"

export type OGImageTemplateProps = {
  title: string
  date: string
  slug: string
  locale: string
}

export const OGImageTemplate = ({
  title,
  date,
  slug,
  locale,
}: OGImageTemplateProps) => {
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://www.adrianbolonio.com/"

  return (
    <div
      style={{
        fontFamily: `'Inter Tight', 'Inter Tight Fallback'`,
        objectFit: "cover",
        background: "#24292f",
        backgroundImage: `url("${host}/images/og/bg.jpg")`,
        backgroundSize: "1200px 630px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "50px",
        color: "#24292f",
        width: "1200px",
        height: "630px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "100%",
          background: "#e5e7eb",
          padding: "0.75rem",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px",
          }}
        >
          <div
            style={{
              background: "#f87171",
              borderRadius: "50%",
              width: "0.75rem",
              height: "0.75rem",
            }}
          ></div>
          <div
            style={{
              background: "#facc15",
              borderRadius: "50%",
              width: "0.75rem",
              height: "0.75rem",
            }}
          ></div>
          <div
            style={{
              background: "#4ade80",
              borderRadius: "50%",
              width: "0.75rem",
              height: "0.75rem",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            background: "#e5e7eb",
            gap: "4px",
          }}
        >
          <div
            style={{
              background: "#f3f4f6",
              borderRadius: "12px",
              padding: "0.25rem 0.75rem",
              width: "100%",
            }}
          >
            {`www.adrianbolonio.com/${locale}/blog/${slug}`}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f4f6",
          height: "510px",
          position: "relative",
          padding: "30px",
          marginTop: "-1px",
        }}
      >
        <div
          style={{
            width: "1100px",
            height: "501px",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 10,
            objectFit: "cover",
            backgroundImage: `url("${host}/images/og/pattern.png")`,
            backgroundSize: "1100px 600px",
            opacity: "0.1",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: "99",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", marginBottom: "24px" }}>
            <img
              src={`${host}/images/logo.svg`}
              alt="Adrian Bolonio Logo"
              style={{
                margin: 0,
                width: "100px",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "800",
              letterSpacing: "-.03em",
              lineHeight: "4.5rem",
              margin: 0,
              marginBottom: "24px",
            }}
          >
            {title}
          </h1>
          {date && (
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                letterSpacing: "-.03em",
                lineHeight: "1.5rem",
                margin: 0,
              }}
            >
              {getFormattedDate(date, locale)}
            </span>
          )}
        </div>

        <div
          style={{
            zIndex: 99,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              letterSpacing: "-.03em",
              margin: 0,
            }}
          >
            adrianbolonio.com
          </span>
        </div>
      </div>
    </div>
  )
}
