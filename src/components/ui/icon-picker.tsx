"use client";

import { icons } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Input } from "./input";

const IconPicker = () => {
  const [queryState, setQueryState] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.target.value);
  };

  return (
    <div className="space-y-2 mt-4">
      <div className="flex">
        <Input className="max-w-[400px] bg-gray-200" placeholder="Search..." onChange={handleChange} value={queryState} />
      </div>
      <div className="flex flex-wrap gap-1">
        {Object.values(icons)
          .filter((x) =>
            x.displayName?.toLowerCase().includes(queryState.toLowerCase())
          ) 
          .map((icon, index) => {
            const Icon = icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center p-4 flex-col border size-20 rounded cursor-pointer hover:opacity-50"
              >
                <Icon />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IconPicker;
