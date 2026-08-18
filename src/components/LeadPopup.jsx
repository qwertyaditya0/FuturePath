import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Phone, User, ArrowRight } from "lucide-react";

function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

 useEffect(() => {
  const timer = setTimeout(() => {
    setIsOpen(true);
  }, 10000);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  window.addEventListener("openLeadPopup", handleOpenPopup);

  return () => {
    clearTimeout(timer);
    window.removeEventListener("openLeadPopup", handleOpenPopup);
  };
}, []);

  const handleChange = (e) => {
  let value = e.target.value;

  if (e.target.name === "mobile") {
    value = value.replace(/\D/g, "").slice(0, 10);
  }

  setFormData({
    ...formData,
    [e.target.name]: value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name.trim() || !formData.mobile) {
    alert("Please fill all details.");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  alert(
    `Thank you ${formData.name}! Our counselor will contact you shortly.`
  );

  setFormData({
    name: "",
    mobile: "",
  });

  setIsOpen(false);
};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/60 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
            >
              <X size={20} />
            </button>

            {/* Top */}
            <div className="bg-blue-950 px-6 pb-7 pt-8 text-center text-white">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950 shadow-lg">
                <GraduationCap size={32} />
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                Limited Free Guidance
              </p>

              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Get FREE Admission Guidance
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-blue-100">
                Find the right college, understand your admission chances and
                get expert guidance — absolutely free.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 p-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Your Name
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-600 focus-within:bg-white">
                  <User size={18} className="text-slate-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Mobile Number
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-600 focus-within:bg-white">
                  <Phone size={18} className="text-slate-400" />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className="w-full bg-transparent px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 hover:shadow-xl"
              >
                Get FREE Counseling
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-slate-400">
                🔒 Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LeadPopup;