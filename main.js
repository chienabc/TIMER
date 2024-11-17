// Đặt ngày đích
const targetDate = new Date(2025, 2, 1).getTime(); // Tháng bắt đầu từ 0, nên tháng 3 là 2

// Thiết lập bộ đếm thời gian
let timer = setInterval(function() {
    // Lấy thời gian hiện tại
    const today = new Date().getTime();
    
    // Tính khoảng cách thời gian
    const diff = targetDate - today;
    
    // Tính toán các đơn vị thời gian
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Kiểm tra nếu đã đến thời điểm đích
    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Đã đến ngày 1/3/2025!";
        return;
    }
    
    // Hiển thị kết quả
    document.getElementById("timer").innerHTML = 
        `<div class="days">
            <div class="numbers">${days}</div>days</div>
         <div class="hours">
            <div class="numbers">${hours}</div>hours</div>
         <div class="minutes">
            <div class="numbers">${minutes}</div>minutes</div>
         <div class="seconds">
            <div class="numbers">${seconds}</div>seconds</div>`;
}, 1000);