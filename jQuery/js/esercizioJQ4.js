$(document).ready(function(){
    $('#btn').click(function(){
        //memorizzo in tre variabili i tre valori inseriti nelle caselle
        //di testo
        let num1 = $('input[name=num1]').val();
        let num2 = $('input[name=num2]').val();
        let num3 = $('input[name=num3]').val();
        let num4 = $('input[name=num4]').val();
        let max=min=0;

        //controllo che siano tutti numeri
        if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
            //se entro qui almento un valore inserito non è numerico
            $('#main').html('Inserire 3 valori numerici');
        } else {
            //se sono nell'else vuol dire che tutti e tre i valori inseriti sono corretti
            //quindi posso trovare il max
            max = Math.max(num1,num2,num3,num4);
            min = Math.min(num1,num2,num3,num4)
            $('#main').html(
                'Il massimo è ' + max + '<br>' +
                'il minimo è ' + min);
        }

        $('input[type=text]').each(function(){
            //in questo blocco di testo scorro tra tutti gli elementi 
            //selezionati ossia tra tutti quelli che hanno la forma di:
            //<input type="text" ... >
            if($(this).val()==max){
                //la casella contiene il valore massimo
                $(this).css({border:'3px solid green'})
            }
            if($(this).val()==min){
                //la casella contiene il valore massimo
                $(this).css({border:'3px solid red'})
            }


        })

        
    })
    
}) 