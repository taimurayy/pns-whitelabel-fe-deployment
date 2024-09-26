import { Comment, Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import { FC, useState } from "react";
import { useDrag } from "react-dnd";
import CommentBox from "../CommentBox"; // Import the CommentBox component

interface CardProps {
  id: string;
  name: string;
  value: string;
  progress: number;
  date: string;
  comments: string[];
  deleteCard: (id: string) => void;
  addComment: (id: string, comment: string) => void;
}

const getInitials = (name: string): string => {
  const nameParts = name.split(" ");
  return nameParts.length > 1
    ? nameParts[0][0] + nameParts[1][0]
    : nameParts[0][0];
};

export const GenericCard: FC<CardProps> = ({
  id,
  name,
  value,
  progress,
  date,
  comments,
  deleteCard,
  addComment,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleCommentSubmit = (comment: string) => {
    if (comment.trim()) {
      addComment(id, comment.trim());
      setShowCommentBox(false); // Hide comment box after submission
    }
  };
  const handleCommentClose = () => {
    console.log(1);
    setShowCommentBox(false);
  };

  return (
    <Card
      ref={drag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        marginBottom: 2,
        cursor: "grab",
        borderRadius: 4,
      }}>
      <CardContent>
        <Box display="flex">
          <Box sx={{ width: "60%" }} display="flex">
            <Avatar
              sx={{
                bgcolor: "#e9e99",
                color: "grey",
                mr: 1,
                fontSize: "small",
              }}>
              {getInitials(name)}
            </Avatar>
            <Typography variant="h6" sx={{ color: "#3982b9" }}>
              {name}
            </Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <IconButton onClick={() => deleteCard(id)}>
              <Delete />
            </IconButton>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton onClick={() => setShowCommentBox((prev) => !prev)}>
              <Comment />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ width: "120%", ml: -2, mt: 1, mb: 1 }} />
        <Box display="flex">
          <Avatar sx={{ bgcolor: "pink", color: "purple", mr: 1 }}>
            {getInitials(name)}
          </Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
            <Typography variant="body2">
              {progress}% on {date}
            </Typography>
          </Box>
        </Box>

        {showCommentBox && (
          <CommentBox
            onCommentSubmit={handleCommentSubmit}
            onCancel={handleCommentClose}
          />
        )}

        {/* Render comments */}
        {comments.length > 0 && (
          <Box mt={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Comments:
            </Typography>
            {comments.map((comment, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                - {comment}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
