import "./brand.css";
export const metadata = {
  title: "IEEE ALU — Branch identity",
  alternates: { canonical: "/brand/" },
};
export default function BrandPage() {
  return (
    <div className="brand-page">
      <main>
        <header>
          <div>
            <h1>African Leadership University</h1>
            <p>IEEE Student Branch · Identity system</p>
          </div>
          <a href="/">View website</a>
        </header>
        <section className="board">
          <label>PRIMARY · HORIZONTAL</label>
          <img
            className="horizontal"
            src="/assets/ieee-alu-horizontal-blue.svg"
            alt="IEEE African Leadership University Student Branch horizontal logo"
          />
          <div className="downloads">
            <a href="/assets/ieee-alu-horizontal-blue.svg" download>
              Download blue SVG
            </a>
            <a href="/assets/ieee-alu-horizontal-white.svg" download>
              Download white SVG
            </a>
          </div>
        </section>
        <div className="variants">
          <section className="board">
            <label>STACKED · LIGHT BACKGROUND</label>
            <img
              src="/assets/ieee-alu-stacked-blue.svg"
              alt="Blue stacked branch logo"
            />
            <a href="/assets/ieee-alu-stacked-blue.svg" download>
              Download blue SVG
            </a>
          </section>
          <section className="board dark">
            <label>STACKED · DARK BACKGROUND</label>
            <img
              src="/assets/ieee-alu-stacked-white.svg"
              alt="White stacked branch logo"
            />
            <a href="/assets/ieee-alu-stacked-white.svg" download>
              Download white SVG
            </a>
          </section>
        </div>
        <p className="note">
          Official IEEE master artwork, paired with the full university name and
          Student Branch. Logo lettering specifies Calibri; a fallback font
          displays if Calibri is unavailable. The website’s original font is
          unchanged.
        </p>
        <a href="https://brand-experience.ieee.org/ieee-brand/frequently-asked-questions/">
          IEEE student branch identity guidance
        </a>
      </main>
    </div>
  );
}
