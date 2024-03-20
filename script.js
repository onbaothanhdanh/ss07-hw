//  bài 1: Sử dụng cấu trúc if…else, viết chương trình yêu cầu người dùng nhập vào cầu trả lời cho câu hỏi “Bạn sinh năm bao nhiêu”. 
//  Nếu câu trả lời nhập vào là một số thì hiển thị số tuổi của người dùng, nếu không thì hiển thị giá trị không hợp lệ.

let yearBorn, thisYear;
let day = new Date();
thisYear = day.getFullYear();
yearBorn = prompt('Mời bạn nhập vào năm sinh:', );
if (!isNaN(yearBorn) && Number.isInteger(parseFloat(yearBorn)) && parseInt(yearBorn) < thisYear) {
    console.log('số tuổi hiện tại của bạn là: ' + (thisYear - yearBorn));
} else {
    console.log('Bạn đã nhập sai');
}


// Bài 2: Viết chương trình yêu cầu người dùng nhập vào một số bất kỳ. 
// Tiến hành kiểm tra số nhập vào và in ra theo 3 trường hợp: số chẵn, số lẻ và không hợp lệ.

let number = +prompt('Mời bạn nhập vào 1 số bất kỳ');
if (isNaN(number)) {
    console.log('bạn nhập sai');
} else if (number % 2 === 0) {
    console.log('Số chẵn');
} else {
    console.log('số lẻ');
}

// câu 3: Luyện tập sử dụng câu lệnh điều kiện switch/case.
// Viết chương trình yêu cầu nhập vào một số và hiển thị ngày trong tuần tương ứng với số vừa nhập. 
// Khi người dùng nhập 2 thì hiển thị monday, 3 thì hiển thị tuesday,... 8 thì hiển thị sunday, 
// bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

let numberDay = +prompt('Hãy nhập vào số ngày từ 2 đến 8 mà bạn muốn tra thứ:')
switch (numberDay) {
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    case 8:
        console.log('Sunday');
        break;
    default:
        console.log('Không hợp lệ');
}

// câu 4:Luyện tập sử dụng toán tử ba ngôi
// Viết chương trình yêu cầu nhập vào một số, sử dụng toán tử 3 ngôi 
// để hiển thị xem số đó là số âm hay số dương.
// Yêu cầu người dùng nhập vào một số
let numberA = +prompt('Nhập vào một số:');
let result = numberA % 2 === 0 ? 'Số dương' : 'Số âm';
console.log(result);

// câu 7:
// Luyện tập sử dụng câu lệnh điều kiện.
// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c. 
// Tiến hành kiểm tra xem số nào là lớn nhất. 
// Sau đó in max và in ra màn hình console theo cú pháp “Số lớn nhất là - …”.
let a = +prompt('Mời bạn nhập vào số a');
let b = +prompt('Mời bạn nhập vào số b');
let c = +prompt('Mời bạn nhập vào số c');
let max = a;
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
console.log('Số lớn nhất là: ' + max);

// câu 8: 
// Luyện tập sử dụng câu lệnh điều kiện.
// Viết chương trình yêu cầu người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI: bmi = weight / ( height ^ 2 )
// <18.5 : cân nặng thấp 
// 18.5>24.9 : bình thường
// >=25 : thừa cân
// tiền béo phì: 25-29.9
// béo phì I: 30-34.9
// béo phì II: 35-39.9
// béo phì III: >=40

let weight = +prompt('Nhập cân nặng của bạn (kg):');
let height = +prompt('Nhập chiều cao của bạn (m):');
let bmi = weight / (height ** 2);
let result1;
if (bmi < 18.5) {
    result1 = 'Cân nặng thấp';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    result1 = 'Bình thường';
} else if (bmi >= 25 && bmi <= 29.9) {
    result1 = 'Thừa cân';
} else if (bmi >= 30 && bmi <= 34.9) {
    result1 = 'Tiền béo phì';
} else if (bmi >= 35 && bmi <= 39.9) {
    result1 = 'Béo phì I';
} else {
    result1 = 'Béo phì II';
}
console.log('Chỉ số cân nặng của bạn là ' + bmi + ' ' + 'kết quả phân loại theo chỉ số BMI là ' + result1);

// câu 5
// Luyện tập sử dụng câu điều kiện.
// Viết chương trình yêu cầu người dùng nhập vào số tháng trong năm, in ra số ngày trong tháng đó.
let month = +prompt('Nhập vào số tháng trong năm (từ 1 đến 12):');
let daysInMonth;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 29;
        break;
    default:
        console.log('Nhập sai, nhập lại từ 1 đến 12');
        break;
}
console.log('Tháng ' + month + ' ' + 'có số ngày là ' + daysInMonth);

// câu 6 Luyện tập sử dụng câu điều kiện.
// Viết chương trình cho phép người dùng nhập điểm các môn: toán, văn, anh. 
// Tính điểm trung bình các môn học và hiển thị xếp loại theo điều kiện:
// 8.0  <= ĐTB <= 10: xếp loại GIỎI.
// 6.5 <= ĐTB <= 7.9: xếp loại KHÁ.
// 5.0 <= ĐTB <= 6.4: xếp loại TRUNG BÌNH.
// ĐTB < 5.0: xếp loại YẾU.

let math = +prompt('Hãy nhập vào điểm toán');
let philology = +prompt('Hãy nhập vào điểm văn');
let english = +prompt('Hãy nhập vào điểm anh');
let relsutAdjPoint = ((math + philology + english) / 3);
if (relsutAdjPoint >= 8.0 && relsutAdjPoint <= 10) {
    console.log('xếp loại GIỎI');
} else if (relsutAdjPoint >= 6.5 && relsutAdjPoint <= 7.9) {
    console.log('xếp loại KHÁ');
} else if (relsutAdjPoint >= 5.0 && relsutAdjPoint <= 6.4) {
    console.log('xếp loại Trung Bình');
} else {
    console.log('xếp loại YẾU');
}

// câu 9: Luyện tập sử dụng câu lệnh điều kiện.
// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c.
// Tiến hành in 3 số ra màn hình console theo thứ tự tăng dần
let a1 = +prompt("Nhập số thứ a:");
let b1 = +prompt("Nhập số thứ b:");
let c1 = +prompt("Nhập số thứ c:");

if (a1 <= b1 && a1 <= c1) {
    console.log('Số nhỏ nhất là ' + a1);
    if (b1 <= c1) {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + a1 + b1 + c1)
    } else {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + a1 + c1 + b1)
    }
} else if (b1 <= a1 && b1 <= c1) {
    console.log('Số nhỏ nhất là ' + b1);
    if (a1 <= c1) {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + b1 + a1 + c1)
    } else {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + b1 + c1 + a1)
    }
} else {
    console.log('Số nhỏ nhất là ' + c1);
    if (a1 <= b1) {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + c1 + a1 + b1)
    } else {
        console.log('Sắp xếp theo thứ tự tăng dần là: ' + c1 + b1 + a1)
    }
}

// câu 10: Luyện tập sử dụng câu lệnh điều kiện.
// Phân biệt câu lệnh if/else và switch/case bằng comment trong code và đưa ra ví dụ cụ thể 
// với cả 2 loại câu lệnh điều kiện.