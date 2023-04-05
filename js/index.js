   //LUAS SEGITIGA
   function hitungluasbangunsegitiga() {
      var alas = parseFloat(document.getElementById("alas").value);
      var tinggi = parseFloat(document.getElementById("tinggi").value);
      var luas = 0.5 * alas * tinggi;
    
      document.getElementById("rumusluassegitiga").innerHTML = " L = 1/2 x a x t ";
      document.getElementById("caraluassegitiga").innerHTML = "L = 1/2 x "  +alas + " x " +tinggi;
      document.getElementById("hasilluassegitiga").innerHTML = "L = " +luas;
      
    }
    function ressetluassegitiga(){
  document.getElementById("hapusluassegitiga").reset();
  document.getElementById("rumusluassegitiga" ).innerHTML = ""
  document.getElementById("caraluassegitiga" ).innerHTML = ""
  document.getElementById("hasilluassegitiga" ).innerHTML = ""
}
    

    //KELILING SEGITIGA
    function hitungkelilingbangunsegitiga() {
      var sisi1 = parseFloat(document.getElementById("sisi1").value);
      var sisi2 = parseFloat(document.getElementById("sisi2").value);
      var sisi3 = parseFloat(document.getElementById("sisi3").value);
      var kelilingsegitiga = sisi1 + sisi2 + sisi3;
    
      document.getElementById("rumuskelilingsegitiga").innerHTML = "     K = S1 + S2 + S3 ";
      document.getElementById("carakelilingsegitiga").innerHTML = "     K = " +sisi1 +" + " + sisi2 +" + " + sisi3 ;
      document.getElementById("hasilkelilingsegitiga").innerHTML = "     K = " +kelilingsegitiga;
    }
    function ressetForm(){
  document.getElementById("hapuskelilingsegitiga").reset();
  document.getElementById("rumuskelilingsegitiga" ).innerHTML = ""
  document.getElementById("carakelilingsegitiga" ).innerHTML = ""
  document.getElementById("hasilkelilingsegitiga" ).innerHTML = ""
}


//LUASJAJARGENJANG
   function hitungluasbangunjajargenjang() {
      var alas2 = parseFloat(document.getElementById("alas2").value);
      var tinggi2 = parseFloat(document.getElementById("tinggi2").value);
      var luas2 = 0.5 * alas2 * tinggi2;
    
      document.getElementById("rumusluasjajargenjang").innerHTML = " L = a x t ";
      document.getElementById("caraluasjajargenjang").innerHTML = "L = " + alas2 + " x " +tinggi2;
      document.getElementById("hasilluasjajargenjang").innerHTML = "L = " +luas2;
      
    }
    function ressetluasjajargenjang(){
  document.getElementById("hapusluasjajargenjang").reset();
  document.getElementById("rumusluasjajargenjang" ).innerHTML = ""
  document.getElementById("caraluasjajargenjang" ).innerHTML = ""
  document.getElementById("hasilluasjajargenjang" ).innerHTML = ""
}
 
//KELILINGJAJARGENJANG
function hitungkelilingbangunjajargenjang() {
  var alas3 = parseFloat(document.getElementById("alas3").value);
  var tinggi3 = parseFloat(document.getElementById("tinggi3").value);
  var keliling3 = 2 * alas3 + 2 * tinggi3;

  document.getElementById("rumuskelilingjajargenjang").innerHTML = " K = 2 ( a x t ) ";
  document.getElementById("carakelilingjajargenjang").innerHTML = "K = 2 (" + alas3 + " + " +tinggi3 + ")";
  document.getElementById("hasilkelilingjajargenjang").innerHTML = "K = " +keliling3;
  
}
function ressetkelilingjajargenjang(){
document.getElementById("hapuskelilingjajargenjang").reset();
document.getElementById("rumuskelilingjajargenjang" ).innerHTML = ""
document.getElementById("carakelilingjajargenjang" ).innerHTML = ""
document.getElementById("hasilkelilingjajargenjang" ).innerHTML = ""
}
   
