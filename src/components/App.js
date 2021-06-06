import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Application from "./Application/";
import { products, modules } from "../store.js";

//muscles = products
//excercises = modules
//

export default class extends Component {
  state = {
    modules,
    module: {}
  };

  getModulesByProducts() {
    const initialModules = products.reduce(
      (modules, category) => ({
        ...modules,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.modules.reduce((modules, module) => {
        const { products } = module;

        modules[products] = [...modules[products], module];

        return modules;
      }, initialModules)
    );
  }

  handleCategorySelect = (category) =>
    this.setState({
      category
    });

  handleModuleSelect = (id) =>
    this.setState(({ modules }) => ({
      module: modules.find((mod) => mod.id === id),
      editMode: false
    }));

  handleModuleCreate = (module) =>
    this.setState(({ modules }) => ({
      modules: [...modules, module]
    }));

  handleModuleDelete = (id) =>
    this.setState(({ modules }) => ({
      modules: modules.filter((ex) => ex.id !== id),
      editMode: false,
      module: {}
    }));

  handleModuleSelectEdit = (id) =>
    this.setState(({ modules }) => ({
      module: modules.find((mod) => mod.id === id),
      editMode: true
    }));

  handleModuleEdit = (module) =>
    this.setState(({ modules }) => ({
      modules: [...modules.filter((mod) => mod.id !== module.id), module],
      module
    }));

  render() {
    const modules = this.getModulesByProducts(),
      { category, module, editMode } = this.state;
    return (
      <Fragment>
        <Header products={products} onModuleCreate={this.handleModuleCreate} />
        <Application
          module={module}
          modules={modules}
          category={category}
          products={products}
          editMode={editMode}
          onSelect={this.handleModuleSelect}
          onDelete={this.handleModuleDelete}
          onSelectEdit={this.handleModuleSelectEdit}
          onEdit={this.handleModuleEdit}
        />
        <Footer
          category={category}
          products={products}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
