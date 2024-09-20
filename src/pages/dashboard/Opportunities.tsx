import Layout from "../../components/Layout";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CommentBox from "../../components/CommentBox";
import { Comment, Delete, Edit } from "@mui/icons-material";
export default function Opportunities() {
  // Dummy data for opportunities
  // State for opportunities and comment input

  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      company: "Bluth Company (Example Lead)",
      value: "$3,000",
      probability: "75%",
      date: "9/2/2024",
      comment: "",
    },
    {
      id: 2,
      company: "Close (Example Lead)",
      value: "$500",
      probability: "75%",
      date: "9/1/2024",
      comment: "",
    },
    {
      id: 3,
      company: "Wayne Enterprises (Example Lead)",
      value: "$500",
      probability: "75%",
      date: "9/1/2024",
      comment: "",
    },
  ]);
  const [showCommentBox, setShowCommentBox] = useState<Record<number, boolean>>(
    {}
  );
  const [comments, setComments] = useState<Record<number, string>>({});

  const handleCommentClick = (id: number) => {
    setShowCommentBox((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleDelete = (id: number) => {
    setOpportunities((prevOpportunities) =>
      prevOpportunities.filter((opportunity) => opportunity.id !== id)
    );
  };
  const handleCommentSubmit = (id: number, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
    setShowCommentBox((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  const onCancel = (id: number, comment: string) => {
    console.log(comment);
    setShowCommentBox((prev) => ({
      ...prev,
      [id]: false,
    })); // Hide the comment box when canceled
  };

  return (
    <Layout>
      <Box
        sx={{
          // width: "110%",
          // maxWidth: "112%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          margin: -3,
        }}>
        <TableContainer
          component={Paper}
          sx={{
            overflow: "hidden",
            width: "1430px",
            boxShadow: "none",
            border: "none",
          }}>
          <Table>
            <TableHead>
              <TableRow
                sx={
                  {
                    // border: "1px solid gray",
                  }
                }>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    fontWeight: "bold",
                    textAlign: "left",
                    width: "20%",
                  }}>
                  <Chip
                    label="DEMO COMPLETED"
                    color="default"
                    sx={{
                      backgroundColor: "#fccc0a",
                      color: "black",
                      marginLeft: 1,
                      fontWeight: "normal",
                    }}
                  />
                  <Typography sx={{ color: "gray", marginLeft: 2 }}>
                    3 Opportuntities
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderTop: "none",
                    width: "20%",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}>
                  <Chip
                    label="PROPOSAL SENT"
                    color="default"
                    sx={{
                      backgroundColor: "#fccc0a",
                      color: "black",
                      marginLeft: 1,
                      fontWeight: "normal",
                    }}
                  />
                  <Typography sx={{ color: "gray", marginLeft: 2 }}>
                    0 Opportuntities
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderTop: "none",
                    width: "20%",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}>
                  <Chip
                    label="CONTRACT SENT"
                    color="default"
                    sx={{
                      backgroundColor: "#fccc0a",
                      color: "black",
                      marginLeft: 1,
                      fontWeight: "normal",
                    }}
                  />
                  <Typography sx={{ color: "gray", marginLeft: 2 }}>
                    0 Opportuntities
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderTop: "none",
                    width: "20%",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}></TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderTop: "none",
                    borderRight: "none",
                    width: "20%",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  backgroundColor: "#e4f2ff",
                }}>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderLeft: "none",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}>
                  <Box display="flex">
                    <Typography sx={{ color: "gray", marginLeft: 2 }}>
                      AUTHORIZED VALUE
                    </Typography>
                    <Typography sx={{ color: "black", ml: "auto" }}>
                      0$
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    border: "1px solid gray",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}>
                  <Box display="flex">
                    <Typography sx={{ color: "gray", marginLeft: 2 }}>
                      ANNULIZED VALUE
                    </Typography>
                    <Typography sx={{ color: "black", ml: "auto" }}>
                      0$
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}>
                  <Box display="flex">
                    <Typography sx={{ color: "gray", marginLeft: 2 }}>
                      ANNUAZLIZED VALUE
                    </Typography>
                    <Typography sx={{ color: "black", ml: "auto" }}>
                      0$
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}></TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderRight: "none",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    paddingBottom: 25,
                  }}>
                  {opportunities.map((opportunity) => (
                    <Box
                      key={opportunity.id}
                      sx={{
                        border: "1px solid gray",

                        borderRadius: 2,
                        p: 1,

                        marginBottom: 1,
                      }}>
                      <Typography variant="subtitle1" color="#3982b9">
                        {opportunity.company}
                      </Typography>
                      <Divider sx={{ mt: 1, mb: 1, width: "107%", ml: -1 }} />
                      <Box display="flex">
                        <Avatar
                          sx={{
                            bgcolor: "#d32f2f",
                            marginRight: 2,
                            marginTop: 0.5,
                          }}>
                          BH
                        </Avatar>
                        <Box>
                          <Box display="flex">
                            <Typography variant="h6" sx={{ marginBottom: 0 }}>
                              {opportunity.value}
                            </Typography>
                            <IconButton
                              sx={{ mt: 0, ml: 1 }}
                              onClick={() =>
                                handleCommentClick(opportunity.id)
                              }>
                              <Comment />
                            </IconButton>
                            <IconButton
                              sx={{ mt: 0, ml: 1 }}
                              onClick={() => handleDelete(opportunity.id)}>
                              <Delete />
                            </IconButton>
                            <IconButton sx={{ mt: 0, ml: 1 }}>
                              <Edit />
                            </IconButton>
                          </Box>

                          <Typography variant="body2" sx={{ color: "gray" }}>
                            {opportunity.probability} on {opportunity.date}
                          </Typography>
                          {showCommentBox[opportunity.id] && (
                            <CommentBox
                              onCancel={(comment) =>
                                onCancel(opportunity.id, comment)
                              }
                              onCommentSubmit={(comment) =>
                                handleCommentSubmit(opportunity.id, comment)
                              }
                            />
                          )}

                          {comments[opportunity.id] && (
                            <Box mt={2}>
                              <Typography>
                                <strong>Comment:</strong>{" "}
                                {comments[opportunity.id]}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    textAlign: "center",
                  }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", marginTop: -35 }}>
                    No matching opportunities
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    textAlign: "center",
                  }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", marginTop: -35 }}>
                    No matching opportunities
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    textAlign: "center",
                  }}></TableCell>
                <TableCell
                  sx={{
                    border: "1px solid gray",
                    borderRight: "none",
                    textAlign: "center",
                  }}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}
