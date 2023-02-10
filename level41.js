var rows = 2;
var columns = 4;

var currTile;
var otherTile;
let c=[];
var turns = 0;
let b=1;
window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            if(b<10){
                tile.src = "./images/blank0"+b+".jpg";
                
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
                tile.src = "./images/blank"+b+".jpg";
                                
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
            tile.src = "./level4/" + pieces[i] + ".jpeg";
                    
        
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
            tile.src = "./level4/" + pieces[i] + ".jpeg";
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
   
    
    let a=currImg.toString().slice(-7,-5);
    let b=otherImg.toString().slice(-6,-4);
    console.log(a);
    console.log(b);
    if(a!=b){
        var audio=new Audio("./images/wrong.mpeg");
        audio.play();
        return false;
    }
    else{
        currTile.src = otherImg;
        otherTile.src = currImg;
        turns += 1;
    }
    if(turns==12){
        window.location.href='./congrats/index.html';
    }
}

function next(){
    var img=document.getElementById('image');
    var s=img.src.slice(-6,-4);
    if(s<8){
        img.src="./level4/0"+(parseInt(s)+1)+".jpg";
    }
}
function prev(){
    var i=document.getElementById('image');
    var s=i.src.slice(-6,-4);
    if(s>1){
        i.src="./level4/0"+(parseInt(s)-1)+".jpg";
    }
}

