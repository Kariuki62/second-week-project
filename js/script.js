var button= document.getElementById('Type');

var triangleType =function home(){
    var Length = parseFloat(document.getElementById('Length').value);
    var Height = parseFloat(document.getElementById('Height').value);
    var Base = parseFloat(document.getElementById('Base').value);

    console.log(Length);
    console.log(Height);
    console.log(Base);

    if(Length+Height<=Base || Height+Base<=Length || Length+Base<=Height){
      alert("Not a Triangle");
    }

    else if( Length === Height && Height=== Base && Base=== Length){
        alert("Triangle is equilateral");
}
else if(Length === Height && Height !== Base){
    alert("Triangle is Isosceles");
}
else if(Height === Length && Length !== Base){
    alert("Triangle is Isosceles");
}
else if (Length !== Height && Height !== Base && Length!== Base){
    alert("Triangle is Scalene");
}

}
if(button){
    button.addEventListener('click',triangleType);
}
