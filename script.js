var Name = new Array()
Name[1] = "Aelish";
Name[2] = "Johnson";
Name[3] = "jolly";
Name[4] = "Mahak";
Name[5] = "DJ";
Name[6] = "Hukum";
Name[7] = "Adiyta";
Name[8] = "Sanskar";
Name[9] = "kumar";
Name[10] = "Jack";
console.log(Name);

for(var i = 1; i<11; i++){
    if (Name[i].charAt(0) == "j" || Name[i].charAt(0) == "J") {
        console.log("Goodbye J"+Name[i]);
    }
    else{
        console.log("Hello "+ Name[i]);
    }
}