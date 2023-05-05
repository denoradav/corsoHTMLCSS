$(document).ready(function(){
    $('#btn').click(function(){
        //input[attr=val] selezione gli input con attr="val"
        //in questo caso saranno selezionati gli input con
        //attributo name="num"
        let num=$('input[name=num]').val();
        if(!isNaN(num) && num<10 && num>0){
            //isNaN(3)=false - isNaN('a')=true
            //!isNaN(3)=true - !isNaN('a')=false
            //solo se num è un numero compreso tra 1 e 9 entro qui
            $('td').eq(num-1).addClass('selected');
        } 
    })

    

    $('#inverti').click(function(){
        //toggleClass(nomeClasse) toglie nomeClasse a chi la ha 
        //e la aggiunge a chi la mette
        $('td').toggleClass('selected');
    });

    $('#conta').click(function(){
        //per contare il numero di elementi che hanno una data caratteristica
        //basta selezionarli e contarli con .length
        //$('td[class]') seleziona tutti gli elementi che hanno 
        //l'attributo class a prescidere dal valore
        let numElem = $('td[class]').length
        $('p.msg').html('Ci sono ' + numElem + ' elementi colorati');
    });

    /*
    $('td').click(function(){
        //toggleClass(classe) toglie classe a chi la ha 
        //e la aggiunge a chi la mette
        $(this).toggleClass('selected');
       
    });
    */
    $('#pulisci').click(function(){
        //leviamo tutte le classi a td rimuovendo
        //l'atrributo class
        $('td').removeAttr('class');
    });
    
    $('p.click').click(function(){
        //.attr(nome-attr) recupera il valore dell'attributo nome-attr
        //.attr() con un solo parametro è un getter
        //prende il valore dell'attributo
        actClass=$(this).attr('data-class');
    })

    $('td').click(function(){
        //.attr() con 2 parametri è un setter
        //imposta un valore
        $(this).attr('class',actClass); 
        //equivale a $(this).addClass(actClass); se $(this) non ha classi    
    })

    $('p.click').dblclick(function(){
        //il blocco di codice viene eseguito sul doppio click
        actClass=$(this).attr('data-class');
        $('td').removeAttr('class').addClass(actClass);
        //o in maniera equivalente
        //$('td').attr('class',actClass); 
    })

    

})