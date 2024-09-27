// ClientPage.tsx
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  IconButton,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import DataTable from "../../components/IndividualClient/Table";
import SearchComponent from "../../components/IndividualClient/Search";
import CreateIcon from "@mui/icons-material/Create";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BasicDatePicker from "../../components/IndividualClient/GenericDate";
import { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MainLayout from "../../components/IndividualClient/Layout";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FlagIcon from "@mui/icons-material/Flag";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from "@mui/icons-material/Message";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

const ClientPage: FC = () => {
  const rows = [
    {
      channel: "Email",
      from: { name: "John Doe", avatar: "JD" },
      date: "2024-09-26",
      message: "Website created",
      status: "Preparation",
      dueDate: "",
      to: "Jane Smith",
    },
  ];
  const [state, setState] = useState<string>("new");
  const [priority, setPriority] = useState<string>("low");

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setState(event.target.value);
  };
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Perform search logic here, e.g., fetching data
  };
  const handlePriorityChange = (event: SelectChangeEvent<string>) => {
    setPriority(event.target.value);
  };
  // Define state with type annotations
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  // Function to handle adding a new note
  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes((prevNotes) => [...prevNotes, newNote.trim()]);
      setNewNote("");
    }
  };

  return (
    <MainLayout>
      {
        <Box sx={{ ml: -4 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={2}>
              <Paper sx={{ padding: 2 }}>
                <Box display="flex">
                  <CheckBoxOutlineBlankIcon
                    sx={{ color: "blue", mr: 2, mt: -0.5 }}
                  />
                  <Typography sx={{ fontWeight: 600 }}>
                    Brock Hudgens - Cr...
                  </Typography>
                </Box>
                <Link
                  to="/client-page"
                  style={{ textDecoration: "none", color: "blue" }}>
                  http://localhost:5173/Client
                </Link>
                <Box sx={{ ml: -1 }}>
                  <Typography>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <HomeIcon />
                    </IconButton>
                    Create new website
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <AccountCircleIcon />
                    </IconButton>
                    Contact Person
                  </Typography>
                  <Typography>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <LocalPhoneIcon />
                    </IconButton>
                    <Link
                      to="/client-page"
                      style={{ textDecoration: "none", color: "blue" }}>
                      0319-33333
                    </Link>
                  </Typography>

                  <Typography>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <FlagIcon />
                    </IconButton>
                    English
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <AlternateEmailIcon />
                    </IconButton>
                    Contact Email
                  </Typography>
                  <Button
                    sx={{
                      color: "#909bb1",
                      ml: -1,
                      mt: -1,
                      "&:hover": {
                        backgroundColor: "transparent", // No background color on hover
                      },
                    }}>
                    <IconButton sx={{ color: "#909bb1" }}>
                      <AddIcon />
                    </IconButton>
                    Show more
                  </Button>
                </Box>
                <Divider sx={{ width: "110%", ml: -1 }} />
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    color: "blue",
                    borderWidth: "2px", // Make the outline thicker (bold)
                    borderColor: "currentColor",
                  }}>
                  + Tag
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper sx={{ padding: 2, mb: 2 }}>
                <Box display="flex">
                  <Box display="flex" sx={{ flexGrow: 0.3 }}>
                    <Avatar sx={{ backgroundColor: "#eb5073" }}>BH</Avatar>
                    <Box sx={{ ml: 1, mt: -1 }}>
                      <BasicDatePicker label="Due Date" sx={{ width: "65%" }} />
                    </Box>
                    <Box sx={{ ml: -9 }}>
                      <Typography
                        sx={{
                          backgroundColor: "#eaebee",
                          padding: 1,
                          color: "#858b9b",
                          borderRadius: 2,
                          fontSize: "0.8rem",
                        }}>
                        1. Preparations
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 1, mt: 1 }} display="flex">
                      <AccessTimeIcon sx={{ color: "#858b9b" }} />
                      <Typography
                        sx={{
                          ml: 1,
                          mt: 0.3,
                          fontWeight: 600,
                          fontSize: "0.8rem",
                        }}>
                        00.00
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ ml: 23 }} display="flex">
                    <HomeIcon sx={{ color: "#ed809c", mr: 1, mt: 0.5 }} />
                    <Button
                      sx={{
                        color: "#2351e4",
                        mt: -2,
                      }}>
                      <IconButton sx={{ color: "#2351e4" }}>
                        <MoreHorizIcon />
                      </IconButton>
                      <Typography sx={{ ml: -1, fontSize: "0.8rem" }}>
                        Customer Portal
                      </Typography>
                    </Button>
                    <Button
                      sx={{
                        color: "#2351e4",
                        mt: -2,
                      }}>
                      <IconButton sx={{ color: "#2351e4" }}>
                        <MoreHorizIcon />
                      </IconButton>
                      <Typography sx={{ ml: -1, fontSize: "0.8rem" }}>
                        Actions
                      </Typography>
                    </Button>
                    <Box sx={{ mt: -1, ml: 5 }}>
                      <Box
                        sx={{
                          border: "1px solid #2351e4",
                          borderRadius: 2.5,
                        }}>
                        <Button
                          sx={{
                            color: "#2351e4",

                            borderRight: "1px solid #2351e4",
                            borderRadius: 0,
                          }}>
                          <IconButton sx={{ ml: -1, color: "#2351e4" }}>
                            <MessageIcon />
                          </IconButton>
                          <Typography sx={{ ml: -1, fontSize: "0.8rem" }}>
                            Wishes
                          </Typography>
                        </Button>
                        <Button
                          sx={{
                            color: "#2351e4",
                            borderRight: "1px solid #2351e4",
                            borderRadius: 0,
                          }}>
                          <IconButton sx={{ ml: -1, color: "#2351e4" }}>
                            <LinkIcon />
                          </IconButton>
                          <Typography sx={{ ml: -1, fontSize: "0.8rem" }}>
                            Invite
                          </Typography>
                        </Button>
                        <Button
                          sx={{
                            color: "#2351e4",
                            borderRight: "1px solid #2351e4",
                            borderRadius: 0,
                          }}>
                          <IconButton sx={{ ml: -1, color: "#2351e4" }}>
                            <EditIcon />
                          </IconButton>
                          <Typography
                            sx={{ ml: -1, mr: 1, fontSize: "0.8rem" }}>
                            Edit
                          </Typography>
                        </Button>
                        <Button
                          sx={{
                            color: "white",
                            backgroundColor: "#2351e4",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderRight: "none",
                          }}>
                          <Typography sx={{ ml: 1, fontSize: "0.8rem" }}>
                            Create
                          </Typography>

                          <IconButton sx={{ color: "white" }}>
                            <ArrowForwardIcon />
                          </IconButton>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
              <Paper sx={{ padding: 2 }}>
                <Box display="flex">
                  <Box display="flex" sx={{ flexGrow: 1 }}>
                    <TaskAltIcon sx={{ color: "#2351e4" }} />
                    <Typography
                      sx={{
                        ml: 1,
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        mt: -0.5,
                      }}>
                      To-dos
                    </Typography>
                  </Box>
                  <Box sx={{ mr: -13 }}>
                    <FormControl variant="outlined" sx={{ mr: 2 }}>
                      <InputLabel id="state-label">State</InputLabel>
                      <Select
                        labelId="state-label"
                        value={state}
                        onChange={handleStateChange}
                        label="State">
                        <MenuItem value="new">New</MenuItem>
                        <MenuItem value="inProgress">In Progress</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                      </Select>
                    </FormControl>
                    <BasicDatePicker
                      label="Due form"
                      sx={{ width: "20%", marginRight: 2 }}
                    />
                    <BasicDatePicker
                      label="Due untill"
                      sx={{ width: "20%", marginRight: 2 }}
                    />
                    <FormControl variant="outlined" sx={{ mr: 2 }}>
                      <InputLabel id="priority-label">Priority</InputLabel>
                      <Select
                        labelId="priority-label"
                        value={priority}
                        onChange={handlePriorityChange}
                        label="Priority">
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ borderRadius: 4 }}>
                      <IconButton sx={{ color: "white" }}>
                        <AddIcon />
                      </IconButton>
                      <Typography sx={{ ml: 1, fontSize: "0.8rem" }}>
                        Add
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Stack items vertically
                    alignItems: "center", // Center horizontally
                    justifyContent: "center", // Center vertically
                    height: "20vh", // Full viewport height for vertical centering
                  }}>
                  <TaskAltIcon sx={{ color: "#d6dce0", fontSize: 60 }} />{" "}
                  {/* Larger icon size */}
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontSize: "1.5rem", mt: 2 }}>
                    {" "}
                    {/* Larger text size */}
                    Add your first to-do
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 3 }}>
            <Grid container spacing={2}>
              {/* Left Side - 2 Boxes */}
              <Grid item xs={2}>
                <Paper sx={{ padding: 2, marginBottom: 2 }}>
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => setShowInput(!showInput)}>
                      <CreateIcon sx={{ color: "#2351e4", mr: 1 }} />
                    </IconButton>
                    <Typography variant="h5">Notes</Typography>
                  </Box>

                  <Typography sx={{ color: "gray", mb: 3 }}>
                    Click the icon to add your notes
                  </Typography>

                  {/* Conditionally render the TextField */}
                  {showInput && (
                    <Box display="flex" flexDirection="column" mb={2}>
                      <TextField
                        variant="outlined"
                        placeholder="Type your note here"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        sx={{ marginBottom: 1 }}
                      />
                      <Button variant="contained" onClick={handleAddNote}>
                        Add Note
                      </Button>
                    </Box>
                  )}

                  <Box>
                    {notes.length > 0 ? (
                      notes.map((note, index) => (
                        <Typography key={index} sx={{ color: "black", mb: 1 }}>
                          • {note}
                        </Typography>
                      ))
                    ) : (
                      <Typography sx={{ color: "gray" }}></Typography>
                    )}
                  </Box>
                </Paper>
                <Paper sx={{ padding: 2 }}>
                  <Box display="flex">
                    {" "}
                    <StackedLineChartIcon sx={{ color: "#2351e4", mr: 3 }} />
                    <Typography variant="h5">Statistics</Typography>
                  </Box>
                  <Typography sx={{ color: "gray", mb: 3 }}>
                    Publish your website to enable statistics
                  </Typography>
                </Paper>
              </Grid>

              {/* Right Side - 1 Box */}
              <Grid item xs={10}>
                <Paper sx={{ padding: 2 }}>
                  <Box>
                    <Box display="flex" sx={{ mb: 2 }}>
                      <Box display="flex" sx={{ flexGrow: 1, mt: 1 }}>
                        <MailOutlineIcon sx={{ color: "#2351e4", mr: 2 }} />
                        <Typography variant="h5" sx={{ mt: -0.5 }}>
                          Messages
                        </Typography>
                      </Box>
                      <Box display="flex" sx={{ mr: -8 }}>
                        <SearchComponent onSearch={handleSearch} />
                        <BasicDatePicker
                          label="Due from"
                          sx={{ width: "20%", marginLeft: -6 }}
                        />
                        <BasicDatePicker
                          label="Date to"
                          sx={{ width: "20%", marginLeft: 1, marginRight: 1 }}
                        />
                        <FormControl variant="outlined" sx={{ mr: 2 }}>
                          <InputLabel id="priority-label">Priority</InputLabel>
                          <Select
                            labelId="priority-label"
                            value={priority}
                            onChange={handlePriorityChange}
                            label="Priority">
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl variant="outlined" sx={{ mr: 2 }}>
                          <InputLabel id="priority-label">Priority</InputLabel>
                          <Select
                            labelId="priority-label"
                            value={priority}
                            onChange={handlePriorityChange}
                            label="Priority">
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                          </Select>
                        </FormControl>
                        <Button variant="contained" sx={{ borderRadius: 4 }}>
                          <IconButton sx={{ color: "white" }}>
                            <AddIcon />
                          </IconButton>
                          <Typography sx={{ ml: 1, fontSize: "0.8rem" }}>
                            New
                          </Typography>
                        </Button>
                      </Box>
                    </Box>

                    <DataTable rows={rows} />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      }
    </MainLayout>
  );
};

export default ClientPage;
