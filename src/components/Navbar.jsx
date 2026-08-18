import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  GraduationCap,
  ChevronDown,
  Search,
  Scale,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collegeMenuOpen, setCollegeMenuOpen] = useState(false);

  // Open Lead Popup
  const openCounseling = () => {
    window.dispatchEvent(new Event("openLeadPopup"));
    setMenuOpen(false);
    setCollegeMenuOpen(false);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setCollegeMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-white shadow-lg">
            <GraduationCap size={26} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-blue-950">
              FUTURE PATH
            </h1>

            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">
              EDUCATION
            </p>
          </div>
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-8 lg:flex">

          {/* Home */}
          <a
            href="#home"
            className="text-sm font-semibold text-blue-950 transition hover:text-red-600"
          >
            Home
          </a>

          {/* Services */}
          <a
            href="#services"
            className="text-sm font-semibold text-slate-600 transition hover:text-red-600"
          >
            Services
          </a>

          {/* ================= COLLEGES DROPDOWN ================= */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setCollegeMenuOpen(!collegeMenuOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-red-600"
            >
              Colleges

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  collegeMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {collegeMenuOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">

                {/* College Finder */}
                <a
                  href="#college-finder"
                  onClick={() => setCollegeMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                    <Search size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-950">
                      College Finder
                    </p>

                    <p className="text-xs text-slate-500">
                      Find colleges for you
                    </p>
                  </div>
                </a>

                {/* College Comparison */}
                <a
                  href="#college-comparison"
                  onClick={() => setCollegeMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                    <Scale size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-950">
                      Compare Colleges
                    </p>

                    <p className="text-xs text-slate-500">
                      Compare your choices
                    </p>
                  </div>
                </a>

                {/* College Predictor */}
                <a
                  href="#predictor"
                  onClick={() => setCollegeMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-950">
                      College Predictor
                    </p>

                    <p className="text-xs text-slate-500">
                      Check admission chances
                    </p>
                  </div>
                </a>

              </div>
            )}
          </div>

          {/* College Predictor */}
          <a
            href="#predictor"
            className="text-sm font-semibold text-slate-600 transition hover:text-red-600"
          >
            College Predictor
          </a>

          {/* Counseling */}
          <a
            href="#counseling"
            className="text-sm font-semibold text-slate-600 transition hover:text-red-600"
          >
            Counseling
          </a>
        </div>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Phone */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-blue-950 transition hover:text-red-600"
          >
            <Phone size={17} />
            Talk to Expert
          </a>

          {/* Free Counseling */}
          <button
            type="button"
            onClick={openCounseling}
            className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 hover:shadow-xl"
          >
            Free Counseling
          </button>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-200 p-2 text-blue-950 transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden">

          <div className="flex flex-col gap-4">

            {/* Home */}
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="font-semibold text-blue-950"
            >
              Home
            </a>

            {/* Services */}
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="font-semibold text-slate-700"
            >
              Services
            </a>

            {/* ================= MOBILE COLLEGES ================= */}
            <button
              type="button"
              onClick={() => setCollegeMenuOpen(!collegeMenuOpen)}
              className="flex items-center justify-between font-semibold text-slate-700"
            >
              <span>Colleges</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  collegeMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {collegeMenuOpen && (
              <div className="ml-2 flex flex-col gap-2 rounded-xl bg-slate-50 p-3">

                {/* Mobile College Finder */}
                <a
                  href="#college-finder"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-900"
                >
                  <Search size={17} />
                  College Finder
                </a>

                {/* Mobile Comparison */}
                <a
                  href="#college-comparison"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-900"
                >
                  <Scale size={17} />
                  Compare Colleges
                </a>

                {/* Mobile Predictor */}
                <a
                  href="#predictor"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-900"
                >
                  <GraduationCap size={17} />
                  College Predictor
                </a>

              </div>
            )}

            {/* Predictor */}
            <a
              href="#predictor"
              onClick={closeMobileMenu}
              className="font-semibold text-slate-700"
            >
              College Predictor
            </a>

            {/* Counseling */}
            <a
              href="#counseling"
              onClick={closeMobileMenu}
              className="font-semibold text-slate-700"
            >
              Counseling
            </a>

            {/* Mobile Phone */}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 font-semibold text-blue-950"
            >
              <Phone size={18} />
              Talk to Expert
            </a>

            {/* Mobile Free Counseling */}
            <button
              type="button"
              onClick={openCounseling}
              className="rounded-lg bg-red-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              Free Counseling
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;