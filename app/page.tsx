import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="container">

        <div className="heroImage">
        <Image
  src="/headshot.jpg"
  alt="Brendan Weitz"
  width={180}
  height={180}
  priority
  style={{ borderRadius: "50%" }}
/>
<div className="links">
  <a href="https://www.linkedin.com/in/brendanweitz">LinkedIn</a> |{" "}
  <a href="https://x.com/bweitz1">X</a> |{" "}
  <a href="mailto:bweitz1@gmail.com">Email</a>
</div>
        </p>

        <h1>Brendan Weitz</h1>

        <h2>
          Founder, Investor, GM / Head of BD @ Consumer Internet, AdTech, B2B SaaS
        </h2>

        <p>
          I currently lead worldwide partnerships for Amazon Creators & Social
          Marketing.
        </p>

        <p>
          Previously I co-founded Journey (YC W21), built partnerships and
          monetization at Quora, and spent early years scaling AdTech platforms
          globally.
        </p>

        <hr />

        <h3>Experience</h3>

        <ul>
          <li>
            <strong>Amazon</strong> — Principal, WW Creators & Social
            (May 2024 – Present)
          </li>

          <li>
            <strong>Journey (YC W21)</strong> — Co-Founder & CBO
            (2021 – 2024)
          </li>

          <li>
            <strong>Quora</strong> — GM
            (2018 – 2021)
          </li>

          <li>
            <strong>AdRoll / NextRoll</strong> — Senior Director, Business Development
            (2012 – 2018)
          </li>

          <li>
            <strong>Facebook</strong> — Client Partner
            (2010 – 2012)
          </li>
        </ul>

        <h3>Investing</h3>

        <ul>
          <li>Partner / Angel Investor — 640 Oxford Ventures</li>
          <li>LP — GTMfund</li>
        </ul>

        <p className="footer">
          © {new Date().getFullYear()} Brendan Weitz
        </p>

      </div>
    </main>
  );
}