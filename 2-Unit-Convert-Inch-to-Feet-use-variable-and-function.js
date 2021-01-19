function inchToFeet(inch) {
    feet = inch / 12;
    return feet;
}

/*
Simple way
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var dadiFeet = inchToFeet(170);
console.log(dadiFeet); */

var nanaFeet = 170;
var naniFeet = 170;
var dadaFeet = 156;
var dadiFeet = 156;

var seniors = [nanaFeet, naniFeet, dadaFeet, dadiFeet];

console.log(inchToFeet(seniors[0]));