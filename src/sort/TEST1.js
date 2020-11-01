import React, { Component } from "react";
import Nav from "./Navbar.js";
import "./style1.css";
for (var a = [], i = 0; i < 360; ++i) a[i] = i;

function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

var hues = shuffle(a);
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      colors: hues
    };
  }

  componentDidMount() {
    const list = this.state.list.slice();
    this.setState({ list });
    for (var j = 0; j < 100; j++) {
      list.push(
        <div
          style={{
            height: "0.77vh",
            backgroundColor: "hsl(" + hues[j] + ", 60%, 50%)",
            color: "hsl(" + hues[j] + ", 50%, 50%)",
            transition: "transform 50ms ease-out, opacity 30ms 10ms linear"
          }}
          id={hues[j]}
        />
      );
    }
    this.setState({ list });
    // console.log("helloz");
  }

  resetArray = () => {
    for (var a = [], i = 0; i < 360; ++i) a[i] = i;
    
    function shuffle(array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    }

    //var hues = shuffle(a);
    this.setState({ colors: shuffle(a) });
    const list = [];
    this.setState({ list });
    for (var j = 0; j < 100; j++) {
      list.push(
        <div
          style={{
            height: "0.9vh",
            backgroundColor: "hsl(" + this.state.colors[j] + ", 60%, 50%)",
            color: "hsl(" + this.state.colors[j] + ", 50%, 50%)"
          }}
          id={this.state.colors[j]}
        />
      );
    }
    this.setState({ list });
    console.log("helloz");
  };

  testClick = () => {
    console.log("CLICKED");
  };

  insertionSort = inputArr => {
    //console.log(inputArr)
    console.log(inputArr[0].props.id);
    inputArr.sort((a, b) => (a.props.id > b.props.id ? 1 : -1));

    return inputArr.sort();
  };

  callInsertSort = () => {
    var list = this.state.list.slice();
    var sortedList = this.insertionSort(list);
    this.setState({ list: sortedList });
  };

  swapNumbers = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    this.setState({ list: array });
  };

  bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j - 1].props.id > array[j].props.id) {
          this.swapNumbers(array, j - 1, j);
        }
      }
    }
  };

  callBubbleSort = () => {
    //var list = this.state.list.slice();
    this.sort();
    this.sort();
    //var sortedList = this.bubbleSort(list);
    //this.loopWithCallback(this.functionToRepeat, 1, 5);
    console.log("tick");
  };
  functionToRepeat = () => {
    console.log("tick");
  };

  loopWithCallback = (callback, i, limit) => {
    if (i > limit) return;

    setTimeout(() => {
      callback(this.loopWithCallback(callback, i + 1, limit));
    }, 1000);
  };

  async sort() {
    var swapped;
    var array = this.state.list.slice();

    do {
      swapped = false;
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i].props.id > array[i + 1].props.id) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          this.setState({ list: array });
          //console.log(array);
          await this.sleep(0.1);
          swapped = true;
        }
      }
    } while (swapped);
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  render() {
    return (
      <div>
        {this.state.list}
        <Nav
          reset={this.resetArray}
          sort={this.callInsertSort}
          bubble={this.callBubbleSort}
        />
      </div>
    );
  }
}
