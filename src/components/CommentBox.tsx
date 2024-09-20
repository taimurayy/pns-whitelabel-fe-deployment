import React, { useState } from "react";
import { Box, Button, IconButton, TextField, Avatar } from "@mui/material";
import BoldIcon from "@mui/icons-material/FormatBold";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface CommentBoxProps {
  onCommentSubmit: (comment: string) => void;
  onCancel: (comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState("");

  const wrapSelectedText = (before: string, after: string) => {
    const textarea = document.querySelector(
      "#comment-box"
    ) as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = comment.substring(start, end);
    const beforeText = comment.substring(0, start);
    const afterText = comment.substring(end);

    setComment(beforeText + before + selectedText + after + afterText);
  };

  const handleBoldClick = () => {
    wrapSelectedText("**", "**");
  };

  const handleItalicClick = () => {
    wrapSelectedText("_", "_");
  };
  const handleAttachFileClick = () => {
    // Placeholder for attach functionality
    console.log("Attach file clicked");
  };

  return (
    <Box
      sx={{
        border: "1px solid gray",
        backgroundColor: "white",
        padding: 2,
        borderRadius: 2,
        width: "100%",
        marginTop: 1,
        zIndex: 3,
      }}>
      <Box display="flex">
        <Avatar
          sx={{
            bgcolor: "#d32f2f",
            marginRight: 2,
            marginTop: 0.5,
          }}>
          BH
        </Avatar>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "blue", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "blue", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue", // Border color when focused
              },
            },
          }}
        />
      </Box>
      <Box
        display="flex"
        sx={{
          marginLeft: 20,
          marginTop: -2,
        }}>
        <IconButton onClick={handleBoldClick}>
          <BoldIcon />
        </IconButton>
        <IconButton onClick={handleItalicClick}>
          <ItalicIcon />
        </IconButton>
        <IconButton onClick={handleAttachFileClick}>
          <AttachFileIcon />
        </IconButton>
      </Box>
      <Box display="flex" sx={{ marginLeft: 15 }}>
        <Button variant="contained" onClick={() => onCommentSubmit(comment)}>
          Cancel
        </Button>
        <Button
          sx={{ marginLeft: 2 }}
          variant="contained"
          onClick={() => onCommentSubmit(comment)}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CommentBox;
