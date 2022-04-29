function calc() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var oper=document.getElementById('operators').value

    if (oper === '+') {
        document.getElementById('result').textContent = n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').textContent = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').textContent = n1 / n2;
    }

    if (oper === '*') {
        document.getElementById('result').textContent = n1 * n2;
    }


}

function reset(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("result").textContent="";
    
}

function toggle() {
        const visibility = document.getElementById("result").hidden;
        if(visibility){
            document.getElementById("result").hidden=false;
            document.getElementById("toggle-btn").textContent='hide';

        }else{
            document.getElementById("result").hidden=true;
            document.getElementById("toggle-btn").textContent='Show';


        }
    
}