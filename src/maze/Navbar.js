import React from "react";
import "./styles.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Home, GitHub, Instagram } from "@material-ui/icons";
import styled from "styled-components";

export default function Nav(props) {
  const fabTheme = createMuiTheme({
    overrides: {
      MuiFab: {
        primary: {
          backgroundColor: "#00a650"
        }
      }
    }
  });

  const useStyles = makeStyles(theme => ({
    appBar: {
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      boxShadow: "none",
      top: "auto",
      bottom: 0
    },
    title: {
      flexGrow: 1,
      color: ""
    },
    button: {
      background: "rgba(0, 0, 0, 0.7)",
      marginEnd: "20px",
      borderRadius: "10px"
    },
    fab: {
      margin: theme.spacing(1),
      background: "rgba(0, 0, 0, 0.7)"
    }
  }));

  //console.log(items);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
              onClick={() =>{
                window.location = '/';
            }}
            >
              <Home />
            </Fab>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <GitHub />
            </Fab>
            <Button
              id="button"
              onClick={props.refresh}
              color="inherit"
              className={classes.button}
            >
              Reset
            </Button>
            <br></br>
            <Button
              id="button"
              onClick={props.search}
              color="inherit"
              className={classes.button}
            >
              Search
            </Button>
        
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
