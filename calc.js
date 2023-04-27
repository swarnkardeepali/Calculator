const calc = (opt) => {
     document.getElementById('first').value += opt;
}
 const equal = () => {
    document.getElementById('first').value = eval(document.getElementById('first').value)
 }
const clearField = () => {
    document.getElementById('first').value = '';
}
 function back() {
    var value = document.getElementById("first").value;
    document.getElementById("first").value = value.substr(0, value.length-1);
 }







/*function add(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)+Number(b)
    document.getElementsByClassName('output')[0].innerText=`Sum of number is ${out}`
}

function sub(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)-Number(b)
    document.getElementsByClassName('output')[0].innerText=`Sum of number is ${out}`
}*/
