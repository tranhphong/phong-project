//variable: Biến số
//Khai báo biến số: let, var, const
// let: Local var
// var: Global var -> Biến toàn cục
// Const: Hằng số -> Không được phép thay đổi giá trị
var yearOfBirth = 36;

if (yearOfBirth == 30){
    let i = 0;
}
i = 10;
const yearOfBirth = 2000;

//1 số thuật ngữ build-in cơ bản
alert("Trang web không tồn tại!")
console.log("Đường dẫn trang web này bị sai!")
Name = prompt("Nhập tuổi: ")
YearOfBirth = prompt("Nhập họ và tên: ")
console.log("Người dùng có tên là:", Name)
console.log(2024 - YearOfBirth)

//Câu lệnh điều kiện
//if-else if-else
//Cú pháp
if (condition1){
    block1
}else if (condition2){
    block2
}else{
    block3
}
a = parseFloat(prompt("Nhập số a: "))
b = parseFloat(prompt("Nhập số b: "))
c = parseFloat(prompt("Nhập số c: "))
if (a > b && a > c){
    console.log("Số lớn nhất là a=", a);
}else if (b > c){
    console.log("Số lớn nhất là b=", b);
}else{
    console.log("Số lớn nhất là c=", c);
}

//Condition (điều kiện) -> Phép so sánh và phép logic
//Phép so sánh: >, <, >=, <=, ==, ===
//Phép logic: &&, !, ||