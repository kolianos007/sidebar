import { BackIcon } from "../../icons/BackIcon";
import { DoubleStarIcon } from "../../icons/DoubleStarIcon";
import { NextIcon } from "../../icons/NextIcon";
import { TripleStarIcon } from "../../icons/TripleStarIcon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { backgrounds } from "../../../mock";
import { Card } from "../Card";

const ideaText =
  "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.";

const queue = {
  progress: 25,
  time: "1 minute left",
};

const actionButtons = [
  { icon: BackIcon, label: "Previous idea" },
  { icon: NextIcon, label: "Next idea" },
];

export function BackgroundSidebar() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div>
        <p className="text-[1.375rem] font-bold text-black leading-[26px]">
          Change background
        </p>
      </div>

      <ScrollArea className="h-[calc(100vh-5.125rem)]">
        <div>
          <section className="mb-10">
            <p className="text-sm font-semibold leading-[17px]">
              Background idea
            </p>
            <div className="rounded-[12px] border border-[#F2F4F6] bg-white pt-4 pb-2.25 px-3.75 mt-3 mb-6">
              <Textarea
                name="prompt"
                defaultValue={ideaText}
                aria-label="Prompt"
                className="h-[116px] max-w-[328px] resize-none border-none p-0 text-sm bg-transparent font-medium leading-[20px] text-black focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none wrap-break-word"
              />
              <div className="mt-5 flex items-center justify-between">
                <Button
                  variant="outline"
                  className="w-[105px] h-8.5 py-2 px-1.75 -ml-2.5 rounded-[10px] text-xs font-semibold text-black border-none cursor-pointer gap-1"
                >
                  <DoubleStarIcon />
                  Regenerate
                </Button>
                <div className="flex items-center gap-2">
                  {actionButtons.map(({ icon: Icon, label }) => (
                    <Button
                      key={label}
                      size="icon"
                      variant="outline"
                      className="h-8.5 w-8.5 border-sidebar-border border-none cursor-pointer rounded-[10px]"
                      aria-label={label}
                    >
                      <Icon color="#CAD4DD" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              size="pill"
              className="w-full rounded-[100px] text-sm bg-black text-white cursor-pointer font-semibold gap-2"
            >
              <TripleStarIcon className="h-4 w-4" />
              Generate BG for 1 credit
            </Button>
          </section>

          <section className="mb-4">
            <p className="text-sm font-semibold leading-[17px] mb-0">
              Your backgrounds
            </p>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <Card type="queue" progress={queue.progress} time={queue.time} />
              {backgrounds.map((background) => (
                <Card
                  key={background.id}
                  type="background"
                  background={background}
                  isDefault={background.isDefault}
                />
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
