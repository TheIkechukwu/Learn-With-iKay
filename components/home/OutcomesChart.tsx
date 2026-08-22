"use client";

import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { FiBarChart2 } from "react-icons/fi";

const skillData = [
  { label: "EXCEL", pre: 35, post: 88 },
  { label: "SQL", pre: 12, post: 82 },
  { label: "POWER BI", pre: 8, post: 79 },
  { label: "STATS", pre: 22, post: 74 },
  { label: "PYTHON", pre: 5, post: 68 },
];

const stats = [
  { label: "PLACEMENT", value: "78%" },
  { label: "MEDIAN Δ PAY", value: "+41%" },
  { label: "COMPLETION", value: "92%" },
];

export function OutcomesChart() {
  return (
    <div className="rounded-2xl bg-surface p-5 text-on-background shadow-hero md:p-6">
      <div className="mb-4.5 flex items-center justify-between">
        <div>
          <div className="font-display text-[15px] font-bold text-primary">
            Cohort Outcomes Dashboard
          </div>
          <div className="mt-1 font-mono text-[10.5px] tracking-[0.05em] text-outline">
            SOURCE: LWi_ALUMNI_2024_2026.CSV
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[10px] text-primary">
          <FiBarChart2 size={12} />
          LIVE
        </div>
      </div>

      <div className="mb-3.5 grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-[13px] border border-outline-variant bg-surface-container-lowest p-3.5"
          >
            <div className="font-mono text-[9.5px] tracking-[0.09em] text-outline">
              {s.label}
            </div>
            <div className="mt-1.5 font-display text-[22px] font-bold text-primary md:text-[25px]">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[13px] border border-outline-variant bg-surface-container-lowest px-4 pb-3 pt-4">
        <div className="mb-3.5 flex items-baseline justify-between">
          <div className="text-[12.5px] font-semibold text-primary">
            Skill confidence, pre vs. post cohort
          </div>
          <div className="font-mono text-[10px] text-outline">n = 512</div>
        </div>
        <div className="h-[150px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillData} barGap={3} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fill: "#727974" }}
              />
              <Tooltip
                cursor={{ fill: "rgba(3,37,26,0.05)" }}
                contentStyle={{
                  borderRadius: 10,
                  border: "1px solid #E3E2E0",
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="pre" name="Pre-cohort" fill="#E3E2E0" radius={[5, 5, 0, 0]} />
              <Bar dataKey="post" name="Post-cohort" fill="#1B3B2F" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
