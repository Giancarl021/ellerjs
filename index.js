const Maze = require('./src/maze');

function eller(width, height, cleanup = true) {
    if (typeof width !== 'number' || width <= 1)
    throw new Error('Width should be a integer higher than 1');
    if (typeof height !== 'number' || height <= 1)
    throw new Error('Height should be a integer higher than 1');

    const maze = Maze.initialize(width);
    const lastLineIndex = height - 1;

    for (let y = 1; y < height; y++) {
        const previousLine = maze[y - 1];
        const currentLine = Maze.createLine(previousLine);

        if (y < lastLineIndex) Maze.addBottomWalls(currentLine);
        else Maze.finalize(currentLine);

        maze.push(currentLine);
    }

    if (cleanup) Maze.cleanup(maze);

    return maze;
};

module.exports = eller;
