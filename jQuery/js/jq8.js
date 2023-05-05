//dico a jQuery di aspettare di aver caricato tutta la pagina
//prima di "porre l'attenzione" suglio oggetti
$(document).ready(function(){
    $('#btn').click(function(){
        //quando clicco sull'oggetto con id btn
        //eseguo il codice tra le due graffe
    
        //per prendere il valore di un <input type="XXXX">
        let nome = $('input.nome').val();     // nome = David
        let citta = $('input.citta').val();   // citta = Roma
        
        if (nome.length>0 && citta.length>0){
            //inserisco str dentro #main solo se entrambi i campi sono 
            //compilati
            let str = nome + " abita a " + citta;   //=> David abita a Roma
            $('#main').html(str);
            //
            $('input.nome,input.citta').css({border:'2px solid green'});
        } else {
            //se i campi non sono compilati gli metto un bordo rosso e aggiungo 
            //un messaggio di errore
            $('input.nome,input.citta').css({border:'1px solid red'});

            $('#main').html('Compila tutti i campi');
        }
        
    })
})