// import Layout from "../../components/Layout";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Chip,
//   Divider,
//   Avatar,
//   IconButton,
// } from "@mui/material";
// import { useState } from "react";
// import CommentBox from "../../components/CommentBox";
// import { Comment, Delete, Edit } from "@mui/icons-material";
// export default function Opportunities() {
//   // Dummy data for opportunities
//   // State for opportunities and comment input

//   const [opportunities, setOpportunities] = useState([
//     {
//       id: 1,
//       company: "Bluth Company (Example Lead)",
//       value: "$3,000",
//       probability: "75%",
//       date: "9/2/2024",
//       comment: "",
//     },
//     {
//       id: 2,
//       company: "Close (Example Lead)",
//       value: "$500",
//       probability: "75%",
//       date: "9/1/2024",
//       comment: "",
//     },
//     {
//       id: 3,
//       company: "Wayne Enterprises (Example Lead)",
//       value: "$500",
//       probability: "75%",
//       date: "9/1/2024",
//       comment: "",
//     },
//   ]);
//   const [showCommentBox, setShowCommentBox] = useState<Record<number, boolean>>(
//     {}
//   );
//   const [comments, setComments] = useState<Record<number, string>>({});

//   const handleCommentClick = (id: number) => {
//     setShowCommentBox((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };
//   const handleDelete = (id: number) => {
//     setOpportunities((prevOpportunities) =>
//       prevOpportunities.filter((opportunity) => opportunity.id !== id)
//     );
//   };
//   const handleCommentSubmit = (id: number, comment: string) => {
//     setComments((prev) => ({
//       ...prev,
//       [id]: comment,
//     }));
//     setShowCommentBox((prev) => ({
//       ...prev,
//       [id]: false,
//     }));
//   };
//   const onCancel = (id: number, comment: string) => {
//     console.log(comment);
//     setShowCommentBox((prev) => ({
//       ...prev,
//       [id]: false,
//     })); // Hide the comment box when canceled
//   };

//   return (
//     <Layout>
//       <Box
//         sx={{
//           // width: "110%",
//           // maxWidth: "112%",
//           display: "flex",
//           flexDirection: "column",
//           overflow: "hidden",
//           margin: -3,
//         }}>
//         <TableContainer
//           component={Paper}
//           sx={{
//             overflow: "hidden",
//             width: "1430px",
//             boxShadow: "none",
//             border: "none",
//           }}>
//           <Table>
//             <TableHead>
//               <TableRow
//                 sx={
//                   {
//                     // border: "1px solid gray",
//                   }
//                 }>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderTop: "none",
//                     borderLeft: "none",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                     width: "20%",
//                   }}>
//                   <Chip
//                     label="DEMO COMPLETED"
//                     color="default"
//                     sx={{
//                       backgroundColor: "#fccc0a",
//                       color: "black",
//                       marginLeft: 1,
//                       fontWeight: "normal",
//                     }}
//                   />
//                   <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                     3 Opportuntities
//                   </Typography>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderTop: "none",
//                     width: "20%",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}>
//                   <Chip
//                     label="PROPOSAL SENT"
//                     color="default"
//                     sx={{
//                       backgroundColor: "#fccc0a",
//                       color: "black",
//                       marginLeft: 1,
//                       fontWeight: "normal",
//                     }}
//                   />
//                   <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                     0 Opportuntities
//                   </Typography>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderTop: "none",
//                     width: "20%",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}>
//                   <Chip
//                     label="CONTRACT SENT"
//                     color="default"
//                     sx={{
//                       backgroundColor: "#fccc0a",
//                       color: "black",
//                       marginLeft: 1,
//                       fontWeight: "normal",
//                     }}
//                   />
//                   <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                     0 Opportuntities
//                   </Typography>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderTop: "none",
//                     width: "20%",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}></TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderTop: "none",
//                     borderRight: "none",
//                     width: "20%",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow
//                 sx={{
//                   backgroundColor: "#e4f2ff",
//                 }}>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderLeft: "none",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}>
//                   <Box display="flex">
//                     <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                       AUTHORIZED VALUE
//                     </Typography>
//                     <Typography sx={{ color: "black", ml: "auto" }}>
//                       0$
//                     </Typography>
//                   </Box>
//                 </TableCell>

//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}>
//                   <Box display="flex">
//                     <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                       ANNULIZED VALUE
//                     </Typography>
//                     <Typography sx={{ color: "black", ml: "auto" }}>
//                       0$
//                     </Typography>
//                   </Box>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}>
//                   <Box display="flex">
//                     <Typography sx={{ color: "gray", marginLeft: 2 }}>
//                       ANNUAZLIZED VALUE
//                     </Typography>
//                     <Typography sx={{ color: "black", ml: "auto" }}>
//                       0$
//                     </Typography>
//                   </Box>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}></TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderRight: "none",
//                     fontWeight: "bold",
//                     textAlign: "left",
//                   }}></TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     paddingBottom: 25,
//                   }}>
//                   {opportunities.map((opportunity) => (
//                     <Box
//                       key={opportunity.id}
//                       sx={{
//                         border: "1px solid gray",

//                         borderRadius: 2,
//                         p: 1,

//                         marginBottom: 1,
//                       }}>
//                       <Typography variant="subtitle1" color="#3982b9">
//                         {opportunity.company}
//                       </Typography>
//                       <Divider sx={{ mt: 1, mb: 1, width: "107%", ml: -1 }} />
//                       <Box display="flex">
//                         <Avatar
//                           sx={{
//                             bgcolor: "#d32f2f",
//                             marginRight: 2,
//                             marginTop: 0.5,
//                           }}>
//                           BH
//                         </Avatar>
//                         <Box>
//                           <Box display="flex">
//                             <Typography variant="h6" sx={{ marginBottom: 0 }}>
//                               {opportunity.value}
//                             </Typography>
//                             <IconButton
//                               sx={{ mt: 0, ml: 1 }}
//                               onClick={() =>
//                                 handleCommentClick(opportunity.id)
//                               }>
//                               <Comment />
//                             </IconButton>
//                             <IconButton
//                               sx={{ mt: 0, ml: 1 }}
//                               onClick={() => handleDelete(opportunity.id)}>
//                               <Delete />
//                             </IconButton>
//                             <IconButton sx={{ mt: 0, ml: 1 }}>
//                               <Edit />
//                             </IconButton>
//                           </Box>

//                           <Typography variant="body2" sx={{ color: "gray" }}>
//                             {opportunity.probability} on {opportunity.date}
//                           </Typography>
//                           {showCommentBox[opportunity.id] && (
//                             <CommentBox
//                               onCancel={(comment) =>
//                                 onCancel(opportunity.id, comment)
//                               }
//                               onCommentSubmit={(comment) =>
//                                 handleCommentSubmit(opportunity.id, comment)
//                               }
//                             />
//                           )}

//                           {comments[opportunity.id] && (
//                             <Box mt={2}>
//                               <Typography>
//                                 <strong>Comment:</strong>{" "}
//                                 {comments[opportunity.id]}
//                               </Typography>
//                             </Box>
//                           )}
//                         </Box>
//                       </Box>
//                     </Box>
//                   ))}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     textAlign: "center",
//                   }}>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "gray", marginTop: -35 }}>
//                     No matching opportunities
//                   </Typography>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     textAlign: "center",
//                   }}>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "gray", marginTop: -35 }}>
//                     No matching opportunities
//                   </Typography>
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     textAlign: "center",
//                   }}></TableCell>
//                 <TableCell
//                   sx={{
//                     border: "1px solid gray",
//                     borderRight: "none",
//                     textAlign: "center",
//                   }}></TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Layout>
//   );
// }
import Layout from "../../components/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import { Column } from "../../components/opportunitypage/Column";
import { useState } from "react";

// Define a type for your card data
interface CardData {
  id: string;
  name: string;
  value: string;
  progress: number;
  date: string;
  columnId: string;
  comments: string[]; // Added to track which column the card belongs to
}

export default function Opportunities() {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: "1",
      name: "Bluth Company (Example Lead)",
      value: "$3,000",
      progress: 75,
      date: "9/2/2024",
      columnId: "demoCompleted",
      comments: [],
    },
    {
      id: "2",
      name: "Close Company (Example Lead)",
      value: "$1,500",
      progress: 50,
      date: "9/5/2024",
      columnId: "proposalSent",
      comments: [],
    },
    {
      id: "3",
      name: "Wayne Enterprises (Example Lead)",
      value: "$1,500",
      progress: 50,
      date: "9/5/2024",
      columnId: "contractSent",
      comments: [],
    },
    // Add more initial cards if needed
  ]);
  const deleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const moveCard = (id: string, targetColumn: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, columnId: targetColumn } : card
      )
    );
  };
  const addComment = (id: string, comment: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, comments: [...card.comments, comment] }
          : card
      )
    );
  };

  return (
    <Layout differentBg>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: -6,
          marginTop: -3,
          backgroundColor: "#f8f8f8",
          height: "100vh",
          width: "2000px",
        }}>
        <Box display="flex" padding={2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%", // Align vertically
                        right: "-26px",
                        width: "45px",
                        height: "45px", // Height of the rhombus
                        border: "1px solid grey", // Create the border outline
                        transform:
                          "translateY(-50%) rotate(-27deg) skewY(-33deg)", // Rotate to form the rhombus shape
                        borderTop: "none", // Make it half by removing the top part
                        borderLeft: "none",
                        zIndex: 3,
                      },
                    }}>
                    <Chip
                      label="DEMO COMPLETED"
                      color="default"
                      sx={{
                        backgroundColor: "#fccc0a",
                        color: "black",
                        marginLeft: 3,
                        fontWeight: "normal",
                      }}
                    />
                    <Typography sx={{ color: "gray", marginLeft: 4 }}>
                      0 OPPORTUNITIES
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%", // Align vertically
                        right: "-26px",
                        width: "45px",
                        height: "45px", // Height of the rhombus
                        border: "1px solid grey", // Create the border outline
                        transform:
                          "translateY(-50%) rotate(-27deg) skewY(-33deg)", // Rotate to form the rhombus shape
                        borderTop: "none", // Make it half by removing the top part
                        borderLeft: "none",
                        zIndex: 3,
                      },
                    }}>
                    <Chip
                      label="PROPOSAL SENT"
                      color="default"
                      sx={{
                        backgroundColor: "#fccc0a",
                        color: "black",
                        marginLeft: 3,
                        fontWeight: "normal",
                      }}
                    />
                    <Typography sx={{ color: "gray", marginLeft: 4 }}>
                      0 OPPORTUNITIES
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid gray" }}>
                    <Chip
                      label="CONTRACT SENT"
                      color="default"
                      sx={{
                        backgroundColor: "#fccc0a",
                        color: "black",
                        marginLeft: 3,
                        fontWeight: "normal",
                      }}
                    />
                    <Typography sx={{ color: "gray", marginLeft: 4 }}>
                      0 OPPORTUNITIES
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid gray" }}></TableCell>
                  <TableCell sx={{ borderRight: "none" }}></TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    backgroundColor: "#e4f2ff",
                  }}>
                  <TableCell
                    sx={{
                      borderLeft: "none",
                      borderRight: "1px solid grey",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}>
                    <Box display="flex">
                      <Typography
                        sx={{
                          color: "#595f65",
                          marginLeft: 3,
                          fontWeight: 350,
                        }}>
                        AUTHORIZED VALUE
                      </Typography>
                      <Divider sx={{ width: "40%", ml: 1, mb: 1, mr: 2 }} />
                      <Typography sx={{ color: "black" }}>$4000</Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      borderRight: "1px solid grey",
                    }}>
                    <Box display="flex">
                      <Typography
                        sx={{
                          color: "#595f65",
                          marginLeft: 3,
                          fontWeight: 350,
                        }}>
                        ANNUALIZED VALUE
                      </Typography>
                      <Divider sx={{ width: "40%", ml: 1, mb: 1, mr: 2 }} />
                      <Typography sx={{ color: "black" }}>$0</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      borderRight: "1px solid gray",
                    }}>
                    <Box display="flex">
                      <Typography
                        sx={{
                          color: "#595f65",
                          marginLeft: 3,
                          fontWeight: 350,
                        }}>
                        ANNUAZLIZED VALUE
                      </Typography>
                      <Divider sx={{ width: "40%", ml: 1, mb: 1, mr: 2 }} />
                      <Typography sx={{ color: "black" }}>$0</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderRight: "1px solid gray",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      borderRight: "none",
                    }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      width: "400px",
                      borderRight: "1px solid grey",
                      borderBottom: "none",
                    }}>
                    <Column
                      title=""
                      id="demoCompleted"
                      deleteCard={deleteCard}
                      moveCard={moveCard}
                      addComment={addComment}
                      cards={cards}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "400px",
                      borderRight: "1px solid grey",
                      borderBottom: "none",
                    }}>
                    <Column
                      title=""
                      id="proposalSent"
                      deleteCard={deleteCard}
                      moveCard={moveCard}
                      addComment={addComment}
                      cards={cards}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "400px",
                      borderRight: "1px solid gray",
                      borderBottom: "none",
                    }}>
                    <Column
                      title=""
                      id="contractSent"
                      deleteCard={deleteCard}
                      addComment={addComment}
                      moveCard={moveCard}
                      cards={cards}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "400px",
                      borderRight: "1px solid gray",
                      borderBottom: "none",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      width: "400px",
                      borderRight: "none",
                      borderBottom: "none",
                    }}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderRight: "1px solid grey",
                      height: "100px",
                      borderBottom: "none",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      borderRight: "1px solid grey",
                      borderBottom: "none",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      borderRight: "1px solid grey",
                      borderBottom: "none",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      borderRight: "1px solid grey",
                      borderBottom: "none",
                    }}></TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                    }}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
}
