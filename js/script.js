var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click', 
    function(){
        //1. acquisizione nome cliente
        var name = document.getElementById("name").value;
        console.log(name);
        //2. acquisizione km cliente
        var km = document.getElementById("km").value;
        console.log(km);
        //3. acquisizione fascia eta cliente
        var fasciaEta = document.getElementById("eta").value;
        console.log(fasciaEta);
        //4. prezzo fisso per km
        var prezzoKm = 0.21;
        //5. calcolo biglietto standard
        var total = (km * prezzoKm);
        console.log(total);   
    
        //se utente minorenne sconto 20%
        //se utente over 65 sconto 40%
        //altrimenti no sconto 
        if ( fasciaEta == "minorenne" ) {
            total = total * 0.8;
        } else if ( fasciaEta == "over65" ) {
            total = total * 0.6;
        } 
        total = total.toFixed(2);
        console.log(total);


        if ( fasciaEta == "minorenne") {
            document.getElementById("offerta").innerHTML = "Offerta Junior";
        } else if ( fasciaEta == "over65" ) {
            document.getElementById("offerta").innerHTML = "Offerta Senior";
        } else {
            document.getElementById("offerta").innerHTML = "Offerta standard";
        }
    
        //genero carrozza casuale
        var numCarrozza = Math.floor(Math.random() *10);


        //genero prenotazione
        var numCodiceCp = Math.floor(Math.random() * 10000) + 90000;

            

        //stampa biglietto
        document.getElementById("nome-passeggero").innerHTML = name;
        document.getElementById("costo-biglietto").innerHTML = total + "€";
        document.getElementById("carrozza").innerHTML = numCarrozza;
        document.getElementById("codice-cp").innerHTML = numCodiceCp
    
        
        document.getElementById("test").classList.add("show")
    
    
    }
);


var buttonAnnulla = document.getElementById("annulla");
buttonAnnulla.addEventListener("click",
    function() {

        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("eta").value = "";
        

        document.getElementById("test").classList.remove("show")

    }




);

