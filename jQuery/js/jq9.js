$(document).ready(function(){
    $('#btn').click(function(){
        let pwd1 = $('input.pwd1').val();
        let pwd2 = $('input.pwd2').val();
        
        if (pwd1.length<8){
            $('#main').html('la lunghezza delle password deve essere almeno 8 caratteri');
        } else if(pwd1==pwd2){
            //le password conicidono
            $('#main').html('le due password coincidono');
        } else {
            //le password non conicidono
            $('#main').html('le due password non coincidono');
        }
    })
})