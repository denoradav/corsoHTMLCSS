$(document).ready(function(){
    $('#btn').click(function(){
        let num=$('input[name=num]').val();
        if(!isNaN(num) && num<10 && num>0){
            //isNaN(3)=false - isNaN('a')=true
            //!isNaN(3)=true - !isNaN('a')=false
            //solo se num è un numero compreso tra 1 e 9 entro qui
            $('td').eq(num-1).addClass('selected');
        } 
    })

    

    $('#inverti').click(function(){
        //toggleClass(classe) toglie classe a chi la ha 
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
        $('td').removeAttr('class');
    });
    
    $('p.click').click(function(){
        //.attr(nome-attr) recupera il valore dell'attributo nome-attr
        actClass=$(this).attr('data-class');
    })

    $('td').click(function(){
        $(this).attr('class',actClass);    
    })

    $('p.click').dblclick(function(){
        //il blocco di codice viene eseguito sul doppio click
        actClass=$(this).attr('data-class');
        $('td').removeAttr('class').addClass(actClass);
    })

    

})