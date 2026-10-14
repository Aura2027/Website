import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import duLogo from "../assets/du-logo.png";
import { siteConfig } from "../data/siteConfig";

interface NavItem {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "About the Conference", to: "/about" },
      { label: "Committee", to: "/committee" },
    ],
  },
  {
    label: "Authors",
    children: [
      { label: "Call for Papers", to: "/call-for-papers" },
      { label: "Important Dates", to: "/important-dates" },
    ],
  },
  { label: "Speakers", to: "/speakers" },
  { label: "Registration", to: "/registration" },
  { label: "Venue", to: "/venue" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md shadow-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src={duLogo} alt="University of Delhi crest" className="h-11 w-11 sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-du-maroon sm:text-xl">
              {siteConfig.fullTitle}
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink/50 sm:text-xs">
              University of Delhi
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-du-maroon/5 hover:text-du-maroon"
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="min-w-[220px] rounded-xl border border-ink/8 bg-white p-2 shadow-xl shadow-black/10">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-du-maroon/8 text-du-maroon"
                                  : "text-ink/75 hover:bg-du-maroon/5 hover:text-du-maroon"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to!}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-du-maroon/8 text-du-maroon"
                      : "text-ink/80 hover:bg-du-maroon/5 hover:text-du-maroon"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <Link
          to="/call-for-papers"
          className="hidden rounded-full bg-du-maroon px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-du-maroon/20 transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Submit Paper
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-du-maroon lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/8 bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-ink/5 pb-2">
                    <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-ink/40">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-du-maroon/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to!}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-du-maroon/5"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                to="/call-for-papers"
                className="mt-2 rounded-full bg-du-maroon px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Submit Paper
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
