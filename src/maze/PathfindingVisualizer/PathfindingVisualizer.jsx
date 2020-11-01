import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import Navbar from "../Navbar"

import './PathfindingVisualizer.css';

const START_NODE_ROW = Math.floor(Math.random() * Math.floor(20));
const START_NODE_COL = Math.floor(Math.random() * Math.floor(50));
const FINISH_NODE_ROW = Math.floor(Math.random() * Math.floor(20));
const FINISH_NODE_COL = Math.floor(Math.random() * Math.floor(50));

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      START_NODE_ROW: Math.floor(Math.random() * Math.floor(20)),
      START_NODE_COL: Math.floor(Math.random() * Math.floor(50)),
      FINISH_NODE_ROW: Math.floor(Math.random() * Math.floor(20)),
      FINISH_NODE_COL: Math.floor(Math.random() * Math.floor(50)),

    };
  }

  componentDidMount() {
    const grid = this.getInitialGrid();
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
    const finishNode = grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  refreshPage() {
    window.location.reload(false);
  }

  refreshGrid(){
    const grid = this.getInitialGrid();
    this.setState({grid});
    const START_NODE_ROW = Math.floor(Math.random() * Math.floor(20));
    const START_NODE_COL = Math.floor(Math.random() * Math.floor(50));
    const FINISH_NODE_ROW = Math.floor(Math.random() * Math.floor(20));
    const FINISH_NODE_COL = Math.floor(Math.random() * Math.floor(50));
    this.setState({START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL});
    
  }

  getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(this.createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };
  
  createNode = (col, row) => {
    console.log(this.state.grid)
    return {
      col,
      row,
      isStart: row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
      isFinish: row === this.state.FINISH_NODE_ROW && col === this.state.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };
  
  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <>
       
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Navbar search={() => this.visualizeDijkstra()} refresh={() => this.refreshGrid()} />
      </>
    );
  }
}



const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

