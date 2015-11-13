function truckgame() {
var name = prompt("What is your name");
var Truck = prompt("What truck would you pick? There are Toyota Tundra, F 450, Chevrolet Silverado, Peel P50, Vauxhall Astra Diesel, Land Rover Spectre Defender.");
var score;
    score = 0;;
switch (Truck) {

        case "Toyota Tundra":
                alert("It is crap.");
    score = score + 1;
                break;

    case "Ford F 450":
                alert("It is america's Icon and Toughest Truck");
    score = score + 2;
                break;
    case "Chevrolet Silverado":
    score = score -1;
        alert("Very Luxourious but Lame");  
        break;
    
    case "Peel P50" :
        alert("Sweg");
    score = score + 5;
        break;
    
    case "Vauxhall Astra Diesel" :
        alert("Sedamn car");
    score = score - 2;
        break;
 
  case "Land Rover Spectre Defender" :
        alert("Perfect Truck for this era");
    score = score + 5;
        break;
        default:
    
                alert ("Terrible");
    score = 0;
alert("Well Done "+ name);
}}