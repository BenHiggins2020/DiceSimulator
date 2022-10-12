var d6 = 6

// creating the random number
function randomDiceNumber(diceType){
    var randomNumber = Math.floor(Math.random() * diceType)+1;
    return randomNumber;
}

function concatDiceImgName(){
    var img = "dice"+randomDiceNumber(d6)+".png"
    var src = "images/"+img;
    return src;
}


var img1 = "dice"+randomDiceNumber(d6)+".png"

var src1 = "images/"+img1;

var img2 = "dice"+randomDiceNumber(d6)+".png"
var src2 = "images/"+img2;

// alert(src1+" "+src2)

// getting the element
var imgElement1 = document.querySelectorAll("img")[0];

var imgElement2 = document.querySelectorAll("img")[1];


//setting the src

imgElement1.setAttribute("src",src1);
imgElement2.setAttribute("src",src2);


// adding button action

var rollBtn = document.querySelectorAll("button")[0];

function roll(){
    randomDiceNumber(d6)
    // getting the element
    var imgElement1 = document.querySelectorAll("img")[0];
    var imgElement2 = document.querySelectorAll("img")[1];
    //setting the src
    imgElement1.setAttribute("src",concatDiceImgName());
    imgElement2.setAttribute("src",concatDiceImgName());

}
rollBtn.addEventListener("click",roll);