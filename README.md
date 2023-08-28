# ellerjs
![tests](https://github.com/ihorbeliasnyk/ellerjs/actions/workflows/run_tests.yml/badge.svg) ![npm](https://img.shields.io/npm/v/ellerjs)

A JavaScript implementation of Eller's maze generation algoritm. This algorithm creates mazes that have a path between any two cells.

### Rendered example

![maze.png](<https://i.imgur.com/wfdSA8K.png>)

## Installation

```bash
npm i ellerjs
```

## Usage

```javascript
const eller = require('ellerjs');
const maze = eller(15, 15);
```

Maze is two-dimensional array representing rows and cells. Cell structure:

```typescript
/**
 * A cell of the maze with a wall in four perpendicular directions
 */
interface Cell {
  /**
   * The top wall of the cell. `true` if there is a wall, `false` if not
   * */
  top: boolean;
  /**
   * The bottom wall of the cell. `true` if there is a wall, `false` if not
   */
  bottom: boolean;
  /**
   * The left wall of the cell. `true` if there is a wall, `false` if not
   */
  left: boolean;
  /**
   * The right wall of the cell. `true` if there is a wall, `false` if not
   */
  right: boolean;
  /**
   * The ID of the internal set. Used for the maze generation.
   */
  _set: number;
}
```
