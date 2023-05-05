$(document).ready(function(){
    //in larghezza ci sarà la width() dell'oggetto con
    //id="horse"
    let larghezza = $('#horse').width();
    $('#btn').click(function(){
        //passi conterrà il valore della casella di input con
        //class="corri"
        let numPassi = $('input.corri').val();
        
        console.log(numPassi)
        
        if(isNaN(numPassi) || numPassi<1){
            console.log(numPassi)
            //nella casella di testo non è stato inseirto un numero
            $('p.errore').html('Inserire un numero maggiore di 0');
        } else {
            $('p.errore').html('');
            //tutto ok, faccio muovere il cavallo
            $('#horse').animate({
                'margin-left': larghezza*numPassi 
            });
        }
    })
})