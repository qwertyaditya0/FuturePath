import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Trophy,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Guided",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Partner Colleges",
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Admission Success",
  },
  {
    icon: Headphones,
    value: "24×7",
    label: "Expert Support",
  },
];

function TrustStats() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:py-10">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-center gap-4 px-4 py-5 ${
                index !== 0
                  ? "border-l border-slate-200"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <Icon size={23} />
              </div>

              <div>
                <p className="text-2xl font-black tracking-tight text-blue-950">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-xs font-semibold text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default TrustStats;