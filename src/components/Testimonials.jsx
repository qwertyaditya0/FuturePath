import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  GraduationCap,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    course: "B.Tech CSE",
    college: "Greater Noida",
    city: "Delhi",
    rating: 5,
    review:
      "Future Path Education helped me understand which colleges matched my percentile and budget. The counseling team guided me throughout the admission process.",
    initials: "AS",
  },
  {
    name: "Priya Verma",
    course: "B.Tech IT",
    college: "Noida",
    city: "Ghaziabad",
    rating: 5,
    review:
      "I was completely confused about college selection. The counselor explained my options clearly and helped me shortlist the right colleges.",
    initials: "PV",
  },
  {
    name: "Rahul Singh",
    course: "MBA",
    college: "Delhi NCR",
    city: "Meerut",
    rating: 5,
    review:
      "The admission guidance was very helpful. I got clear information about fees, placements and eligibility before making my final decision.",
    initials: "RS",
  },
  {
    name: "Ananya Gupta",
    course: "BCA",
    college: "Noida",
    city: "Delhi",
    rating: 4,
    review:
      "The scholarship guidance was one of the most useful parts for me. The team helped me understand different options available for my course.",
    initials: "AG",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-blue-950 px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-300">
            <Star size={14} fill="currentColor" />
            Student Stories
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Students Who Trusted
            <span className="block text-yellow-400">
              Future Path Education
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Real experiences from students who received guidance during
            their college and admission journey.
          </p>
        </motion.div>

        {/* Testimonial */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">

                {/* Student Profile */}
                <div className="text-center md:border-r md:border-slate-200 md:pr-8">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-950 text-2xl font-black text-yellow-400 shadow-lg">
                    {testimonial.initials}
                  </div>

                  <h3 className="mt-5 text-xl font-black text-blue-950">
                    {testimonial.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-center gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill={
                          index < testimonial.rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-slate-500">

                    <p className="flex items-center justify-center gap-2">
                      <GraduationCap
                        size={15}
                        className="text-blue-700"
                      />
                      {testimonial.course}
                    </p>

                    <p className="flex items-center justify-center gap-2">
                      <MapPin
                        size={15}
                        className="text-red-600"
                      />
                      {testimonial.city}
                    </p>

                  </div>
                </div>

                {/* Review */}
                <div className="relative">

                  <Quote
                    size={55}
                    className="absolute -top-3 -left-2 text-blue-100"
                    fill="currentColor"
                  />

                  <div className="relative">
                    <p className="text-lg font-medium leading-8 text-slate-700 sm:text-xl">
                      “{testimonial.review}”
                    </p>

                    <div className="mt-6 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700">
                      ✓ Admission Guidance Received
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">

            <button
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${current === index
                      ? "w-7 bg-yellow-400"
                      : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new Event("openLeadPopup"));
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
          >
            Start Your Admission Journey
            <ArrowRight size={17} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;