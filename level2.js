var rows = 3;
var columns = 6;

var currTile;
var otherTile;
let c=[];
var turns = 0;
let b=1;
window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>s
            let tile = document.createElement("img");
            if(b<10){
                tile.src = "./level2/blank0"+b+".jpeg";
                
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
            }
            else{
                tile.src = "./level2/blank"+b+".jpeg";
                                
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
            }
            b++;

          
        }
    }

            
   
    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        if(i<10){
        pieces.push("0"+i.toString()); //put "1" to "25" into the array (puzzle images names)
        }
        else{
            pieces.push(i.toString());
        }
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }
    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        if(i<10){
            tile.src = "./level2/" + pieces[i] + ".jpeg";
                    
        
        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
        }
        else{
            tile.src = "./level2/" + pieces[i] + ".jpeg";
                    //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
        }
        
    }


    }


//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}
function dragEnd() {

    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
   
    
    let a=currImg.toString().slice(-7);
    let b=otherImg.toString().slice(-7);
    if(a!=b){
        var audio=new Audio("./images/wrong.mpeg");
        audio.play();
        return false;
    }
    else{
        currTile.src = otherImg;
        otherTile.src = currImg;
        console.log(a);
        c="./level2/" + a.slice(0,2) + ".mpeg";
        console.log(c);
        var audio=new Audio(c);
        audio.play();
        turns += 1;
    }
    if(turns==18){
        window.location.href='./congrats/congrats2.html';
    }
}
