import type { backgrounds } from "@/mock";
import { QueueCard } from "./components/QueueCard";
import { BackgroundCard } from "./components/BackgroundCard";

type QueueCardProps = {
  type: "queue";
  progress: number;
  time: string;
};

type BackgroundCardProps = {
  type: "background";
  background: (typeof backgrounds)[number];
  isDefault?: boolean;
};

type CardProps = QueueCardProps | BackgroundCardProps;

export function Card(props: CardProps) {
  if (props.type === "queue") {
    return <QueueCard progress={props.progress} time={props.time} />;
  }

  return (
    <BackgroundCard background={props.background} isDefault={props.isDefault} />
  );
}
