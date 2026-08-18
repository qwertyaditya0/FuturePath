import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Search,
  RotateCcw,
} from "lucide-react";

const scholarships = [
  {
    name: "Merit Scholarship",
    description:
      "For students with strong academic performance.",
    benefit: "Up to ₹50,000",
    minMarks: 75,
    maxIncome: 1000000,
    categories: ["General", "OBC", "SC", "ST", "EWS"],
    courses: ["B.Tech", "BCA", "MBA", "Diploma"],
  },
  {
    name: "Need Based Education Support",
    description:
      "Financial assistance for eligible students from lower-income families.",
    benefit: "Up to ₹75,000",
    minMarks: 60,
    maxIncome: 500000,
    categories: ["General", "OBC", "SC", "ST", "EWS"],
    courses: ["B.Tech", "BCA", "MBA", "Diploma"],
  },
  {
    name: "Women in Technology Scholarship",
    description:
      "Financial support opportunity for eligible women pursuing technology programs.",
    benefit: "Up to ₹1,00,000",
    minMarks: 70,
    maxIncome: 800000,
    categories: ["General", "OBC", "SC", "ST", "EWS"],
    courses: ["B.Tech", "BCA"],
  },
  {
    name: "STEM Excellence Scholarship",
    description:
      "For students demonstrating academic excellence in STEM-related programs.",
    benefit: "Up to ₹60,000",
    minMarks: 80,
    maxIncome: 1200000,
    categories: ["General", "OBC", "SC", "ST", "EWS"],
    courses: ["B.Tech"],
  },
];

function ScholarshipFinder() {
  const [form, setForm] = useState({
    marks: "",
    income: "",
    category: "",
    course: "",
  });

  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const findScholarships = (e) => {
    e.preventDefault();

    if (
      !form.marks ||
      !form.income ||
      !form.category ||
      !form.course
    ) {
      alert("Please fill all fields.");
      return;
    }

    const marks = Number(form.marks);
    const income = Number(form.income);

    const matches = scholarships.filter((scholarship) => {
      return (
        marks >= scholarship.minMarks &&
        income <= scholarship.maxIncome &&
        scholarship.categories.includes(form.category) &&
        scholarship.courses.includes(form.course)
      );
    });

    setResults(matches);
    setSearched(true);
  };

  const resetFinder = () => {
    setForm({
      marks: "",
      income: "",
      category: "",
      course: "",
    });

    setResults([]);
    setSearched(false);
  };

  return (
    <section
      id="scholarships"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-yellow-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-800">
            <Award size={15} />
            Financial Support
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Find Scholarships That{" "}
            <span className="text-red-600">Fit You.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Enter your academic and financial details to explore scholarship
            opportunities that may match your profile.
          </p>
        </motion.div>

        {/* Finder Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-8"
        >
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
              <Award size={24} />
            </div>

            <div>
              <h3 className="text-xl font-black text-blue-950">
                Scholarship Finder
              </h3>

              <p className="text-sm text-slate-500">
                Check opportunities based on your profile.
              </p>
            </div>
          </div>

          <form
            onSubmit={findScholarships}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Marks */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Marks / Percentage
              </label>

              <input
                type="number"
                name="marks"
                value={form.marks}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="e.g. 85"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Income */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Annual Family Income
              </label>

              <input
                type="number"
                name="income"
                value={form.income}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 500000"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
              </select>
            </div>

            {/* Course */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Course
              </label>

              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Course</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BCA">BCA</option>
                <option value="MBA">MBA</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            {/* Button */}
            <div className="sm:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                <Search size={19} />
                Find My Scholarships
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Results */}
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-12 max-w-5xl"
          >
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-700">
                  Scholarship Results
                </p>

                <h3 className="mt-1 text-2xl font-black text-blue-950 sm:text-3xl">
                  {results.length} potential matches found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  These are demo opportunities for the website prototype.
                  Eligibility and benefits should be verified with the official
                  scholarship provider.
                </p>
              </div>

              <button
                onClick={resetFinder}
                className="flex items-center gap-2 self-start rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 sm:self-auto"
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {results.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                        <Award size={24} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        Potential Match
                      </span>
                    </div>

                    <h4 className="mt-5 text-xl font-extrabold text-blue-950">
                      {scholarship.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {scholarship.description}
                    </p>

                    <div className="mt-5 rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Maximum Listed Benefit
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-xl font-black text-blue-950">
                        <IndianRupee size={17} />
                        {scholarship.benefit.replace("₹", "")}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2
                          size={16}
                          className="text-green-500"
                        />
                        Academic criteria matched
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2
                          size={16}
                          className="text-green-500"
                        />
                        Income criteria matched
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <GraduationCap
                          size={16}
                          className="text-blue-700"
                        />
                        {form.course} eligible category
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new Event("openLeadPopup"));
                      }}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 py-3 font-bold text-white transition hover:bg-blue-900"
                    >
                      Get Scholarship Guidance
                      <ArrowRight size={17} />
                    </button>


                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <Award
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <h4 className="mt-4 text-lg font-bold text-blue-950">
                  No matching scholarships found
                </h4>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Try changing your marks, income or course. You can also
                  speak with a counselor for personalized guidance.
                </p>

                <button
                  onClick={resetFinder}
                  className="mt-5 rounded-xl bg-blue-950 px-5 py-3 text-sm font-bold text-white"
                >
                  Try Again
                </button>
              </div>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default ScholarshipFinder;