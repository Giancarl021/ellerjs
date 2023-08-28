const  Random = require('./random');
const Indexes = require('./indexes');

function initialize(width) {
    const line = [];

    for (let x = 0; x < width; x++) {
        const cell = {
            top: true,
            bottom: false,
            left: x === 0,
            right: x === width - 1,
            _set: x + 1,
        };

        line.push(cell);
    }

    _addLeftAndRightWalls(line);
    addBottomWalls(line);

    return [line];
}

function createLine(previousLine) {
    const currentLine = previousLine.map(cell => {
        const newCell = { _set: cell._set };

        if (cell.bottom) {
            newCell._set = 0;
        }

        newCell.top = cell.bottom;
        newCell.right = false;
        newCell.left = false;
        newCell.bottom = false;

        return newCell;
    });

    _addSets(currentLine);
    _addLeftAndRightWalls(currentLine);

    return currentLine;
}

function finalize(lastLine) {
    const lastCellIndex = lastLine.length - 1;

    for (let i = 0; i < lastLine.length; i++) {
        const cell = lastLine[i];
        cell.bottom = true;

        if (i === lastCellIndex) continue;

        const nextCell = lastLine[i + 1];

        if (cell._set === nextCell._set) continue;

        cell.right = false;
        nextCell.left = false;
    } 
}

function _sets(line) {
    return new Set(line.map(cell => cell._set));
}

function _addLeftAndRightWalls(line) {
    for (let i = 0; i < line.length; i++) {
        const cell = line[i];
        const isLastCell = i === line.length - 1;

        if (isLastCell) {
            cell.right = true;
            continue;
        }

        const nextCell = line[i + 1];

        if (cell._set === nextCell._set) {
            cell.right = true;
            continue;
        }

        const blockRight = Random.bool();
        cell.right = blockRight;
        nextCell.left = blockRight;

        if (!blockRight) {
            nextCell._set = cell._set;
        }
    }

    line[0].left = true;
}

function addBottomWalls(line) {
    const sets = _sets(line);

    for (let set of sets) {
        const cells = line.filter(cell => cell._set === set);

        let setHasBottomExit = false;

        cells.forEach(cell => {
            const hasBottomWall = Random.bool();
            if (!setHasBottomExit && hasBottomWall) {
                setHasBottomExit = true;
            }

            cell.bottom = hasBottomWall;
        });

        if (!setHasBottomExit) {
            const index = Random.int(0, cells.length - 1);
            cells[index].bottom = false;
        }
    }
}

function _addSets(line) {
    const sets = _sets(line);
    sets.delete(0);

    for (const cell of line) {
        if (cell._set !== 0) continue;

        const newSet = Indexes.minimumAvailable([...sets], 1);
        cell._set = newSet;

        sets.add(newSet);
    }
};

module.exports = {
    initialize,
    createLine,
    finalize,
    addBottomWalls
};
