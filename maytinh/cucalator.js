function number1() {
let number = document.getElementById("in").value;
document.getElementById("in").value =(number +'1');
}
function number2() {
let number = document.getElementById("in").value;
document.getElementById("in").value = number +'2';
}
function number3() {
let number = document.getElementById("in").value;
document.getElementById("in").value = number +'3';
}
function cong() {
let number = document.getElementById("in").value;
document.getElementById("in").value = number +'+';
}
function number4() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'4';
}
function number5() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'5';
}
function number6() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'6';
}
function tru() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'-';
}
function number7() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'7';
}
function number8() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'8';
}
function number9() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'9';
}
function nhan() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'*';
}
function clead() {
    document.getElementById("in").value = '';
}
function number0() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'0';
}
function bang() {
    let number = document.getElementById("in").value;
    let ketqua =eval(number);
    document.getElementById('in').value =ketqua;
}
function chia() {
    let number = document.getElementById("in").value;
    document.getElementById("in").value = number +'/';
}
//cách 2.gắn vlue cho tất cả các button rồi thực thi hàm này;
// <script>
// let flag = false; // Kỹ thuật đặt cờ
// function inputValue(value) {
//     if (value == '=') {
//         flag = true;
//         if (document.getElementById('result').value != "") {
//             document.getElementById('result').value = eval(document.getElementById('result').value);
//         }else {
//             alert("Nhập giá trị")
//         }
//     } else if (value == 'c') {
//         document.getElementById('result').value = "";
//     } else {
//         if(flag){
//             document.getElementById('result').value = "";
//         }
//         document.getElementById("result").value += value;
//     }
// }
// </script>