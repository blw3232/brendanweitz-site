import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="container">

        <div className="heroImage">
          <Image
            src="/headshot.jpg"
            alt="Brendan Weitz"
            width={200}
            height={200}
            priority
          />
        </div>

        <p className="links">
          (
          <a
            href="https://www.linkedin.com/in/brendanlweitz"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://x.com/bweitz1"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          ,{" "}
          <a href="mailto:bweitz1@gmail.com">Email</a>
          )
        </p>

        <h1>Brendan Weitz</h1>

        <h2>
          Founder, Investor, GM / Head of BD @ Consumer Internet, AdTech, B2B SaaS
        </h2>

        <p>
          I currently lead worldwide partnerships for Amazon Creators &amp; Social Marketing.
        </p>

        <p>
          Previously I co-founded Journey (YC W21), launched new markets
          at Quora/AdRoll, and slung FB ads before there was a news feed. 
        </p>

        <hr />

        <h3>Experience</h3>

        <ul>
          <li>
            <strong>Amazon</strong> — Principal, WW Creators & Social (2024 – Present)
          </li>
          <li>
            <strong>Journey (YC W21)</strong> — Co-Founder & CBO (2021 – 2024)
          </li>
          <li>
            <strong>Quora</strong> — GM (2018 – 2021)
          </li>
          <li>
            <strong>AdRoll / NextRoll</strong> — Senior Director, Business Development (2012 – 2018)
          </li>
          <li>
            <strong>Facebook</strong> — Client Partner (2010 – 2012)
          </li>
        </ul>

        <p className="footer">
          © {new Date().getFullYear()} Brendan Weitz
        </p>

      </div>
    </main>
  );
}
