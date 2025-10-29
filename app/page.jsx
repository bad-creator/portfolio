"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);
  const [language, setLanguage] = useState("de"); // 'de' for German, 'en' for English
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Translations
  const translations = {
    de: {
      nav: {
        experience: "Berufserfahrung",
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
      },
      hero: {
        title: "Serghei Pascal",
        subtitle:
          "Motivierter Einsteiger in die Welt der App-/Web-Entwicklung, bereit, durch praktische Erfahrung zu wachsen und sich weiterzuentwickeln.",
        downloadCV: "CV herunterladen",
      },
      experience: {
        title: "Berufserfahrung",
        jobs: [
          {
            title: "Praktikant als Full Stack Developer",
            company: "Dao Pay",
            period: "12.06.2023 - 29.09.2023",
            isFirst: true,
          },
          { title: "LKW Fahrer", company: "BÄKO", period: "2017 - 2021" },
          { title: "Zusteller", company: "BAKU", period: "2013 - 2016" },
          {
            title: "Speditionsfahrer",
            company: "Bartolini",
            period: "2009 - 2013",
          },
          {
            title: "Vorarbeiter",
            company: "Novostroy",
            period: "2006 - 2009",
          },
          {
            title: "Diverse Tätigkeiten",
            company: "Verschiedene Arbeitgeber",
            period: "2003 - 2006",
            isLast: true,
          },
        ],
      },
      projects: {
        title: "Projekte",
        autofun: "Autoverkaufs-Website mit modernem Design",
        kassasystem: "Kassensystem für Tablets",
        resume: "Persönliche Portfolio-Website",
      },
      skills: {
        title: "Technologie-Stack",
      },
      contact: {
        title: "Kontakt aufnehmen",
        subtitle:
          "Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil einer ambitionierten Vision zu werden. Zögern Sie nicht, sich zu melden.",
        firstName: "Vorname",
        lastName: "Nachname",
        phone: "Telefon (optional)",
        message: "Nachricht",
        send: "Nachricht senden",
      },
    },
    en: {
      nav: {
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
      hero: {
        title: "Serghei Pascal",
        subtitle:
          "Motivated newcomer to the world of app/web development, ready to grow and develop through practical experience.",
        downloadCV: "Download CV",
      },
      experience: {
        title: "Experience",
        jobs: [
          {
            title: "Intern as Full Stack Developer",
            company: "Dao Pay",
            period: "12.06.2023 - 29.09.2023",
            isFirst: true,
          },
          { title: "Truck Driver", company: "BÄKO", period: "2017 - 2021" },
          { title: "Delivery Driver", company: "BAKU", period: "2013 - 2016" },
          {
            title: "Freight Driver",
            company: "Bartolini",
            period: "2009 - 2013",
          },
          {
            title: "Foreman",
            company: "Novostroy",
            period: "2006 - 2009",
          },
          {
            title: "Various Activities",
            company: "Various Employers",
            period: "2003 - 2006",
            isLast: true,
          },
        ],
      },
      projects: {
        title: "Projects",
        autofun: "Car sales website with modern design",
        kassasystem: "Point of sale system for tablets",
        resume: "Personal portfolio website",
      },
      skills: {
        title: "Technology Stack",
      },
      contact: {
        title: "Get In Touch",
        subtitle:
          "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.",
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone (optional)",
        message: "Message",
        send: "Send Message",
      },
    },
  };

  const t = translations[language];

  // Принудительное закрытие меню
  const closeMenu = () => {
    console.log("Force closing menu");
    setMobileOpen(false);
  };

  // Debug: log headerBottom when it changes
  useEffect(() => {
    console.log("headerBottom changed:", headerBottom);
  }, [headerBottom]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Guard for some mobile browsers/extensions that expect window.ethereum to exist
      if (!window.ethereum) {
        // create a harmless placeholder to avoid crashes from third-party scripts
        window.ethereum = {};
      }
    }
  }, []);

  // lock background scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    const body = document.body;
    if (mobileOpen) {
      // Update header position when menu opens
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderBottom(rect.bottom);
      }
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [mobileOpen]);

  // Track header bottom (in viewport px) so overlay/menu start below it
  useEffect(() => {
    const updateHeaderBottom = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderBottom(rect.bottom);
      }
    };
    updateHeaderBottom();
    window.addEventListener("scroll", updateHeaderBottom, { passive: true });
    window.addEventListener("resize", updateHeaderBottom);
    return () => {
      window.removeEventListener("scroll", updateHeaderBottom);
      window.removeEventListener("resize", updateHeaderBottom);
    };
  }, []);

  // Принудительное закрытие меню при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get form data
    const firstName = formData.get("firstname") || "";
    const lastName = formData.get("lastname") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    // Create mailto link
    const subject = `Portfolio Contact from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:serghei.pascal@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.open(mailtoLink, "_blank");

    // Show success message
    alert("E-Mail-Client wird geöffnet. Bitte senden Sie die Nachricht ab.");

    // Reset form
    form.reset();
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Background animations */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700/50 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/50 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="layout-container flex h-full grow flex-col items-center">
        <header
          ref={headerRef}
          className="fixed top-4 left-0 right-0 z-[70] mt-0 mx-auto flex w-full max-w-4xl items-center justify-between whitespace-nowrap rounded-lg border border-solid border-white/10 glassmorphism px-8 py-3 transform-gpu"
        >
          <div className="flex items-center gap-4 text-white">
            <div className="size-5">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Serghei Pascal
            </h2>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
                href="#experience"
              >
                {t.nav.experience}
              </a>
              <a
                className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
                href="#projects"
              >
                {t.nav.projects}
              </a>
              <a
                className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
                href="#skills"
              >
                {t.nav.skills}
              </a>
              <a
                className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
                href="#contact"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Language switcher */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "de"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log("Current mobileOpen state:", mobileOpen);
              if (mobileOpen) {
                closeMenu();
              } else {
                console.log("Opening menu");
                setMobileOpen(true);
              }
            }}
            className="md:hidden inline-flex items-center justify-center rounded-md text-white px-3 py-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            type="button"
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-90"
              >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile overlay */}
        {mobileOpen && (
          <>
            {/* Background overlay - covers entire screen with blur */}
            <div
              className="fixed inset-0 z-30 md:hidden bg-black/20 backdrop-blur-sm"
              onClick={(e) => {
                closeMenu();
              }}
            />

            {/* Menu positioned below header - full width */}
            <div
              className="fixed z-40 md:hidden"
              style={{
                top: `${Math.max(headerBottom, 100) - 5}px`,
                left: 0,
                right: 0,
              }}
            >
              <nav
                ref={menuRef}
                className="w-full rounded-lg border border-white/10 glassmorphism px-6 py-3"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-1">
                  {[
                    ["experience", t.nav.experience],
                    ["projects", t.nav.projects],
                    ["skills", t.nav.skills],
                    ["contact", t.nav.contact],
                  ].map(([id, label]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Closing menu from link:", id); // для отладки
                          closeMenu();
                          // Плавная прокрутка к секции
                          setTimeout(() => {
                            const element = document.getElementById(id);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 150);
                        }}
                        className="block w-full rounded-md px-3 py-3 text-white/80 hover:text-white hover:bg-white/10"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}

        <main className="layout-content-container flex flex-col w-full max-w-4xl flex-1 px-4 sm:px-8">
          {/* Hero */}
          <section
            id="home"
            className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center text-center py-20"
          >
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 mt-8 lg:mt-16">
              <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0 mt-20 md:mt-0">
                <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl shadow-black/20">
                  <img
                    alt="Portrait of Serghei Pascal"
                    className="w-full h-full object-cover"
                    src="/assets/ProfilePhoto.png"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl">
                  {t.hero.title}
                </h1>
                <h2 className="text-white/80 text-lg leading-normal md:text-xl max-w-2xl">
                  {t.hero.subtitle}
                </h2>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
                    href="/assets/doc/CV_PASCAL.pdf"
                    download="Pascal_Bewerbungsmappe.pdf"
                  >
                    <span className="truncate">{t.hero.downloadCV}</span>
                  </a>
                  <a
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 backdrop-blur-xs shadow-lg shadow-black/20 transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                    href="https://www.linkedin.com/in/serghei-pascal-23436a121/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9.352V9h3.413v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.266 2.371 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.99 20.452H3.68V9h3.31v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 backdrop-blur-xs shadow-lg shadow-black/20 transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                    href="https://github.com/bad-creator"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.39 7.863 10.907.575.106.786-.25.786-.556 0-.274-.01-1.001-.015-1.965-3.198.695-3.873-1.542-3.873-1.542-.523-1.327-1.278-1.681-1.278-1.681-1.045-.714.079-.7.079-.7 1.156.081 1.765 1.188 1.765 1.188 1.028 1.762 2.696 1.253 3.352.958.105-.745.402-1.253.73-1.541-2.553-.29-5.238-1.277-5.238-5.683 0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.457.113-3.037 0 0 .967-.31 3.17 1.179a10.98 10.98 0 0 1 2.888-.389c.981.005 1.97.133 2.888.389 2.202-1.49 3.168-1.179 3.168-1.179.63 1.58.234 2.747.115 3.037.739.805 1.186 1.832 1.186 3.087 0 4.417-2.69 5.39-5.254 5.675.413.356.78 1.055.78 2.127 0 1.536-.014 2.775-.014 3.154 0 .308.207.668.792.555C20.213 21.387 23.5 17.085 23.5 12 23.5 5.648 18.352.5 12 .5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-20">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">
              {t.experience.title}
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
              {t.experience.jobs.map((job, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`w-[1.5px] h-12 ${
                        job.isFirst ? "bg-transparent" : "bg-white/20"
                      }`}
                    />
                    <div className="glassmorphism p-2 rounded-full border border-white/10 flex-shrink-0">
                      <span className="material-symbols-outlined text-white text-xl">
                        work
                      </span>
                    </div>
                    <div
                      className={`w-[1.5px] h-full ${
                        job.isLast ? "bg-transparent" : "bg-white/20"
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col pb-10">
                    <div className="p-6 rounded-xl glassmorphism">
                      <p className="text-white text-lg font-medium leading-normal">
                        {job.title}
                      </p>
                      <p className="text-white/70 text-base font-normal leading-normal">
                        {job.company} | {job.period}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">
              {t.projects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/assets/work/Autofun.png",
                  title: "AutoFun",
                  desc: t.projects.autofun,
                },
                {
                  src: "/assets/work/kassasystem.png",
                  title: "Kassasystem",
                  desc: t.projects.kassasystem,
                },
                {
                  src: "/assets/work/resume.png",
                  title: "Resume",
                  desc: t.projects.resume,
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="group relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-xl border border-white/10 glassmorphism transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1"
                >
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={p.title}
                    src={p.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-white/80">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills (icons via CDN for now) */}
          <section id="skills" className="py-20">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">
              {t.skills.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 p-4">
              {[
                { name: "csharp", label: "C#" },
                { name: "python", label: "Python" },
                { name: "javascript", label: "JavaScript" },
                { name: "java", label: "Java" },
                { name: "react", label: "React" },
                { name: "nextjs", label: "Next.js" },
                { name: "tailwindcss", label: "Tailwind CSS" },
                { name: "html5", label: "HTML5" },
                { name: "css3", label: "CSS3" },
                { name: "postgresql", label: "PostgreSQL" },
                { name: "bootstrap", label: "Bootstrap" },
                { name: "figma", label: "Figma" },
              ].map(({ name, label }) => (
                <div
                  key={name}
                  className="tooltip flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 glassmorphism transition-transform hover:-translate-y-1"
                  data-tooltip={label}
                >
                  <img
                    alt={`${name} logo`}
                    className="h-12 w-12"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
                  />
                </div>
              ))}
              <div
                className="tooltip flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 glassmorphism transition-transform hover:-translate-y-1"
                data-tooltip=".NET"
              >
                <img
                  alt=".NET Icon"
                  className="h-12 w-12"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                />
              </div>
              <div
                className="tooltip flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 glassmorphism transition-transform hover:-translate-y-1"
                data-tooltip="Microsoft SQL Server"
              >
                <img
                  alt="Microsoft SQL Server Icon"
                  className="h-12 w-12"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                />
              </div>
              <div
                className="tooltip flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 glassmorphism transition-transform hover:-translate-y-1"
                data-tooltip=".NET MAUI"
              >
                <img
                  alt=".NET MAUI Icon"
                  className="h-12 w-12"
                  src="/maui_icon.svg"
                />
              </div>
              <div
                className="tooltip flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 glassmorphism transition-transform hover:-translate-y-1"
                data-tooltip="ChatGPT"
              >
                <img
                  alt="ChatGPT Logo"
                  className="h-12 w-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                />
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-4">
                {t.contact.title}
              </h2>
              <p className="text-white/80">{t.contact.subtitle}</p>
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    className="form-input w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:ring-0"
                    placeholder={t.contact.firstName}
                    type="text"
                    name="firstname"
                    required
                  />
                  <input
                    className="form-input w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:ring-0"
                    placeholder={t.contact.lastName}
                    type="text"
                    name="lastname"
                    required
                  />
                  <input
                    className="form-input w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:ring-0 sm:col-span-2"
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    className="form-input w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:ring-0 sm:col-span-2"
                    placeholder={t.contact.phone}
                    type="tel"
                    name="phone"
                  />
                </div>
                <textarea
                  className="form-textarea w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:ring-0"
                  placeholder={t.contact.message}
                  rows={5}
                  name="message"
                  required
                />
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center self-center overflow-hidden rounded-lg h-12 px-6 bg-white text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
                  type="submit"
                >
                  <span className="truncate">{t.contact.send}</span>
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
