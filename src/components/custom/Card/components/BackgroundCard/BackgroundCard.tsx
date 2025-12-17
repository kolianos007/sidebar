import { Badge } from "@/components/ui/badge";
import type { backgrounds } from "@/mock";

type BackgroundCardProps = {
  background: (typeof backgrounds)[number];
  isDefault?: boolean;
};

export function BackgroundCard({ background, isDefault }: BackgroundCardProps) {
  return (
    <div
      className={`aspect-9/16 overflow-hidden rounded-[12px] relative ${
        isDefault ? "border-2 border-black" : "border-none"
      }`}
    >
      <img
        src={background?.image}
        alt={background?.id}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex h-full flex-col justify-between p-1.5">
        {background?.isDefault && (
          <Badge className="w-[50px] h-[19px] bg-white px-1.5 py-1 rounded-[5px] text-black text-[10px] font-bold uppercase border border-[rgba(0,0,0,0.05)] backdrop-blur-[7.5px]">
            Default
          </Badge>
        )}
      </div>
    </div>
  );
}
