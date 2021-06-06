import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Application/Form";
import { products } from "../../store";

export default class extends Component {
  state = {
    open: false,
    module: {
      title: "",
      description: "",
      module: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = (module) => {
    this.handleToggle();
    this.props.onCreate(module);
  };

  render() {
    const { open } = this.state,
      { products } = this.props;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <AddIcon></AddIcon>
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Module</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out the form</DialogContentText>
            <Form products={products} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
