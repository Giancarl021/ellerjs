// Type definitions for ellerjs
// Definitions by: ihorb
export = eller;

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

/**
 * A Line of the maze, an list of cells
 */
type Line = Array<Cell>;
/**
 * A complete maze, an matrix of cells
 */
type Maze = Array<Line>;

/**
 * A JavaScript implementation of Eller's maze generation algoritm.
 * This algorithm creates mazes that have a path between any two cells.
 * @param width The width of the maze
 * @param height The height of the maze
 * @returns A `Maze` object, containing cells in a matrix structure,
 * with `width` x `height` size.
 */
declare function eller(width: number, height: number): Maze;
