// 두 배열끼리 결합 concat
const arr1 = ["저녁"]
const arr2 = ["배가 고프다","난 데스까"]

const stringplus = arr1.concat(arr2)
document.write("<p>" + stringplus +"</p>")

// 배열 생성자 가져오기
const fruits = ["바나나","오렌지","사과","망고"];
let text = fruits.constructor;
document.write("<p>"+ text + "</p>")