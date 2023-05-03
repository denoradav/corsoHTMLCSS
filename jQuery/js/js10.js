$(document).ready(function(){
    $('#link1').click(function(){
        //questo codice verrà eseguito quando clicco sull'elemento
        //dell'HTML che ha id link1
        $('.box').animate({
            'margin-top':350,
            'margin-left':290
        },5000,function(){
            //il blocco di codice viene eseguito quando l'animazione è terminta
            $('.box2').animate({
                'margin-top':150,
                'margin-left':290
            },5000);
        });

        
    })
})