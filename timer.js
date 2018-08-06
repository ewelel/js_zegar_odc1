function odliczanie()
{
    var teraz = new Date();

    var dzien = teraz.getDate();
    var miesiac = teraz.getMonth() + 1;
    if (miesiac < 10) miesiac = "0" + miesiac;
    var rok = teraz.getFullYear();
    var godzina = teraz.getHours();
    if (godzina < 10) godzina = "0" + godzina;
    var minuty = teraz.getMinutes();
    if (minuty < 10) minuty = "0" + minuty;
    var sekundy = teraz.getSeconds();
    if (sekundy < 10) sekundy = "0" + sekundy;
    document.getElementById("zegar").innerHTML = dzien + "/"+miesiac + "/" + rok + " | " + godzina + ":" + minuty + ":" + sekundy;


    setTimeout("odliczanie()",1000);

}