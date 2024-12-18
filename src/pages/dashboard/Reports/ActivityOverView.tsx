import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardMedia,
  ListItem,
  List,
  ListItemText,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Layout from "../../../components/Layout";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
const ActivityOverView: React.FC = () => {
  // State to manage cards
  const [cards, setCards] = useState<number[]>([]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Function to add a new card
  const addCard = () => {
    setCards([...cards, cards.length + 1]);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          marginTop: 4,
          marginLeft: 4,
        }}>
        {/* Added cards container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            maxWidth: "calc(100% - 320px)", // Ensure space for leaderboard card
            overflow: "auto", // Ensure cards can be scrolled if needed
          }}>
          <Card sx={{ width: 200, height: 200 }}>
            <CardContent>
              <Typography
                align="left"
                sx={{ color: "#3781b8", fontSize: "2rem" }}>
                0.5$
              </Typography>
              <Box display="flex">
                <Typography sx={{ fontWeight: 600 }}>Inbound Leads</Typography>
                <ArrowDropDownIcon />
              </Box>

              <Typography sx={{ fontWeight: 400, color: "grey" }}>
                WON
              </Typography>
              {/* Add card content here */}
            </CardContent>
          </Card>
          {cards.map((card, index) => (
            <Card key={index} sx={{ width: 200, height: 200 }}>
              <CardContent>
                <Typography
                  align="left"
                  sx={{ color: "#3781b8", fontSize: "2rem" }}>
                  {card}s
                </Typography>
                <Box display="flex">
                  <Typography sx={{ fontWeight: 600 }}>
                    Created Leads
                  </Typography>
                  <ArrowDropDownIcon />
                </Box>

                <Typography sx={{ fontWeight: 400, color: "grey" }}>
                  WON
                </Typography>
                {/* Add card content here */}
              </CardContent>
            </Card>
          ))}

          {/* Add Card button */}
          <Card
            sx={{
              width: 200,
              height: 200,
              border: "2px dotted gray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={addCard}>
            <CardContent>
              <Box display="flex">
                <AddIcon sx={{ mt: 0.2 }} />
                <Typography align="center" variant="h6" color="textSecondary">
                  Add a tile
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Leaderboard card */}
        <Box sx={{ width: 300, marginLeft: "auto" }}>
          <Card sx={{ height: "auto" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Leaderboard
              </Typography>
              <Button
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ marginBottom: 2, color: "black", ml: -1 }}>
                Opportunities
                <ArrowDropDownRoundedIcon />
              </Button>
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "grey",
                  mr: 4,
                  mt: -3,
                  fontSize: "0.8rem",
                }}>
                WON
              </Typography>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Opportunity 1</MenuItem>
                <MenuItem onClick={handleClose}>Opportunity 2</MenuItem>
                <MenuItem onClick={handleClose}>Opportunity 3</MenuItem>
              </Menu>

              {/* Partial Divider */}
              <Divider
                sx={{
                  backgroundColor: "black",
                  width: "150%",
                  mb: 2,
                  ml: -10,
                }}
              />

              {/* Image and Text */}
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Placeholder Image"
                sx={{ marginBottom: 2 }}
              />
              <Typography variant="body1" gutterBottom>
                Some random text goes here to describe the content or provide
                additional information.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Bullet Point 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bullet Point 2" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default ActivityOverView;
