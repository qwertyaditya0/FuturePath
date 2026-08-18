import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  GraduationCap,
  IndianRupee,
  TrendingUp,
  Star,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

const colleges = [
  {
    name: "Future Institute of Technology",
    location: "Greater Noida",
    course: "B.Tech",
    fees: 120000,
    package: 6.5,
    rating: 4.4,
    ranking: 1,
  },
  {
    name: "Delhi NCR Technical University",
    location: "Noida",
    course: "B.Tech",
    fees: 150000,
    package: 7.2,
    rating: 4.6,
    ranking: 2,
  },
  {
    name: "National School of Management",
    location: "Delhi",
    course: "MBA",
    fees: 180000,
    package: 8.1,
    rating: 4.5,
    ranking: 3,
  },
  {
    name: "Greater Noida Business School",
    location: "Greater Noida",
    course: "MBA",
    fees: 110000,
    package: 6.8,
    rating: 4.2,
    ranking: 4,
  },
  {
    name: "NCR Institute of Computer Applications",
    location: "Noida",
    course: "BCA",
    fees: 85000,
    package: 5.2,
    rating: 4.1,
    ranking: 5,
  },
  {
    name: "Delhi Institute of Technology",
    location: "Delhi",
    course: "B.Tech",
    fees: 95000,
    package: 5.8,
    rating: 4.3,
    ranking: 6,
  },
];

function CollegeFinder() {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");
  const [location, setLocation] = useState("All");
  const [maxFees, setMaxFees] = useState("All");

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(search.toLowerCase());

      const matchesCourse =
        course === "All" || college.course === course;

      const matchesLocation =
        location === "All" || college.location === location;

      const matchesFees =
        maxFees === "All" || college.fees <= Number(maxFees);

      return (
        matchesSearch &&
        matchesCourse &&
        matchesLocation &&
        matchesFees
      );
    });
  }, [search, course, location, maxFees]);

  return (
    <section
      id="college-finder"
      className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <GraduationCap size={15} />
            Explore Colleges
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Find Your{" "}
            <span className="text-red-600">Perfect College.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Search and compare colleges based on course, location, fees and
            placement opportunities.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7">

          {/* Search */}
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search college by name..."
              className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Filters */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Course
              </label>

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-700"
              >
                <option value="All">All Courses</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MBA">MBA</option>
                <option value="BCA">BCA</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-700"
              >
                <option value="All">All Locations</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Greater Noida">
                  Greater Noida
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Maximum Fees
              </label>

              <select
                value={maxFees}
                onChange={(e) => setMaxFees(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-700"
              >
                <option value="All">Any Fees</option>
                <option value="100000">Under ₹1 Lakh</option>
                <option value="125000">Under ₹1.25 Lakh</option>
                <option value="150000">Under ₹1.5 Lakh</option>
                <option value="200000">Under ₹2 Lakh</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearch("");
                  setCourse("All");
                  setLocation("All");
                  setMaxFees("All");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                <SlidersHorizontal size={17} />
                Reset Filters
              </button>
            </div>

          </div>
        </div>

        {/* Result Count */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-blue-950">
              {filteredColleges.length} Colleges Found
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Explore colleges matching your preferences
            </p>
          </div>
        </div>

        {/* College Cards */}
        {filteredColleges.length > 0 ? (
          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                {/* College Header */}
                <div className="relative bg-blue-950 p-5">

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-yellow-400">
                      <GraduationCap size={25} />
                    </div>

                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-blue-950">
                      #{college.ranking}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold leading-6 text-white">
                    {college.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-1 text-xs text-blue-200">
                    <MapPin size={13} />
                    {college.location}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5">

                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-900">
                      {college.course}
                    </span>

                    <div className="flex items-center gap-1 text-sm font-bold text-yellow-600">
                      <Star
                        size={15}
                        fill="currentColor"
                      />
                      {college.rating}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[11px] font-semibold text-slate-400">
                        Annual Fees
                      </p>

                      <p className="mt-1 flex items-center text-sm font-extrabold text-slate-800">
                        <IndianRupee size={13} />
                        {(college.fees / 1000).toFixed(0)}K
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[11px] font-semibold text-slate-400">
                        Avg Package
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-sm font-extrabold text-green-600">
                        <TrendingUp size={14} />
                        ₹{college.package} LPA
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <button className="rounded-xl border border-blue-900 px-3 py-3 text-xs font-bold text-blue-900 transition hover:bg-blue-950 hover:text-white">
                      View College
                    </button>

                    <button className="flex items-center justify-center gap-1 rounded-xl bg-red-600 px-3 py-3 text-xs font-bold text-white transition hover:bg-red-700">
                      Counselor
                      <ArrowRight size={14} />
                    </button>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <GraduationCap
              size={40}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-lg font-bold text-blue-950">
              No colleges found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default CollegeFinder;