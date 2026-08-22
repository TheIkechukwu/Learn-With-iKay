"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";
import { FiBarChart2, FiTrendingUp } from "react-icons/fi";
import { cn } from "@/lib/utils";

const skillData = [
  { label: "EXCEL", pre: 35, post: 88 },
  { label: "SQL", pre: 12, post: 82 },
  { label: "POWER BI", pre: 8, post: 79 },
  { label: "STATS", pre: 22, post: 74 },
  { label: "PYTHON", pre: 5, post: 68 },
];

type SeriesKey = "pre" | "post";

const series: { key: SeriesKey; name: string; color: string }[] = [
  { key: "pre", name: "Pre-cohort", color: "#E3E2E0" },
  { key: "post", name: "Post-cohort", color: "#1B3B2F" },
];

type TooltipPayloadItem = {
  dataKey: SeriesKey;
  value: number;
  payload: (typeof skillData)[number];
};

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) {
  if (!active || !payload || payload.length === 0) return null;
  const row = payload[0].payload;
  const delta = row.post - row.pre;

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 shadow-hero">
      <div className="font-mono text-[10.5px] tracking-[0.08em] text-outline">{row.label}</div>
      <div className="mt-2 grid gap-1.5">
        <div className="flex items-center justify-between gap-6 text-[13px]">
          <span className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="h-2 w-2 rounded-sm bg-surface-variant" /> Pre-cohort
          </span>
          <span className="font-display font-bold text-on-surface">{row.pre}%</span>
        </div>
        <div className="flex items-center justify-between gap-6 text-[13px]">
          <span className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="h-2 w-2 rounded-sm bg-primary-container" /> Post-cohort
          </span>
          <span className="font-display font-bold text-on-surface">{row.post}%</span>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 border-t border-surface-variant pt-2.5 font-mono text-[11px] font-medium text-surface-tint">
        <FiTrendingUp size={12} />+{delta} pts confidence gained
      </div>
    </div>
  );
}

export function OutcomesChart() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState<Record<SeriesKey, boolean>>({
    pre: false,
    post: false,
  });

  function toggleSeries(key: SeriesKey) {
    setHidden((h) => ({ ...h, [key]: !h[key] }));
  }

  return (
    <div className="rounded-2xl bg-surface p-5 text-on-background shadow-hero md:p-6">
      <div className="mb-4.5 flex items-center justify-between">
        <div className="font-display text-[15px] font-bold text-primary">
          Cohort Outcomes Dashboard
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[10px] text-primary">
          <FiBarChart2 size={12} />
          LIVE
        </div>
      </div>

      <div className="rounded-[13px] border border-outline-variant bg-surface-container-lowest px-4 pb-4 pt-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[12.5px] font-semibold text-primary">
            Skill confidence, pre vs. post cohort
          </div>
          <div className="flex items-center gap-3">
            {series.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => toggleSeries(s.key)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide transition-colors",
                  hidden[s.key]
                    ? "border-outline-variant text-outline"
                    : "border-transparent text-on-surface-variant"
                )}
              >
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: hidden[s.key] ? "#C1C8C3" : s.color }}
                />
                {s.name}
              </button>
            ))}
            <div className="font-mono text-[10px] text-outline">n = 512</div>
          </div>
        </div>

        <div className="h-[260px] w-full md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillData}
              barGap={4}
              margin={{ top: 16, right: 4, left: -20, bottom: 0 }}
              onMouseMove={(state) => {
                if (state?.activeLabel) setActiveLabel(state.activeLabel as string);
              }}
              onMouseLeave={() => setActiveLabel(null)}
            >
              <CartesianGrid vertical={false} stroke="#E3E2E0" strokeDasharray="3 4" />
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontFamily: "var(--font-mono)", fontSize: 10, fill: "#727974" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                width={34}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fill: "#727974" }}
              />
              <Tooltip cursor={{ fill: "rgba(3,37,26,0.04)" }} content={<CustomTooltip />} />

              {!hidden.pre && (
                <Bar dataKey="pre" name="Pre-cohort" radius={[6, 6, 0, 0]} animationDuration={900}>
                  {skillData.map((row) => (
                    <Cell
                      key={row.label}
                      fill="#E3E2E0"
                      opacity={activeLabel && activeLabel !== row.label ? 0.45 : 1}
                    />
                  ))}
                </Bar>
              )}

              {!hidden.post && (
                <Bar dataKey="post" name="Post-cohort" radius={[6, 6, 0, 0]} animationDuration={1100}>
                  {skillData.map((row) => (
                    <Cell
                      key={row.label}
                      fill="#1B3B2F"
                      opacity={activeLabel && activeLabel !== row.label ? 0.45 : 1}
                    />
                  ))}
                  <LabelList
                    dataKey="post"
                    position="top"
                    formatter={(v: React.ReactNode) =>
                      typeof v === "number" ? `${v}%` : ""
                    }
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fill: "#1B3B2F",
                      fontWeight: 600,
                    }}
                  />
                </Bar>
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}