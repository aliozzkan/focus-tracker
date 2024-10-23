"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with a custom shape";

const chartConfig = {
  mins: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface RadialChart1Props {
  value: number;
  percentage: number;
  label: string;
}

export function RadialChart1(props: RadialChart1Props) {
  const eagleFromPercentage = (props.percentage * 360) / 100;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadialBarChart
        data={[
          {
            mins: props.value + 1,
            fill: "#C530C3",
          },
        ]}
        endAngle={eagleFromPercentage}
        innerRadius={80}
        outerRadius={140}
      >
        <PolarGrid
          gridType="circle"
          radialLines={true}
          stroke="none"
          className="first:fill-muted last:fill-white dark:last:fill-black"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="mins" background   />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-primary text-4xl font-bold"
                    >
                      {props.value}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {props.label}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
