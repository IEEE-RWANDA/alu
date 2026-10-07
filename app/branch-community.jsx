"use client";

import { useState } from "react";

// Replace these placeholders with confirmed names and local image paths.
const groups = [
  { id: "students", label: "Student leaders", roles: ["Branch chair", "Vice chair", "Secretary", "Treasurer"] },
  { id: "faculty", label: "Faculty & advisors", roles: ["Branch counselor", "Faculty advisor"] },
];

function AvatarPlaceholder() {
  return (
    <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#e8f0f4] text-[#8da9b9] sm:size-32" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="size-24" fill="currentColor">
        <circle cx="50" cy="35" r="15" />
        <path d="M19 82c0-18 13-29 31-29s31 11 31 29z" />
      </svg>
    </div>
  );
}

export default function BranchCommunity({ section }) {
  const [active, setActive] = useState(0);
  function switchTab(event, index) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = 1 - index;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 1;
    else return;
    event.preventDefault();
    setActive(next);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next].focus();
  }
  return (
    <>
      {section === "people" && <section className="section border-b border-[var(--line)]" id="team" aria-labelledby="people-title">
        <div className="eyebrow">OUR PEOPLE</div>
        <h1 className="page-title" id="people-title">The people behind our branch.</h1>
        <p className="mt-5 max-w-xl text-sm">Meet our student leaders and the faculty supporting the branch. The confirmed team will be introduced here soon.</p>
        <div role="tablist" aria-label="Branch team" className="mt-9 flex gap-7 border-b border-[var(--line)]">
          {groups.map((group, index) => (
            <button key={group.id} id={`tab-${group.id}`} role="tab" aria-selected={active === index} aria-controls={`panel-${group.id}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => switchTab(event, index)} className={`border-b-2 bg-transparent pb-3 text-[13px] font-semibold ${active === index ? "border-[var(--blue)] text-[var(--blue)]" : "border-transparent text-[var(--muted)]"}`}>
              {group.label}
            </button>
          ))}
        </div>
        {groups.map((group, index) => (
          <div key={group.id} id={`panel-${group.id}`} role="tabpanel" aria-labelledby={`tab-${group.id}`} hidden={active !== index} tabIndex={0}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 md:grid-cols-4">
              {group.roles.map((role) => (
                <article key={role} className="text-center">
                  <AvatarPlaceholder />
                  <h3 className="mt-5 !text-[18px]">{role}</h3>
                  <p className="mt-2 text-xs">To be announced</p>
                </article>
              ))}
            </div>
            <p className="text-[11px]">Proposed role placeholders. Names, appointments, and portraits will be added once confirmed.</p>
          </div>
        ))}
      </section>}
      {section === "chapters" && <section className="section bg-[#f6f9fa]" id="chapters" aria-labelledby="chapters-title">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <div className="eyebrow">STUDENT BRANCH CHAPTERS · SBCs</div>
            <h1 className="page-title" id="chapters-title">Explore your field.<br />Find your community.</h1>
            <p className="mt-6 max-w-md text-sm">Three planned student branch chapters at ALU. Find a technical interest to explore alongside other students.</p>
          </div>
          <div className="space-y-0 border-t border-[var(--line)]">
            {[
              { acronym: "ComSoc", name: "Communications Society", description: "Networks, connectivity, and communications technology." },
              { acronym: "IES", name: "Industrial Electronics Society", description: "Electronics, automation, and intelligent systems." },
              { acronym: "IAS", name: "Industry Applications Society", description: "Applying electrical engineering to industry." },
            ].map((chapter) => (
              <article key={chapter.acronym} className="border-b border-[var(--line)] py-6">
                <div className="flex items-baseline justify-between gap-5">
                  <span className="text-sm font-semibold text-[var(--blue)]">{chapter.acronym}</span>
                  <span className="text-[11px] text-[var(--muted)]">Planned</span>
                </div>
                <h3 className="mt-3 !text-[22px]">{chapter.name}</h3>
                <p className="mt-2 text-xs">{chapter.description}</p>
              </article>
            ))}
            <p className="pt-5 text-[11px]">These chapters are planned and have not yet been established. Leadership, membership details, and activities will follow once confirmed.</p>
          </div>
        </div>
      </section>}
    </>
  );
}
