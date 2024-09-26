import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { GenericCard } from "./Card";
import { useDrop } from "react-dnd";

interface CardData {
  id: string;
  name: string;
  value: string;
  progress: number;
  date: string;
  columnId: string;
  comments: string[]; // Include comments in card data
}

interface ColumnProps {
  title: string;
  id: string;
  moveCard: (id: string, targetColumn: string) => void;
  deleteCard: (id: string) => void; // Add deleteCard prop
  addComment: (id: string, comment: string) => void; // Add addComment prop
  cards: CardData[]; // Updated to accept cards as prop with comments
}

export const Column: FC<ColumnProps> = ({
  title,
  id,
  moveCard,
  deleteCard,
  addComment,
  cards,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item: { id: string }) => {
      moveCard(item.id, id); // Call the moveCard function
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // Filter cards for the current column
  const filteredCards = cards.filter((card) => card.columnId === id);

  return (
    <Box
      ref={drop}
      sx={{
        width: "400px",
        backgroundColor: isOver ? "lightblue" : "#f8f8f8",
        padding: 2,
        minHeight: "400px",
      }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {/* Check if there are no cards and render appropriate message */}
      {filteredCards.length === 0 ? (
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            textAlign: "center",
            marginTop: 2,
            fontWeight: 600,
          }}>
          No Matching Opportunities
        </Typography>
      ) : (
        filteredCards.map((card) => (
          <GenericCard
            key={card.id}
            {...card}
            deleteCard={deleteCard}
            addComment={addComment} // Pass addComment to each card
          />
        ))
      )}
    </Box>
  );
};
