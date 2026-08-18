import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  ShieldCheck,
  TrendingUp,
  MapPin,
  IndianRupee,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

const colleges = [
  {
    name: "Top Engineering Institute",
    location: "Greater Noida",
    fee: "₹1.20L / year",
    package: "₹6.5 LPA",
    chance: "High Match",
    type: "Best Match",
  },
  {
    name: "Leading Technical University",
    location: "Noida",
    fee: "₹1.50L / year",
    package: "₹7.2 LPA",
    chance: "Good Match",
    type: "Dream",
  },
  {
    name: "Popular B.Tech College",
    location: "Delhi NCR",
    fee: "₹95K / year",
    package: "₹5.8 LPA",
    chance: "Strong Match",
    type: "Safe",
  },
];

function CollegePredictor() {
  const [form, setForm] = useState({
    percentile: "",
    cuet: "",
    board: "",
    category: "",
    state: "",
    branch: "",
  });

  const [results, setResults] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.percentile || !form.board || !form.category || !form.branch) {
      alert("Please fill all required fields.");
      return;
    }

    setResults(true);
  };

  const resetPredictor = () => {
    setForm({
      percentile: "",
      cuet: "",
      board: "",
      category: "",
      state: "",
      branch: "",
    });

    setResults(false);
  };

  return (
    <section
      id="predictor"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <Sparkles size={14} />
            AI Powered Tool
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Find Colleges That{" "}
            <span className="text-red-600">Match You.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Enter your academic details and explore colleges based on your
            profile, preferred course and location.
          </p>
        </motion.div>

        {/* Predictor Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          {/* Top Bar */}
          <div className="bg-blue-950 px-6 py-5 text-white sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Sparkles size={22} />
              </div>

              <div>
                <h3 className="font-extrabold">
                  AI College Predictor
                </h3>

                <p className="text-xs text-blue-200">
                  Get a personalized college shortlist
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3"
          >
            {/* Percentile */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                JEE Main Percentile *
              </label>

              <input
                type="number"
                name="percentile"
                value={form.percentile}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="e.g. 92.40"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* CUET */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                CUET Score
              </label>

              <input
                type="number"
                name="cuet"
                value={form.cuet}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Board */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Board Percentage *
              </label>

              <input
                type="number"
                name="board"
                value={form.board}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="e.g. 85"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Category *
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Preferred State
              </label>

              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Haryana">Haryana</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Branch */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Preferred Branch *
              </label>

              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Branch</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="MBA">MBA</option>
              </select>
            </div>

            {/* Button */}
            <div className="sm:col-span-2 lg:col-span-3">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                <Sparkles size={19} />
                Predict My Colleges
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-12 max-w-5xl"
          >
            {/* Result Header */}
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Prediction Results
                </p>

                <h3 className="mt-1 text-2xl font-black text-blue-950 sm:text-3xl">
                  Colleges matching your profile
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  These are sample results for the frontend demo. Final
                  eligibility should be verified with official admission rules.
                </p>
              </div>

              <button
                onClick={resetPredictor}
                className="flex items-center gap-2 self-start rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50 sm:self-auto"
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>

            {/* Result Cards */}
            <div className="grid gap-5 lg:grid-cols-3">
              {colleges.map((college, index) => {
                const icons = [Target, TrendingUp, ShieldCheck];
                const Icon = icons[index];

                return (
                  <motion.div
                    key={college.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        {college.chance}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {college.type} College
                    </p>

                    <h4 className="mt-1 text-lg font-extrabold text-blue-950">
                      {college.name}
                    </h4>

                    <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin size={14} />
                      {college.location}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[11px] font-semibold text-slate-400">
                          Fees
                        </p>

                        <p className="mt-1 flex items-center text-sm font-bold text-slate-800">
                          <IndianRupee size={13} />
                          {college.fee.replace("₹", "")}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[11px] font-semibold text-slate-400">
                          Avg Package
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {college.package}
                        </p>
                      </div>
                    </div>

                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-900 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-950 hover:text-white">
                      Talk to Expert Counselor
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default CollegePredictor;