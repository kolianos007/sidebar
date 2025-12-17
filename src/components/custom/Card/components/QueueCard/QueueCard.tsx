type QueueCardProps = {
  progress: number;
  time: string;
};

export function QueueCard({ progress, time }: QueueCardProps) {
  const angle = progress! * 3.6;
  return (
    <div className="h-[198px] relative flex flex-col items-center justify-center gap-4 rounded-[12px] border bg-black text-white">
      <div className="relative flex h-16.25 w-16.25 items-center justify-center">
        <div className="absolute rounded-full bg-sidebar-progress-trail" />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(var(--sidebar-emerald) ${angle}deg, var(--sidebar-progress-trail) 0deg)`,
          }}
        />
        <div className="relative flex h-14.75 w-14.75 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
          {progress}%
        </div>
      </div>
      <p className="text-xs text-white font-semibold absolute bottom-2.5">
        {time}
      </p>
    </div>
  );
}
