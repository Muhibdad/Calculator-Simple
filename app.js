var display=document.getElementById('display');


    function displayNum(idd){
        display.value += idd;
        console.log(idd);
    }

    function clr(){
        display.value="";
    }

    function getResult(){
        var result= eval(display.value);
        display.value=result;
        console.log(result);
        }