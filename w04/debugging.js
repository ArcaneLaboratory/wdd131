const pi = Math.PI;
let area = 0;
function circleArea(r){
    return r * r * pi;
}
area = circleArea(3);
document.body.innerText = area;