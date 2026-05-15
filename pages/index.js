import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LanguageToggle from "@components/LanguageToggle";
import ProjectModal from "@components/ProjectModal";
import Seo from "@components/Seo";
import content from "@data/content";
import experienceData from "@data/experience";
import projectsData from "@data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

function SunIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7m0 0H9m8 0v8"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const socials = [
  {
    label: "Email",
    href: "mailto:fadlanzikri11@gmail.com",
    value: "fadlanzikri11@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadfadlansyah",
    value: "linkedin.com/in/muhammadfadlansyah",
  },
  {
    label: "GitHub",
    href: "https://github.com/fadlnsyah",
    value: "github.com/fadlnsyah",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281356285450",
    value: "+62 813-5628-5450",
  },
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "Spring Boot",
  "PHP",
  "Python",
  "MySQL",
  "Tailwind CSS",
  "Docker",
  "GitHub",
];

function AboutPanel({ lang, about, hero, projectCount }) {
  return (
    <div className="space-y-12 pt-2">
      <div className="border-b border-slate-200/80 pb-10 dark:border-white/10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {lang === "id" ? "Tersedia untuk kerja" : "Available for work"}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
              {hero.greeting}
            </p>
            <h1 className="max-w-[22ch] font-display text-[40px] font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white md:max-w-[26ch] md:text-[64px]">
              {hero.name}
            </h1>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            {hero.role}
          </div>
          <div className="grid max-w-3xl gap-6 border-t border-slate-200/80 pt-6 dark:border-white/10 sm:grid-cols-2">
            {[
              {
                label: lang === "id" ? "Basis" : "Based in",
                value: "Indonesia",
              },
              {
                label: lang === "id" ? "Gaya Kerja" : "Work Style",
                value: lang === "id" ? "Clean and deliberate" : "Clean and deliberate",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          {lang === "id" ? "Profil Singkat" : "Profile Snapshot"}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          {about.title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-[15px]">
          {about.description}
        </p>
      </div>

      <div className="grid gap-12 border-t border-slate-200/80 pt-9 dark:border-white/10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="pr-0 lg:pr-10">
          <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
            {about.approach.title}
          </h3>
          <div className="mt-6 space-y-5">
            {about.approach.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <p className="max-w-2xl text-[15px] leading-8 text-slate-600 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 border-t border-slate-200/80 pt-8 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="text-slate-950 dark:text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              {lang === "id" ? "Identitas" : "Identity"}
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-slate-400">{lang === "id" ? "Nama panggilan" : "Preferred name"}</p>
                <p className="mt-1 font-display text-[28px] font-semibold tracking-tight">{hero.nickname}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">{lang === "id" ? "Peran" : "Role"}</p>
                <p className="mt-1 text-lg font-medium text-slate-700 dark:text-slate-200">{hero.role}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="border-t border-slate-200/80 pt-4 dark:border-white/10">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {lang === "id" ? "Pengalaman" : "Experience"}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-slate-950 dark:text-white">2+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                {lang === "id" ? "Tahun" : "Years"}
              </p>
            </div>
            <div className="border-t border-slate-200/80 pt-4 dark:border-white/10">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {lang === "id" ? "Proyek" : "Projects"}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-slate-950 dark:text-white">{projectCount}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                {lang === "id" ? "Terpilih" : "Selected"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 pt-9 dark:border-white/10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
            {about.skills.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
            {lang === "id" ? "Stack Harian" : "Daily Stack"}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperiencePanel({ lang, items }) {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          {lang === "id" ? "Riwayat Kerja" : "Work History"}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          {lang === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-[15px]">
          {lang === "id"
            ? "Bagian ini saya rapikan tanpa gambar agar fokus langsung ke posisi, tempat kerja, dan kontribusi utama."
            : "This section is intentionally simplified without images so the focus stays on the role, company, and key contributions."}
        </p>
      </div>

      <div className="space-y-0 border-t border-slate-200/80 dark:border-white/10">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="border-b border-slate-200/80 py-9 dark:border-white/10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                  {item.type}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
              <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
                {item.period}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {item.responsibilities.map((responsibility) => (
                <div key={responsibility} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-950 dark:bg-white" />
                  <p className="max-w-3xl text-[15px] leading-8 text-slate-600 dark:text-slate-300">{responsibility}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function ProjectsPanel({ lang, items, onOpen }) {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          {lang === "id" ? "Pilihan Karya" : "Selected Work"}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          {lang === "id" ? "Proyek" : "Projects"}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-[15px]">
          {lang === "id"
            ? "Ringkasan proyek saya tampilkan secara ringkas agar value, stack, dan konteks pengerjaannya lebih cepat dipahami."
            : "Each project is presented in a compact format so the value, stack, and delivery context are easier to scan quickly."}
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-0 border-t border-slate-200/80 pt-2 dark:border-white/10 md:grid-cols-2">
        {items.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            onClick={() => onOpen(project)}
            className="group border-b border-slate-200/80 py-7 text-left transition dark:border-white/10"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-[40rem]">
                  <h3 className="font-display text-[20px] font-semibold leading-tight text-slate-950 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>
                <span className="mt-0.5 rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition group-hover:border-sky-200 group-hover:text-sky-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
                  <ArrowUpRightIcon />
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function ContactPanel({ lang, contact }) {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          {lang === "id" ? "Mari Terhubung" : "Let's Connect"}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          {contact.title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-[15px]">
          {contact.description}
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-7 border-t border-slate-200/80 pt-9 dark:border-white/10 sm:grid-cols-2">
        {socials.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group border-b border-slate-200/80 pb-5 transition hover:border-sky-200 dark:border-white/10 dark:hover:border-sky-500/30"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition group-hover:text-sky-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
                {item.label === "GitHub" ? <GitHubIcon /> : <ArrowUpRightIcon />}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="border-t border-slate-200/80 pt-9 dark:border-white/10">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
          {lang === "id" ? "Kontak Utama" : "Primary Contact"}
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">fadlanzikri11@gmail.com</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              {lang === "id"
                ? "Silakan hubungi saya jika Anda membutuhkan Software Engineer untuk product build, redesign portfolio, atau pengembangan web."
                : "Reach out if you need a Software Engineer for product builds, portfolio redesigns, or web development work."}
            </p>
          </div>
          <a
            href="mailto:fadlanzikri11@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            {lang === "id" ? "Kirim Email" : "Send Email"}
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const copy = content[lang];
  const experience = experienceData[lang];
  const projects = projectsData[lang];

  const [activeTab, setActiveTab] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: "about", label: copy.nav.about },
    { id: "experience", label: copy.nav.experience },
    { id: "projects", label: copy.nav.projects },
    { id: "contact", label: copy.nav.contact },
  ];

  const renderPanel = () => {
    if (activeTab === "experience") {
      return <ExperiencePanel lang={lang} items={experience} />;
    }

    if (activeTab === "projects") {
      return <ProjectsPanel lang={lang} items={projects} onOpen={setSelectedProject} />;
    }

    if (activeTab === "contact") {
      return <ContactPanel lang={lang} contact={copy.contact} />;
    }

    return (
      <AboutPanel
        lang={lang}
        about={copy.about}
        hero={copy.hero}
        projectCount={projects.length}
      />
    );
  };

  return (
    <>
      <Seo />
      <div className="min-h-screen overflow-hidden">
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/15" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-400/10" />
          </div>

          <header className="relative z-10 border-b border-slate-200/70 px-5 py-4 dark:border-white/10 md:px-8 md:py-6">
            <div className="mx-auto grid w-full max-w-[1480px] items-center gap-4 lg:grid-cols-[1fr_auto]">
              <div className="scrollbar-hide order-2 flex gap-2 overflow-x-auto lg:order-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeTab === tab.id
                        ? "text-slate-950 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="active-tab"
                        className="absolute inset-0 rounded-full border border-slate-300 bg-white dark:border-white/15 dark:bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="order-1 flex items-center justify-end gap-2 lg:order-2">
                <motion.button
                  type="button"
                  onClick={toggleTheme}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-700 transition hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </motion.button>
                <LanguageToggle />
              </div>
            </div>
          </header>

          <main className="relative z-10 min-h-0 flex-1 px-5 py-8 md:px-8">
            <div className="mx-auto flex h-full w-full max-w-[1480px] flex-col">
            <section className="min-h-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="h-full overflow-y-auto pr-1 md:pr-3"
                >
                  {renderPanel()}
                </motion.div>
              </AnimatePresence>
            </section>
            </div>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
