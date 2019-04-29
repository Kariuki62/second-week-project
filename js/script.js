var button= document.getElementById('Type');

var triangleType =function home(){
    var Length = parseFloat(document.getElementById('Length').value);
    var Height = parseFloat(document.getElementById('Height').value);
    var Base = parseFloat(document.getElementById('Base').value);

    console.log(Length);
    console.log(Height);
    console.log(Base);

    if( Length === Height && Height=== Base && Base=== Length){
        alert("Triangle is equilateral");
}
else if(Length === Height && Height !== Base){
    alert("Triangle is Isosceles");
}
else if(Height === Length && Length !== Base){
    alert("Triangle is Isosceles");
}
}
if(button){
    button.addEventListener('click',triangleType);
}
