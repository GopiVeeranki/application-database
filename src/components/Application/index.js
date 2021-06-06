import React, { Fragment } from "react";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Form from "./Form";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  products,
  modules,
  category,
  onSelect,
  editMode,
  module,
  module: {
    id,
    title = "Welcome!!",
    description = "Please select module from left on the list!!"
  },
  onDelete,
  onSelectEdit,
  onEdit
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {modules.map(([group, modules]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {modules.map(({ id, title }) => (
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        {editMode ? (
          <Form products={products} onSubmit={onEdit} module={module}></Form>
        ) : (
          <Fragment>
            <Typography variant="h3" style={{ textTransform: "capitalize" }}>
              {title}
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
);
