import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  TrendingUp,
  MapPin,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <main
      id="home"
      className="relative overflow-hidden bg-blue-950"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-3xl" />

      <section className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/60 px-4 py-2 text-sm font-semibold text-blue-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Trusted Admission Guidance
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Find the Right College.

            <span className="mt-2 block text-yellow-400">
              Build the Right Future.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Get personalized admission guidance, discover the best colleges,
            find scholarships and connect with expert counselors — all in one
            place.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-xl shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700">
              Get FREE Counseling
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20">
              <Sparkles size={18} />
              Try AI College Predictor
            </button>
          </div>

          {/* Trust Points */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Expert Counselors
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              College Guidance
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Scholarship Support
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >

          {/* Main Dashboard */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 rounded-3xl border border-white/20 bg-white p-5 shadow-2xl sm:p-7"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  AI College Predictor
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-blue-950">
                  Your College Matches
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                <Sparkles size={22} />
              </div>
            </div>

            {/* Percentile */}
            <div className="mt-6 rounded-2xl bg-blue-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-200">
                    JEE Main Percentile
                  </p>

                  <p className="mt-1 text-4xl font-black">
                    92.40%
                  </p>
                </div>

                <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">
                  Excellent
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="h-full rounded-full bg-yellow-400"
                />
              </div>
            </div>

            {/* Matches */}
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-bold text-slate-800">
                  Top College Matches
                </p>

                <span className="text-xs font-semibold text-blue-700">
                  12 Matches
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-900">
                  01
                </div>

                <div className="flex-1">
                  <p className="font-bold text-slate-800">
                    Best Engineering College
                  </p>

                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} />
                    Greater Noida
                  </p>
                </div>

                <span className="text-sm font-bold text-green-600">
                  94%
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-100 font-bold text-yellow-700">
                  02
                </div>

                <div className="flex-1">
                  <p className="font-bold text-slate-800">
                    Top B.Tech Institute
                  </p>

                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} />
                    Noida
                  </p>
                </div>

                <span className="text-sm font-bold text-green-600">
                  91%
                </span>
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold text-white transition hover:bg-red-700">
              View My College Matches
              <TrendingUp size={18} />
            </button>
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-6 top-12 z-20 hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Admission Chance
                </p>

                <p className="text-lg font-black text-slate-800">
                  95% Excellent
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 top-1/2 z-20 hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <IndianRupee size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Scholarships Found
                </p>

                <p className="text-lg font-black text-slate-800">
                  ₹2.5 Lakh+
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD 3 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 left-8 z-20 hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Students Guided
                </p>

                <p className="text-lg font-black text-slate-800">
                  10,000+
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}

export default Hero;