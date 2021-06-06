import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import Dialog from "../Application/Dialog";

export default ({ products, onModuleCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Application Database
      </Typography>
      <Dialog products={products} onCreate={onModuleCreate} />
    </Toolbar>
  </AppBar>
);
