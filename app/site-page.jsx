"use client";
import { useEffect, useRef, useState } from "react";
import BranchCommunity from "./branch-community";
const descriptions = {
  "Workshops & learning":
    "Bring a topic you want to understand or a skill you can share. Your interests can help shape future workshops and peer learning sessions.",
  "Projects & building":
    "Have an idea you’d like to try? Future project activities could be a place to find collaborators, share a first version, and learn together.",
  "Community & conversations":
    "Help create a welcoming branch. Share ideas for meetups, suggest a conversation topic, or think about how you’d like to contribute.",
};
export default function SitePage({ view = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!modalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [modalOpen]);
  function openJoin(value = "") {
    setInterest(value);
    setMenuOpen(false);
    dialogRef.current.showModal();
    setModalOpen(true);
  }
  function closeBackdrop(event) {
    if (event.target !== dialogRef.current) return;
    const b = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < b.left ||
      event.clientX > b.right ||
      event.clientY < b.top ||
      event.clientY > b.bottom
    )
      event.currentTarget.close();
  }
  return (
    <>
      <a
        className="skip-link fixed -top-[100px] left-5 bg-white p-2.5 z-[100] focus:top-2.5"
        href="#main"
      >
        Skip to content
      </a>
      <div className="utility-bar flex justify-between items-center px-[5.6%] py-2 border-b border-[var(--line)] text-[9px] text-[var(--muted)] tracking-[.6px]">
        <span>AFRICAN LEADERSHIP UNIVERSITY · KIGALI, RWANDA</span>
        <div>
          <a href="https://www.ieeerwanda.org/">IEEE Rwanda</a>
          <a href="https://www.ieee.org/">IEEE.org</a>
          <a href="https://ieeexplore.ieee.org/">IEEE Xplore</a>
        </div>
      </div>
      <header className="site-header">
        <a
          className="brand block shrink-0 leading-none"
          href="/"
          aria-label="IEEE ALU Student Branch home"
        >
          <img
            src="/assets/ieee-alu-horizontal-blue.svg"
            width="760"
            height="180"
            alt="IEEE African Leadership University Student Branch"
          />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navigation"
        >
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(false)}
          id="navigation"
          aria-label="Main navigation"
        >
          {[
            ["home", "/", "Home"],
            ["events", "/events/", "Events"],
            ["chapters", "/chapters/", "Chapters"],
            ["people", "/people/", "Our people"],
          ].map(([key, href, label]) => (
            <a key={key} href={href} aria-current={view === key ? "page" : undefined}>{label}</a>
          ))}
          <button
            className="button inline-flex items-center justify-center px-[25px] py-[14px] border border-[var(--blue)] rounded text-white bg-[var(--blue)] text-[13px] font-[650] transition-colors hover:bg-[var(--navy)] button-small"
            onClick={() => openJoin()}
          >
            Get involved{" "}
          </button>
        </nav>
      </header>
      <main id="main">
{view === "home" && <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy py-[45px]">
            <div className="eyebrow">IEEE AT AFRICAN LEADERSHIP UNIVERSITY</div>
            <h1 id="hero-title">
              A place to learn.
              <br />A community
              <br />
              <span>to build with.</span>
            </h1>
            <p>
              We’re bringing ALU students together to explore technology, share
              what we know, and work on ideas that matter.
            </p>
            <div className="hero-actions flex items-center gap-[27px] mt-[31px]">
              <button
                className="button inline-flex items-center justify-center px-[25px] py-[14px] border border-[var(--blue)] rounded text-white bg-[var(--blue)] text-[13px] font-[650] transition-colors hover:bg-[var(--navy)]"
                onClick={() => openJoin()}
              >
                Get involved
              </button>
              <a className="text-link" href="/events/">
                Explore events
              </a>
            </div>
          </div>
          <figure className="hero-photo">
            <img
              src="/assets/photos/alu-community.jpg"
              alt="Students seated together during an IEEE gathering at African Leadership University"
              width="1600"
              height="1069"
              fetchPriority="high"
            />
            <figcaption>
              Our community at ALU{" "}
              <a href="https://www.flickr.com/photos/ieeerwanda/55453197493/">
                Photo: IEEE Rwanda
              </a>
            </figcaption>
          </figure>
        </section>
        <section className="about section" id="about">
          <div>
            <div className="eyebrow">OUR BRANCH</div>
            <h2>
              Built around
              <br />
              shared curiosity.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              The IEEE ALU Student Branch is a new student community at African
              Leadership University in Kigali. We’re here to make learning
              together, exchanging ideas, and finding collaborators part of
              campus life.
            </p>
            <p>
              As we get started, you can help shape our activities—whatever your
              experience or area of study.
            </p>
          </div>
        </section>
        <section className="explore section" id="explore">
          <div className="section-heading flex justify-between items-end gap-[35px]">
            <div>
              <div className="eyebrow">ACTIVITIES</div>
              <h2>Learn by taking part.</h2>
            </div>
            <p>Three starting points for our new branch.</p>
          </div>
          <div className="activity-grid grid grid-cols-3 gap-9 mt-10">
            <article className="activity pt-6 border-t-2 border-[#b9d1df] flex flex-col items-start">
              <h3>Workshops & learning</h3>
              <p>
                Explore a new tool, unpack a technical topic, or share a skill
                with other students.
              </p>
              <button
                className="text-link"
                onClick={() => openJoin("Workshops & learning")}
              >
                Explore workshops
              </button>
            </article>
            <article className="activity pt-6 border-t-2 border-[#b9d1df] flex flex-col items-start">
              <h3>Projects & building</h3>
              <p>
                Find collaborators, try an idea, and learn from making something
                together.
              </p>
              <button
                className="text-link"
                onClick={() => openJoin("Projects & building")}
              >
                Explore projects
              </button>
            </article>
            <article className="activity pt-6 border-t-2 border-[#b9d1df] flex flex-col items-start">
              <h3>Community & conversations</h3>
              <p>
                Meet people across disciplines and connect with Rwanda’s wider
                IEEE community.
              </p>
              <button
                className="text-link"
                onClick={() => openJoin("Community & conversations")}
              >
                Explore the community
              </button>
            </article>
          </div>
          <p className="section-note">
            Our programme is taking shape. Confirmed branch activities will be
            announced here.
          </p>
        </section>
</>}
{view === "events" && <>
        <section className="events-section section" id="updates">
          <div className="section-heading flex justify-between items-end gap-[35px]">
            <div>
              <div className="eyebrow">EVENTS</div>
              <h1 className="page-title">On campus and beyond.</h1>
            </div>
            <a
              className="text-link"
              href="https://comsoc.ieeerwanda.org/events"
            >
              IEEE Rwanda chapter events
            </a>
          </div>
          <div className="event-list mt-[35px] border-t border-[var(--line)]">
            <article className="event-row">
              <div className="event-date">
                <strong>14</strong>
                <span>NOV 2026</span>
              </div>
              <div className="event-info">
                <span className="event-status">
                  UPCOMING · COMMUNITY WORKSHOP
                </span>
                <h3>Introduction to Research and IEEE Paper Writing</h3>
                <p>
                  A practical workshop on research methods, IEEE papers, LaTeX,
                  and sharing your work. Organised by IES, MTT-S, and ComSoc
                  Rwanda.
                </p>
                <span className="event-location">
                  CMU-Africa, Kigali · 08:00–17:30 CAT
                </span>
              </div>
              <a
                className="event-link"
                href="https://events.vtools.ieee.org/m/571852"
              >
                Event details{" "}
              </a>
            </article>
            <article className="event-row">
              <div className="event-date">
                <strong>18</strong>
                <span>SEP 2026</span>
              </div>
              <div className="event-info">
                <span className="event-status past">PAST · AT ALU</span>
                <h3>IEEE–ALU Meet & Greet</h3>
                <p>
                  A conversation about research, innovation, student
                  opportunities, and the path toward an IEEE student branch at
                  ALU.
                </p>
                <span className="event-location">
                  African Leadership University · Kenya-Burundi Room
                </span>
              </div>
              <a
                className="event-link"
                href="https://events.vtools.ieee.org/m/571630"
              >
                View event{" "}
              </a>
            </article>
            <article className="event-row">
              <div className="event-date">
                <strong>08</strong>
                <span>AUG 2026</span>
              </div>
              <div className="event-info">
                <span className="event-status past">PAST · AT ALU</span>
                <h3>Meeting the IEEE community</h3>
                <p>
                  ALU students and IEEE volunteers came together to explore
                  membership, student leadership, and technical communities.
                </p>
                <span className="event-location">
                  African Leadership University · Kigali
                </span>
              </div>
              <a
                className="event-link"
                href="https://events.vtools.ieee.org/m/571011"
              >
                View event{" "}
              </a>
            </article>
          </div>
          <p className="section-note">
            Community events and past ALU engagements, sourced from{" "}
            <a href="https://comsoc.ieeerwanda.org/events">
              IEEE ComSoc Rwanda
            </a>
            .
          </p>
        </section>
        <section
          className="photo-story section"
          aria-labelledby="photo-story-title"
        >
          <div className="section-heading flex justify-between items-end gap-[35px]">
            <div>
              <h2 id="photo-story-title">A community, in person.</h2>
            </div>
            <a
              className="text-link"
              href="https://www.flickr.com/photos/ieeerwanda/albums/72177720335078644/"
            >
              View the ALU album
            </a>
          </div>
          <div className="photo-pair grid grid-cols-2 gap-7 mt-[30px]">
            <figure>
              <a
                href="https://www.flickr.com/photos/ieeerwanda/55453247049/"
                aria-label="View the ALU talk photo on Flickr"
              >
                <img
                  src="/assets/photos/alu-talk.jpg"
                  alt="A speaker addressing students in ALU’s tiered campus seating area"
                  width="1600"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>Sharing ideas on campus.</figcaption>
            </figure>
            <figure>
              <a
                href="https://www.flickr.com/photos/ieeerwanda/55453238479/"
                aria-label="View the ALU students photo on Flickr"
              >
                <img
                  src="/assets/photos/alu-students.jpg"
                  alt="Students listening during an IEEE gathering at ALU"
                  width="1600"
                  height="1143"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>Learning starts with showing up.</figcaption>
            </figure>
          </div>
          <p className="photo-credit">
            Photographs from{" "}
            <a href="https://www.flickr.com/photos/ieeerwanda/albums/72177720335078644/">
              IEEE Rwanda’s ALU Student Branch album
            </a>
            .
          </p>
        </section>
</>}
{view === "chapters" && <>
<BranchCommunity section="chapters" />
        <section className="network section" id="network">
          <div className="section-heading flex justify-between items-end gap-[35px]">
            <div>
              <div className="eyebrow">IEEE RWANDA</div>
              <h2>A wider world of interests.</h2>
            </div>
            <p>Discover Rwanda’s technical chapters and communities.</p>
          </div>
          <div className="chapter-grid grid grid-cols-3 gap-x-10 mt-8">
            <a className="chapter" href="https://comsoc.ieeerwanda.org/">
              <span className="chapter-abbr">ComSoc</span>
              <h3>Communications</h3>
              <p>Networks, connectivity, and the future of wireless.</p>
            </a>
            <a className="chapter" href="https://ies.ieeerwanda.org/">
              <span className="chapter-abbr">IES</span>
              <h3>Industrial electronics</h3>
              <p>Robotics, automation, and intelligent industrial systems.</p>
            </a>
            <a className="chapter" href="https://mtts.ieeerwanda.org/">
              <span className="chapter-abbr">MTT-S</span>
              <h3>Microwave technology</h3>
              <p>RF, microwave engineering, and high-frequency systems.</p>
            </a>
            <a className="chapter" href="https://aess.ieeerwanda.org/">
              <span className="chapter-abbr">AESS</span>
              <h3>Aerospace & systems</h3>
              <p>Radar, navigation, avionics, and autonomous platforms.</p>
            </a>
            <a className="chapter" href="https://grss.ieeerwanda.org/">
              <span className="chapter-abbr">GRSS</span>
              <h3>Earth observation</h3>
              <p>Satellites, remote sensing, and understanding our planet.</p>
            </a>
            <a
              className="chapter chapter-rwanda"
              href="https://www.ieeerwanda.org/student-branches"
            >
              <span className="chapter-abbr">IEEE Rwanda</span>
              <h3>A wider community</h3>
              <p>
                Discover student branches, society chapters, and affinity
                groups.
              </p>
            </a>
          </div>
        </section>
</>}
{view === "people" && <>
<BranchCommunity section="people" />
</>}
{view === "membership" && <>
        <section className="membership section" id="membership">
          <div>
            <div className="eyebrow">MEMBERSHIP</div>
            <h1 className="page-title">Find your place.</h1>
            <p>
              Get involved on campus or explore student membership in the global
              IEEE organisation.
            </p>
          </div>
          <div className="membership-options grid gap-7">
            <article>
              <h3>Get involved at ALU</h3>
              <p>
                Help shape our first activities and find students to learn and
                build with. Branch signup details are coming soon.
              </p>
              <button className="text-link" onClick={() => openJoin()}>
                Explore ways to contribute
              </button>
            </article>
            <article>
              <h3>Explore IEEE membership</h3>
              <p>
                Find current student eligibility, membership options, and
                benefits directly on IEEE’s website.
              </p>
              <a
                className="text-link"
                href="https://www.ieee.org/membership/join/index.html"
              >
                Visit IEEE membership
              </a>
            </article>
          </div>
        </section>
        <section className="faq section">
          <div>
            <h2>A few questions.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                Do I need a technical background?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                You can start by being curious. We want to shape a community
                where students can share different perspectives and learn
                together. Participation requirements for individual activities
                will be included in their announcements.
              </p>
            </details>
            <details>
              <summary>
                How can I join the branch?<span aria-hidden="true">+</span>
              </summary>
              <p>
                ALU branch signup details will be posted once confirmed. You can
                explore IEEE’s global student membership through the Membership
                section, or use “Get involved” to find ways to contribute
                locally.
              </p>
            </details>
            <details>
              <summary>
                When is the first event?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Our first branch event has not been announced yet. The Events
                section already features wider IEEE community opportunities and
                previous IEEE engagements at ALU.
              </p>
            </details>
            <details>
              <summary>
                Can I suggest an activity or project?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Yes—ideas will help shape our first activities. Our branch
                contact channel will be added here when it’s ready, so you can
                share your suggestion with the organising team.
              </p>
            </details>
          </div>
        </section>
</>}
      </main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-identity">
            <a
              className="brand block shrink-0 leading-none"
              href="/"
              aria-label="IEEE ALU Student Branch home"
            >
              <img
                src="/assets/ieee-alu-horizontal-blue.svg"
                width="760"
                height="180"
                alt="IEEE African Leadership University Student Branch"
              />
            </a>
            <p>
              African Leadership University
              <br />
              Kigali, Rwanda
            </p>
          </div>
          <div>
            <h3>Our branch</h3>
            <a href="/#about">About us</a>
            <a href="/events/">Events</a>
            <a href="/people/">Leaders & faculty</a>
            <a href="/chapters/">Student branch chapters</a>
            <a href="/membership/">Membership</a>
            <a href="/brand/">Brand guidelines</a>
          </div>
          <div>
            <h3>The IEEE network</h3>
            <a href="https://www.ieeerwanda.org/">IEEE Rwanda</a>
            <a href="https://ieeer8.org/">IEEE Region 8</a>
            <a href="https://www.ieee.org/">IEEE.org</a>
            <a href="https://ieeexplore.ieee.org/">IEEE Xplore</a>
          </div>
          <div>
            <h3>Stay connected</h3>
            <p>
              Branch contact channels
              <br />
              will be announced here.
            </p>
            <a href="https://www.ieeerwanda.org/contact">Contact IEEE Rwanda</a>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 IEEE ALU Student Branch</span>
          <div>
            <a href="https://www.ieee.org/security-privacy.html">
              IEEE privacy policy
            </a>
            <a href="https://www.ieee.org/accessibility-statement.html">
              Accessibility
            </a>
            <a href="#main">Back to top</a>
          </div>
        </div>
      </footer>
      <dialog
        ref={dialogRef}
        onClose={() => setModalOpen(false)}
        onClick={closeBackdrop}
        id="join-dialog"
        aria-labelledby="join-title"
      >
        <button
          className="dialog-close"
          onClick={() => dialogRef.current.close()}
          aria-label="Close membership information"
        >
          ×
        </button>
        <h2 id="join-title">Get involved at ALU</h2>
        <p>Choose a starting point to explore how you could get involved.</p>
        <div className="interest-options grid gap-2 mt-6 mb-[15px]">
          <button
            aria-pressed={interest === "Workshops & learning"}
            onClick={() => setInterest("Workshops & learning")}
          >
            Workshops & learning{" "}
          </button>
          <button
            aria-pressed={interest === "Projects & building"}
            onClick={() => setInterest("Projects & building")}
          >
            Projects & building{" "}
          </button>
          <button
            aria-pressed={interest === "Community & conversations"}
            onClick={() => setInterest("Community & conversations")}
          >
            Community & conversations{" "}
          </button>
        </div>
        <p
          id="interest-description"
          className="interest-description"
          aria-live="polite"
        >
          {descriptions[interest] || "Pick an interest above to learn more."}
        </p>
        <div className="signup-note">
          <strong>Membership details are coming soon.</strong>
          <p>
            Our signup link and contact channel haven’t been announced yet. This
            selection is only for exploring the site; it does not register you
            or send your details.
          </p>
        </div>
      </dialog>
    </>
  );
}
