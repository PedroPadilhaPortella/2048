import Grid from './Grid.js';
import Tile from './Tile.js';

const gameboard = document.getElementById("gameboard");

const grid = new Grid(gameboard);

grid.randomEmptyCell().tile = new Tile(gameboard);
grid.randomEmptyCell().tile = new Tile(gameboard);