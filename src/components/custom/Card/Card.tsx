import type { backgrounds } from "@/mock";
import { QueueCard } from "./components/QueueCard";
import { BackgroundCard } from "./components/BackgroundCard";

type CardProps = {
  type: "background" | "queue";
  background?: (typeof backgrounds)[number];
  progress?: number;
  time?: string;
  isDefault?: boolean;
};

const CARD_COMPONENTS = {
  queue: QueueCard,
  background: BackgroundCard,
} as const;

export function Card(props: CardProps) {
  const CardComponent = CARD_COMPONENTS[props.type];

  if (!CardComponent) return null;

  return <CardComponent {...props} />;
}
