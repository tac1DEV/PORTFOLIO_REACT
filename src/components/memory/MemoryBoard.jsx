import { Typography } from "../atom/Typography";
import { MemoryCard } from "./MemoryCard"
import { useMemory } from "./MemoryProvider";

export const MemoryBoard = () => {
  const {cards, onReturnCard} = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 w-max">
      {cards.map((card) => (
        <MemoryCard key={card.id} card={card} onClick={() => onReturnCard(card)}>
          {card.emoji}
        </MemoryCard>
      ))}
    </div>
  );
};
