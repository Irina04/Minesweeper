
var imageLose = document.getElementById("1");
var imageMine = document.getElementById("2");
var flag = 0;
var max_line = 0;
var max_column = 0;
let game = document.getElementById("gameBoard");
let gameBoard ="";
let board = [];
window.onload = gameBoardF();

function playAgain() {
    //console.log(imageLose.src);
    if(imageLose.src == 'file:///C:/Users/AVION/Documents/Javascript/m/lost.jpg') {
        imageLose.src = 'file:///C:/Users/AVION/Documents/Javascript/m/win.jpg';
        location.reload();
        return;
    }
    alert("nu merge");
    return;
}
function mineOrFlag() {
    if(imageMine.src == 'file:///C:/Users/AVION/Documents/Javascript/m/mine.jpg') {
        imageMine.src = 'file:///C:/Users/AVION/Documents/Javascript/m/flag.jpg';
        return;
    }
    if(imageMine.src == 'file:///C:/Users/AVION/Documents/Javascript/m/flag.jpg') {
        imageMine.src = 'file:///C:/Users/AVION/Documents/Javascript/m/mine.jpg';
alert("ura");
        return;
    }
}
function gameBoardF() {   
    difficulty(0,0);
}

function difficulty(lines,columns){
    if (lines == 8) {
        flag = 10;
        max_line = 8;
        max_column = 10;
    } else if (lines == 14) {
        flag = 40;
        max_line = 14;
        max_column = 18;
    } else if (lines == 19) {
        flag = 99;
        max_line = 19;
        max_column = 24;
    }   
    generateBoard(lines,columns);
    gameBoard = "";
    
    for (let i = 0; i < lines; ++i) {
        gameBoard += '<div class = "row" >';
        for (let j = 0; j < columns; ++j) {
            
            gameBoard += '<div class = "col m"   onclick = "openCell('+ i + ','+ j +')" id = '+ i + ''+ j +'>'+ '&nbsp'+ '</div>';       
        }
        gameBoard += '</div>';

    }      
    game.innerHTML = gameBoard;
    console.log(board);
}

function openCell(line, column) {
    
    if (imageMine.src == 'file:///C:/Users/AVION/Documents/Javascript/m/flag.jpg') {
        document.getElementById(line + '' + column).style.backgroundImage = "url('flag.jpg')";
        console.log(imageMine.src);
    } else {
    if (board[line][column] == 9) {
        document.getElementById(line + '' + column).style.borderColor = "darkgray";
        document.getElementById(line + '' + column).style.backgroundImage = "url('mine1.png')";
        for (let i = 0; i < max_line; ++i) {
            for (let j = 0; j < max_column; ++j) {  
                if (board[i][j] == 9) { 
                    document.getElementById(i + '' + j).style.borderColor = "darkgray";
                    document.getElementById(i + '' + j).style.backgroundImage = "url('mine1.png')";
                }
            }
        }
        imageLose.src = 'file:///C:/Users/AVION/Documents/Javascript/m/lost.jpg';
    } else if (board[line][column] > 0) {;
        show(line, column);
        //console.log(board[line][column]);
    } else if (board[line][column] == 0) {
        checkNeighbors(line,column);
        //console.log(board[line][column]);
    }
}
}

function checkNeighbors (line, column) {
    show(line,column);
     board[line][column] = -1;    
     if (isNeighbor(line - 1, column - 1) && board[line - 1][column - 1] == 0) {
        show(line - 1, column - 1); 
        board[line - 1][column - 1] = -1;
        checkNeighbors(line - 1, column - 1);
    } else if (isNeighbor(line - 1, column - 1) && board[line - 1][column - 1] > 0){
        show(line - 1, column - 1);
    }   
     if (isNeighbor(line - 1, column) && board[line - 1][column] == 0) {
        show(line - 1, column);
        board[line - 1][column] = -1;
        checkNeighbors(line - 1, column);
     } else if (isNeighbor(line - 1, column) && board[line - 1][column] > 0) {
        show(line - 1, column);
        board[line - 1][column] = -1;
     }
     if (isNeighbor(line - 1, column + 1) && board[line - 1][column + 1] == 0) {
        show(line - 1, column + 1);
        board[line - 1][column + 1] = -1;
        checkNeighbors(line - 1, column + 1);
     } else if (isNeighbor(line - 1, column + 1) && board[line - 1][column + 1] > 0) {
        show(line - 1, column + 1);
        board[line - 1][column + 1] = -1;
     }
     if (isNeighbor(line, column - 1) && board[line][column - 1] == 0) {
        show(line, column - 1);
        board[line][column - 1] = -1;
        checkNeighbors(line, column - 1);
     } else if (isNeighbor(line, column - 1) && board[line][column - 1] > 0) {
        show(line, column - 1);
        board[line][column - 1] = -1;
     }
     if (isNeighbor(line, column + 1) && board[line][column + 1] == 0) {
        show(line, column + 1);
        board[line][column + 1] = -1;
        checkNeighbors(line, column + 1);
     } else if (isNeighbor(line, column + 1) && board[line][column + 1] > 0) {
        show(line, column + 1);
        board[line][column + 1] = -1;
     }
     if (isNeighbor(line + 1, column - 1) && board[line + 1][column - 1] == 0) {
        show(line + 1, column - 1);
        board[line + 1][column - 1] = -1;
        checkNeighbors(line + 1, column - 1);
     } else if (isNeighbor(line + 1, column - 1) && board[line + 1][column - 1] > 0) {
        show(line + 1, column - 1);
        board[line + 1][column - 1] = -1;
     }
     if (isNeighbor(line + 1, column) && board[line + 1][column] == 0) {
        show(line + 1,column);
        board[line + 1][column] = -1;
        checkNeighbors(line + 1, column);
     } else if (isNeighbor(line + 1, column) && board[line + 1][column] > 0) {
        show(line + 1,column);
        board[line + 1][column] = -1;
     }
     if (isNeighbor(line + 1, column + 1) && board[line + 1][column + 1] == 0) {
        show(line + 1, column + 1);
        board[line + 1][column + 1] = -1;
        checkNeighbors(line + 1,column + 1);
     } else if (isNeighbor(line + 1, column + 1) && board[line + 1][column + 1] > 0) {
        show(line + 1, column + 1);
        board[line + 1][column + 1] = -1;
     }
}
function show(line, column) {
    console.log("line-function:" + line);
    console.log("column-function:" + column);
    if (board[line][column] > 0) {
        document.getElementById(line + '' + column).style.backgroundColor = "lightgray";
        document.getElementById(line + '' + column).style.borderColor = "darkgray";
        document.getElementById(line + '' + column).innerHTML = board[line][column];
        console.log("line->0:" + line);
        console.log("column- >0:" + column);
    } else if (board[line][column] == 0) {
        document.getElementById(line + '' + column).style.backgroundColor = "lightgray";
        console.log(document.getElementById(line + '' + column));
        document.getElementById(line + '' + column).style.borderColor = "darkgray";
        document.getElementById(line + '' + column).innerHTML = "";
        console.log("line - =0:" + line);
        console.log("column - = 0:" + column);
    }
}
function generateBoard (lines, columns) {
    for (let i = 0; i < lines; ++i) {
        board[i] = []; 
        for (let j = 0; j < columns; ++j) {
            board[i][j] = 0;
        }
    }
    while(flag!= 0){
    board[Math.floor(Math.random()*lines)][Math.floor(Math.random()*columns)] = 9;
    --flag;
    }
    for (let i = 0; i < lines; ++i) {
        for (let j = 0; j < columns; ++j) { 
            if (board[i][j] != 9) {
                board[i][j] = countMines(i, j, lines, columns);
            }
        }
    }
}

function countMines(i, j, lines, columns) {
    let counterMines = 0;
    if (i > 0 && j > 0 && i < lines - 1 && j < columns - 1) {
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j + 1] == 9) {
            ++counterMines;
        }
    } else if (i == 0 && j == 0) {
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j + 1] == 9) {
            ++counterMines;
        }
    } else if (i == 0 && j == columns - 1) {
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
    } else if (i == lines - 1 && j == 0) {
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
    } else if (i == lines - 1 && j == columns - 1) {
        if (board[i - 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
    } else if (i == 0) {
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j + 1] == 9) {
            ++counterMines;
        }
    } else if (j == 0) {
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j + 1] == 9) {
            ++counterMines;
        } 
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
    } else if (j == columns - 1) {
        if (board[i - 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i + 1][j] == 9) {
            ++counterMines;
        }
        if (board[i + 1, j - 1] == 9) {
            ++counterMines;
        }
    } else if (i == lines - 1) {
        if (board[i][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j - 1] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j] == 9) {
            ++counterMines;
        }
        if (board[i - 1][j + 1] == 9) {
            ++counterMines;
        }
        if (board[i][j + 1] == 9) {
            ++counterMines;
        }
    }
    return counterMines;
}

function isNeighbor(line, column) {
    return line >= 0 && line < max_line && column >= 0 && column < max_column;
}
