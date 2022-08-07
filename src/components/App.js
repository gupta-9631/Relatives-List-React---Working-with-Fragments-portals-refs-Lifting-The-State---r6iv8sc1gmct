import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RelativesList: [
        {
          Name: "Dhanu",
        },
        {
          Name: "Mama",
        },
        {
          Name: "Ravi",
        },
        {
          Name: "Rohit",
        },
        {
          Name: "Mausa",
        },
        {
          Name: "Maousi",
        },
        {
          Name: "Bua",
        },
        {
          Name: "Vikash",
        },
        {
          Name: "Raushan",
        },
      ],
    };
  }

  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.state.RelativesList.map((item, index) => {
            return <li key={"relativeListItem" + index + 1}>{item.Name}</li>;
          })}
        </ol>
      </div>
    );
  }
}


export default App;
