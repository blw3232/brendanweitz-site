import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="container">

        <div className="header">

          <div className="heroImage">
            <Image
              src="/headshot.jpg"
              alt="Brendan Weitz"
              width={180}
              height={180}
              priority
            />
          </div>

          <div className="headerText">

            <h1>Brendan Weitz</h1>

            <p className="links">
              (
              <a href="https://www.linkedin.com/in/brendanlweitz" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              ,{" "}
              <a href="https://x.com/YOURHANDLE" target="_blank" rel="noreferrer">
                X
              </a>
              ,{" "}
              <a href="mailto:bweitz1@gmail.com">Email</a>
              )
            </p>

            <h2>
              Founder, Investor, GM / Head of BD @ Consumer Internet, AdTech, B2B SaaS
            </h2>

            <p>
              I currently lead worldwide partnerships for Amazon Creators &amp; Social Marketing.
            </p>

            <p>
              Previously I co-founded Journey (YC W21), launched new markets at Quora/AdRoll, and slung FB ads before there was a new feed (or mobile!).
            </p>

          </div>

        </div>

        <hr />

        <h3>Experience</h3>

        <ul>
          <li>
            <strong>Amazon</strong> — Principal, WW Creators &amp; Social (2024 – Present)
          </li>

          <li>
            <strong>Journey (YC W21)</strong> — Co-Founder &amp; CBO (2021 – 2024)
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
