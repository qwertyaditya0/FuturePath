import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  GraduationCap,
  IndianRupee,
  TrendingUp,
  Star,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "Galgotias University",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹1.50 Lakh",
    package: "₹5.40 LPA",
    rating: "4.3",
    hostel: "Available",
    infrastructure: "Excellent",
  },
  {
    id: 2,
    name: "Sharda University",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹2.00 Lakh",
    package: "₹6.50 LPA",
    rating: "4.2",
    hostel: "Available",
    infrastructure: "Excellent",
  },
  {
    id: 3,
    name: "GL Bajaj Institute of Technology and Management",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹1.30 Lakh",
    package: "₹7.50 LPA",
    rating: "4.4",
    hostel: "Available",
    infrastructure: "Excellent",
  },
  {
    id: 4,
    name: "Galgotias College of Engineering and Technology",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹1.20 Lakh",
    package: "₹5.50 LPA",
    rating: "4.2",
    hostel: "Available",
    infrastructure: "Good",
  },
  {
    id: 5,
    name: "Bennett University",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹3.00 Lakh",
    package: "₹8.00 LPA",
    rating: "4.3",
    hostel: "Available",
    infrastructure: "Excellent",
  },
  {
    id: 6,
    name: "Delhi Technical Campus",
    location: "Greater Noida",
    course: "B.Tech",
    fees: "₹1.30 Lakh",
    package: "₹5.50 LPA",
    rating: "4.1",
    hostel: "Available",
    infrastructure: "Good",
  },
];

function CollegeComparison() {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedColleges = colleges.filter((college) =>
    selectedIds.includes(college.id)
  );

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
      return;
    }

    if (selectedIds.length >= 3) {
      alert("You can compare maximum 3 colleges.");
      return;
    }

    setSelectedIds([...selectedIds, id]);
  };

  const clearComparison = () => {
    setSelectedIds([]);
  };

  return (
    <section
      id="college-comparison"
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
            <Scale size={15} />
            Smart Comparison
          </span>

          <h2 className="mt-5 text-3xl font-black text-blue-950 sm:text-4xl lg:text-5xl">
            Compare Colleges.
            <span className="text-red-600"> Choose Smarter.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Compare fees, placements, ratings, hostel and infrastructure
            before making your college decision.
          </p>
        </motion.div>

        {/* College Selection */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-black text-blue-950">
                Select Colleges
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Select up to 3 colleges to compare.
              </p>
            </div>

            {selectedIds.length > 0 && (
              <button
                onClick={clearComparison}
                className="self-start rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                Clear All
              </button>
            )}
          </div>

          {/* College Options */}
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {colleges.map((college) => {
              const isSelected = selectedIds.includes(college.id);

              return (
                <button
                  key={college.id}
                  onClick={() => handleSelect(college.id)}
                  className={`relative rounded-2xl border p-5 text-left transition ${
                    isSelected
                      ? "border-blue-700 bg-blue-50 shadow-md"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  {/* Selected */}
                  {isSelected && (
                    <div className="absolute right-4 top-4 text-blue-700">
                      <CheckCircle2 size={22} />
                    </div>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
                    <GraduationCap size={22} />
                  </div>

                  <h4 className="mt-4 pr-8 text-base font-extrabold text-blue-950">
                    {college.name}
                  </h4>

                  <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {college.location}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      {college.course}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-bold text-yellow-600">
                      <Star size={13} fill="currentColor" />
                      {college.rating}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selection Count */}
          <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-600">
              {selectedIds.length} of 3 colleges selected
            </p>

            <div className="flex gap-1">
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className={`h-2.5 w-2.5 rounded-full ${
                    selectedIds.length >= item
                      ? "bg-blue-700"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        {selectedColleges.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-blue-950">
                    <th className="w-40 p-5 text-left text-sm font-bold text-blue-200">
                      Comparison
                    </th>

                    {selectedColleges.map((college) => (
                      <th
                        key={college.id}
                        className="min-w-[210px] p-5 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-yellow-400">
                            <GraduationCap size={20} />
                          </div>

                          <div>
                            <p className="text-sm font-extrabold text-white">
                              {college.name}
                            </p>

                            <p className="mt-1 flex items-center gap-1 text-xs text-blue-200">
                              <MapPin size={11} />
                              {college.location}
                            </p>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {/* Course */}
                  <tr className="border-b border-slate-100">
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Course
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-bold text-blue-950"
                      >
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5">
                          {college.course}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Fees */}
                  <tr className="border-b border-slate-100">
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Annual Fees
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-extrabold text-blue-950"
                      >
                        <span className="flex items-center gap-1">
                          <IndianRupee size={15} />
                          {college.fees.replace("₹", "")}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Package */}
                  <tr className="border-b border-slate-100">
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Average Package
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-extrabold text-green-600"
                      >
                        <span className="flex items-center gap-1">
                          <TrendingUp size={15} />
                          {college.package}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr className="border-b border-slate-100">
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Student Rating
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-extrabold text-yellow-600"
                      >
                        <span className="flex items-center gap-1">
                          <Star size={15} fill="currentColor" />
                          {college.rating} / 5
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Hostel */}
                  <tr className="border-b border-slate-100">
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Hostel
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-bold text-slate-700"
                      >
                        <span className="flex items-center gap-2">
                          <Building2 size={16} />
                          {college.hostel}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Infrastructure */}
                  <tr>
                    <td className="p-5 text-sm font-bold text-slate-500">
                      Infrastructure
                    </td>

                    {selectedColleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-sm font-bold text-slate-700"
                      >
                        {college.infrastructure}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Counselor CTA */}
            <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div>
                  <h3 className="text-xl font-black text-blue-950">
                    Still confused about your choice?
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Talk to an expert counselor and make the right decision.
                  </p>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("counseling")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
                >
                  Talk to Expert Counselor
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {selectedColleges.length < 2 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <Scale
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-lg font-bold text-blue-950">
              Select at least 2 colleges
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Choose colleges above to see a detailed comparison.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default CollegeComparison;