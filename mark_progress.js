function mark_progress(target){
    let input = document.querySelector('#val');
    input.addEventListener('input',function(){
        document.getElementById("myBar").style.width = this.value + "%";
        document.getElementById("myBar").textContent = this.value + "%";
    });
    let contadorTotal = 0;
    let contadorActual = 0;
    let inputs_p = document.querySelectorAll('#'+target+' .mark_progress');
    inputs_p.forEach(function(element){
        element.addEventListener('input',function(){
            contadorActual = 0;
            let inputs_p = document.querySelectorAll('#'+target+' .mark_progress');
            inputs_p.forEach(function(element){
                if(element.value!=""){
                    contadorActual +=1;
                }
            });
            document.querySelector('#actual').value = contadorActual;
            const porcentaje = document.querySelector('#actual').value*100/document.querySelector('#total').value;
            document.querySelector('#val').value = Math.floor(porcentaje);
            document.getElementById("myBar").style.width = Math.floor(porcentaje) + "%";
            document.getElementById("myBar").textContent = Math.floor(porcentaje) + "%";
        });
        contadorTotal++;
    });
    document.querySelector('#total').value = contadorTotal;
}