$(document).ready(function(){
    
    //fa apparire e sparire il menu principale
    $('nav div.voce-menu>a').click(function(){
        $('nav div.voce-menu>ul').slideToggle(); //toggle() //fadeToggle();
    })

    $('nav div.voce-menu li.ha-sottomenu').click(function(){
        /*
            gli oggetti selezionati potrebbero essere più di 1
            quindi devo usare $(this), per compiere azioni soli sull'oggetto su cui 
            ho cliccato
        */
        $(this).find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-caret-down fa-caret-right')

       
    })
    /*
    il metodo append aggiunge in coda al tag selezionato il contenuto passato come parametro
    */
    $('nav div.voce-menu li.ha-sottomenu>a').append('<i class="fa-solid fa-caret-right"></i>')


    /*slider*/
    /*actSlide contiene l'indice dell'immagine che è visualizzata in questo momento*/
    actSlide = 1;
    $('#boxSlider .right').click(function(){
        /*se clicco su questo elemento devo mostrare l'immagine successiva*/
        if(actSlide==4){
            /*sono sull'ultima immagine e clicco avanti*/
            ml=0;
            actSlide=1;
            $('#slideContainer').animate(
                {'margin-left':ml},
                1500
            );
        } else {
            actSlide++;  // actSlide = actSlide + 1; actSlide += 1;
            ml = -(actSlide-1)*1024;
            $('#slideContainer').animate(
                {'margin-left':ml},
                500
            );
            console.log(actSlide);
        }
        /*tutte le immagini sono punto.png*/
        /*modificando l'attributo src di un immagini possiamo modificare l'immagine*/
        $('.navBox img').attr('src','img/punto.png')

        /*mettere il cerchietto al posto giusto*/
        $('.navBox img').eq(actSlide-1).attr('src','img/ciambella.png')
        
    })

    $('#boxSlider .left').click(function(){
        /*se clicco su questo elemento devo mostrare l'immagine successiva*/
        if(actSlide==1){
            /*sono sulla prima img e clicco indietro*/
            ml=-3072;
            actSlide=4;
            $('#slideContainer').animate(
                {'margin-left':ml},
                1500
            );
        } else {
            actSlide--;
            ml = -(actSlide-1)*1024;
            $('#slideContainer').animate(
                {'margin-left':ml},
                500
            );
            
            console.log(actSlide);
        }
        $('.navBox img').attr('src','img/punto.png')

        /*mettere il cerchietto al posto giusto*/
        $('.navBox img').eq(actSlide-1).attr('src','img/ciambella.png')
    })

    $('.navBox img').click(function(){
        /*data-img è assegnato in modo da essere equivalente a actSlide*/
        actSlide=$(this).attr('data-img'); 
        ml = -(actSlide-1)*1024;
        $('#slideContainer').animate(
            {'margin-left':ml},
            500
        );
        $('.navBox img').attr('src','img/punto.png')

        /*mettere il cerchietto al posto giusto*/
        $('.navBox img').eq(actSlide-1).attr('src','img/ciambella.png')
    })

})