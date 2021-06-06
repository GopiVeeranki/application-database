import React, { Component } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core/";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { module } = this.props;
      return module
        ? module
        : {
            title: "",
            description: "",
            module: ""
          };
    }

    componentWillReceiveProps({ module }) {
      this.setState({
        ...module
      });
    }

    handleChange = (name) => ({ target: { value } }) =>
      this.setState({
        [name]: value
      });

    handleSubmit = () => {
      // TODO: validate form

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
        ...this.state
      });

      this.setState(this.getInitState());
    };

    render() {
      const { title, description, products } = this.state,
        { classes, module, products: categories } = this.props;
      return (
        <form>
          <TextField
            required
            id="name"
            label="Title"
            value={title}
            margin="normal"
            onChange={this.handleChange("title")}
            className={classes.FormControl}
          />

          <br />

          <FormControl fullWidth className={classes.FormControl}>
            <InputLabel id="product">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={products}
              label="Product"
              onChange={this.handleChange("products")}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            id="name"
            label="Description"
            value={description}
            margin="normal"
            onChange={this.handleChange("description")}
            defaultValue="Hello World"
            className={classes.FormControl}
          />
          <br />
          <Button color="blue" variant="raised" onClick={this.handleSubmit}>
            {module ? "Edit" : "Create"}
          </Button>
        </form>
      );
    }
  }
);
