
// radian to degree

function redian_to_degree(radian){
    let degree=radian*(180/3.14159).toFixed(3);
    return degree;
}
const result=redian_to_degree(1);
console.log(result)