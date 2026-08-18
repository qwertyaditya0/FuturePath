import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  UserRoundCheck,
  WalletCards,
  Search,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "College Admission",
    description:
      "Get complete admission assistance and choose the right college for your career goals.",
    tag: "Most Popular",
  },
  {
    icon: Sparkles,
    title: "AI College Predictor",
    description:
      "Check your admission chances and discover colleges based on your marks and entrance score.",
    tag: "AI Powered",
  },
  {
    icon: UserRoundCheck,
    title: "Career Counseling",
    description:
      "Talk to experienced counselors and get personalized guidance for your education journey.",
    tag: "Free Guidance",
  },
  {
    icon: WalletCards,
    title: "Scholarship Guidance",
    description:
      "Find scholarships and financial assistance opportunities based on your profile.",
    tag: "Save Money",
  },
  {
    icon: Search,
    title: "College Finder",
    description:
      "Search and explore colleges by course, location, fees, placements and more.",
    tag: "Explore Colleges",
  },
  {
    icon: FileCheck2,
    title: "Admission Assistance",
    description:
      "Get support with applications, documents, verification and admission tracking.",
    tag: "End-to-End",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            What We Offer
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-red-600">Choose Better.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From college selection to final admission, Future Path Education
            provides complete guidance under one roof.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-blue-950 transition-colors group-hover:bg-red-600" />

                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 transition-all duration-300 group-hover:bg-blue-950 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-extrabold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-900 transition-colors group-hover:text-red-600">
                  Explore Service
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-blue-950 px-7 py-7 sm:flex-row sm:px-9"
        >
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Not sure which service you need?
            </h3>

            <p className="mt-1 text-sm text-blue-200">
              Our experts will help you find the right path.
            </p>
          </div>

        <button
  type="button"
  onClick={() => {
    window.dispatchEvent(new Event("openLeadPopup"));
  }}
  className="rounded-xl bg-red-600 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
>
  Talk to an Expert
</button>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;