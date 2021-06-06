import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default ({ products, category, onSelect }) => {
  const index = category
    ? products.findIndex((group) => group === category) + 1
    : 0;

  const onIndexChange = (c, index) => {
    onSelect(index === 0 ? "" : products[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All" />

        {products.map((group) => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
