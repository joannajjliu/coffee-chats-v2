import React, { Component } from "react";

class DataParser extends Component {
  constructor(props) {
    // Call super class
    super(props);

    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    // Your parse code, but not seperated in a function
    var csvFilePath = "./3people.csv";
    console.log(`csvFilePath`, csvFilePath);
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      // Here this is also available. So we can call our custom class method
      complete: function (results) {
        console.log("Finished:", results.data);
      },
    });
  }

  updateData(result) {
    console.log(`papaparse result:`, result);
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
  }

  render() {
    // Your render function
    return <div>{this.state.data}</div>;
  }
}

export default DataParser;
