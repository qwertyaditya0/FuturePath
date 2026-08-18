import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  CalendarDays,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  UserRound,
  Mail,
  MapPin,
} from "lucide-react";

function Counseling() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    course: "",
    city: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.course || !form.city) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="counseling"
      className="relative overflow-hidden bg-blue-950 px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-200">
              <GraduationCap size={15} />
              Free Expert Guidance
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Confused About Your
              <span className="block text-yellow-400">
                College & Career?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
              Talk to our admission experts and get personalized guidance
              based on your academic profile, career goals and budget.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-green-400"
                />
                <span>Personalized college selection guidance</span>
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-green-400"
                />
                <span>Admission & eligibility assistance</span>
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-green-400"
                />
                <span>Scholarship & fee guidance</span>
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-green-400"
                />
                <span>One-to-one expert counseling</span>
              </div>

            </div>

            {/* Quick Contact */}
            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <PhoneCall size={17} />
                Call Expert
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Future%20Path%20Education%2C%20I%20need%20admission%20guidance."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >

            {!submitted ? (
              <>
                <div className="mb-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                    It's 100% Free
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-blue-950">
                    Book Free Counseling
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Share your details and our counselor will get in touch
                    with you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* Name */}
                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="relative">
                    <PhoneCall
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number *"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Course */}
                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-600 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">
                        Select Course *
                      </option>
                      <option value="B.Tech">
                        B.Tech
                      </option>
                      <option value="MBA">
                        MBA
                      </option>
                      <option value="Diploma">
                        Diploma
                      </option>
                      <option value="BCA">
                        BCA
                      </option>
                      <option value="MCA">
                        MCA
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* City */}
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your City *"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address (Optional)"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
                  >
                    Get FREE Counseling
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">
                    <CalendarDays size={14} />
                    No payment required
                  </div>

                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[500px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-blue-950">
                  Request Received! 🎉
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Thank you for contacting Future Path Education.
                  Our counselor will connect with you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-blue-950 px-6 py-3 font-bold text-white transition hover:bg-blue-900"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Counseling;