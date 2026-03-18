import { Input } from "@/components/ui";

interface DistanceSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function DistanceSlider({ value, onChange }: DistanceSliderProps) {
  const max = 500;
  const isAny = value === 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-bold text-[#2D3748]">Distance</h3>
        <span className="rounded-full bg-[#E6F4F1] px-3 py-0.5 text-[12px] font-bold text-[#3D8F87]">
          {isAny ? "Any distance" : `Within ${value}km`}
        </span>
      </div>

      <div className="py-1">
        <Input
          type="range"
          min="0"
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="h-[6px] w-full cursor-pointer appearance-none rounded-full border-0 bg-transparent p-0 ring-0 outline-none placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#4FB3AA] [&::-moz-range-thumb]:shadow-sm [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4FB3AA] [&::-webkit-slider-thumb]:shadow-sm"
          style={{
            background: `linear-gradient(to right, #B4E4DF ${(value / max) * 100}%, #E2E8F0 ${(value / max) * 100}%)`,
          }}
        />
        <div className="mt-2 flex items-center justify-between text-[12px] font-medium text-[#94A3B8]">
          <span>Any</span>
          <span>{max}km+</span>
        </div>
      </div>
    </div>
  );
}
