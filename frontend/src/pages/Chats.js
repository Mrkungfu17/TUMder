import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import { chats } from "../data";

export default function Chats() {
  return (
    <Grid container alignItems="center" direction="column">
      <Typography sx={{ color: "#3070B3" }} variant="h4">
        Chats
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {chats.map((chat) => (
          <ListItem
            divider
            key={chat.display}
            component={Link}
            to="/chattest.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemAvatar>
              <Avatar
                src={chat.image}
                sx={{ width: 60, height: 60, marginRight: 3 }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                border: "none",
                outline: "none",
                textDecoration: "none",
                color: "#3070B3",
              }}
              primary={chat.name}
              secondary={chat.display}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
