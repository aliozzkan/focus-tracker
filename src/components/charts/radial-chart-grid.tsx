"use client";

import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with a grid";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RadialChartGrid(props: { remaning: number; value: number }) {
  const total = props.remaning / 3;
  const x = Math.floor(props.value / total);
  const y = props.value % total;

  const part1 = x > 0 ? total : x === 0 ? y : 0;
  const part2 = x > 1 ? total : x === 1 ? y : 0;
  const part3 = x > 2 ? total : x === 2 ? y : 0;

  const chartData = [
    { browser: "chrome", visitors: total, fill: "transparent" },
    { browser: "firefox", visitors: part1, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: part2, fill: "var(--color-edge)" },
    {
      browser: "other",
      visitors: part3,
      fill: "var(--color-other)",
    },
  ];

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <RadialBarChart data={chartData} innerRadius={30} outerRadius={140}>
        <PolarGrid gridType="circle" />
        <RadialBar dataKey="visitors" />
      </RadialBarChart>
    </ChartContainer>
  );
}
