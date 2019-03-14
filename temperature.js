//Conversion de Kalvins en Degrés Celsius.
function kenc(){
    var a= document.getElementById("temp").value;
    var ans;
    if(a==0){
        document.getElementById("resultat").innerHTML= ("Impossible");
    }
    else{
        ans= (a-273.15);
        document.getElementById("resultat").innerHTML= (ans);
        document.getElementById("resultat1").innerHTML= (" °C");
    }
}
//Conversion de Degrés Celsius en Kalvins.
function cenk(){
    var a= document.getElementById("temp").value;
    var ans;
    if(a==0){
        document.getElementById("resultat").innerHTML= ("Impossible");
    }
    else{
        ans= (a*+273.15);
        document.getElementById("resultat").innerHTML= (ans);
        document.getElementById("resultat1").innerHTML= (" °K");
    }  
}
//Conversion de Kalvins en Fahrenheit.
function kenf(){
    var a= document.getElementById("temp").value;
    var ans;
    if(a==0){
        document.getElementById("resultat").innerHTML= ("Impossible");
    }
    else{
        ans= ((a*1.8)-(459.67));
        document.getElementById("resultat").innerHTML= (ans);
        document.getElementById("resultat1").innerHTML= (" °F");
    }
}
//Conversion de Fahrenheit en Kalvins.
function fenk(){
    var a= document.getElementById("temp").value;
    var ans;
    if(a==0){
        document.getElementById("resultat").innerHTML= ("Impossible");
    }
    else{
        ans= ((a+459.67)/1.8);
        document.getElementById("resultat").innerHTML= (ans);
        document.getElementById("resultat1").innerHTML= (" °K");
    }
}