var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceName1 = "dice"+randomNumber1+".png";

var randomImgSource1 = "images/"+randomDiceName;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceName2 = "dice"+randomDiceName2+".png";

var randomImageSource2 = "images/"+randomDiceName2;

var image2 = document.querySelectorAll("img")[1];

var image2 = document.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML= "It's a draw!"

}





