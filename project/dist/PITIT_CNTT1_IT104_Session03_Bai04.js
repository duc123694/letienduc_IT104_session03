"use strict";
const strvalue:string = "2";
const numvalue:number = 2;
console.log(strvalue == numvalue);
// == so sánh giá trị lỏng lẻo nên 2 của string đc ép kiểu thành 2 của number  => true
console.log(strvalue === numvalue);
// === cái anyf là so sánh giá trị lẫn cả kiểu dữ liệu nên => false
