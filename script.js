var odabir = [];
var brojac = 0;

function randomBroj(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
 

function generirajPitanje()
{
    for(y=0; y<4; y++)
    {
        for(i = 1; i <= randomBroj(2 + y+1, 8); i++)
        {
            var label = document.createElement("label");
            label.className = "odgovor";
            label.htmlFor = "odg" + y + "" + i;
            label.innerHTML = i + '<input onclick="provjera('+ y +')" class="box' + y + ' grupa' + y + '" type="checkbox" id="odg' + y + '' + i + '" value="' + i + '">';
            document.getElementById('grupaPitanja' + (y+1)).appendChild(label);
        }
    }
}

function otvoriPitanjeButton(evt, pitanje) {
    var i, pitanjeSadrzaj, trakapitanja;

    if(window.classList.contains('aktivan'))
    {
        pitanjeSadrzaj = document.getElementsByClassName("pitanjeSadrzaj");
        for (i = 0; i < pitanjeSadrzaj.length; i++) {
            pitanjeSadrzaj[i].style.display = "none";
        }
    
        document.getElementById(pitanje).style.display = "block";
    }   else    {
        alert('morate odabrati barem jedno pitanje prije nastavka na sljedece pitanje');
    }

}

function otvoriPitanje(evt, pitanje) {
    var i, pitanjeSadrzaj, trakapitanja;

    pitanjeSadrzaj = document.getElementsByClassName("pitanjeSadrzaj");
    for (i = 0; i < pitanjeSadrzaj.length; i++) {
        pitanjeSadrzaj[i].style.display = "none";
    }

    document.getElementById(pitanje).style.display = "block";
}
document.getElementById("pitanje1").click();


function rezultati()
{
    str = "";
    for(y = 0; y < 4; y++)
    {
        str += "Odgovori za pitanje " + (y + 1) + ": ";
        odabir = document.getElementsByClassName('box' + y);
        for(i = 0; i<odabir.length;i++)
        {
            if(odabir[i].checked)
            {
                str += " " + odabir[i].value;
            }
        }
        str += "\n";
    }
    alert(str);
}

function provjera(x)
{
    provjereno = 0;
    aktivno = document.getElementsByClassName('aktivan');
    brojac = aktivno.length;
    test = document.getElementsByClassName('grupa' + x)
    for (i=0;i<test.length;i++)
    {
        if(test[i].checked)
        {
            provjereno++;
        }
    }
    if(provjereno > 0)
    {
        boja = document.getElementById('pitanje' + (x+1))
        boja.style.backgroundColor = "#6dbcd6"; 
        boja.classList.add('aktivan');
    } else
    {
        boja = document.getElementById('pitanje' + (x+1))
        boja.style.backgroundColor = "#f1f1f1";
        boja.classList.remove('aktivan');
    }

    if(x == 0 && provjereno > 3)
    {
        tempAlert('Odabrali ste više od dozvoljenog broja odgovora', 3000)
    } else if (x == 1 && provjereno > 4)
    {
        tempAlert('Odabrali ste više od dozvoljenog broja odgovora', 3000)
    } else if (x == 2 && provjereno > 5)
    {
        tempAlert('Odabrali ste više od dozvoljenog broja odgovora', 3000)
    } else if (x == 3 && provjereno > 6)
    {
        tempAlert('Odabrali ste više od dozvoljenog broja odgovora', 3000)
    }

    if((a = document.getElementsByClassName('aktivan')).length == 4)
    {   
        document.getElementsByClassName('result')[0].style.display = 'block';
    } else 
    {
        document.getElementsByClassName('result')[0].style.display = 'none';
    }
}



function tempAlert(msg,duration)
{
     var el = document.createElement("div");

     el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
     el.innerHTML = msg;
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },duration);
     document.body.appendChild(el);
}
    

    

