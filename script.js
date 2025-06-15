let num = document.getElementById('result');
function display(Numbers){
    num.value += Numbers;
}
function Calculate(){
    try {
        num.value = eval(num.value)
    } catch (err) {
        alert("enter properly")
    }
}
function Clear(){
    num.value = '';
}
function del(){
    num.value = num.value .slice(0,-1);
}
let expression = "";

  function handlekey(e){
    const key = e.key;

    if(key >= "0" && key <="9"){
     Highlightkey(key);    
     expression +=key;
     
}
else if (['+','-','/','*','.'].includes(key)){
     
     expression +=key;
    }
    else if (key === 'Enter' || key === '='){
        try{
            expression = eval(expression).toString();
        }
        catch{
            expression = "Error"
        }
    }
    else if (key === 'Backspace'){
        expression = expression.slice(0,-1);
    }
    else if(key ==='Escape'){
        expression = "";
    }
    document.getElementById('result').value = "" + expression ;
  }

  function Highlightkey(key){
     
  }
  document.body.focus();

