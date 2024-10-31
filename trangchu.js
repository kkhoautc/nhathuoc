





document.addEventListener('DOMContentLoaded', function() {
    // Đăng nhập
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');
    
    // Thông báo
    const openPopupnoti = document.getElementById('opencnoti');
    const notiOverlay = document.getElementById('popnoti');
    const closePopupnoti = document.getElementById('closenoti');
    
    // Đăng ký
    const opendk = document.getElementById('dkOpen');
    const closedk = document.getElementById('dkClose');
    const dkOverlay = document.getElementById('dkiOverlay');

    // Đăng nhập
    openPopupButton.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';
    });
    closePopupButton.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    // Thông báo
    openPopupnoti.addEventListener('click', () => {
        notiOverlay.style.display = 'flex';
        notiOverlay.style.position = 'fixed';
    });
    closePopupnoti.addEventListener('click', () => {
        notiOverlay.style.display = 'none';
    });
    notiOverlay.addEventListener('click', (e) => {
        if (e.target === notiOverlay) {
            notiOverlay.style.display = 'none';
        }
    });

    // Đăng ký
    opendk.addEventListener('click', () => {
        dkOverlay.style.display = 'flex';
    });
    closedk.addEventListener('click', () => {
        dkOverlay.style.display = 'none';
    });
    dkOverlay.addEventListener('click', (e) => {
        if (e.target === dkOverlay) {
            dkOverlay.style.display = 'none';
        }
    });

    // Mua hàng
    const buyButtons = document.querySelectorAll('.buy-button');
    const popup = document.getElementById('popup1');
    const closeButton = document.querySelector('.close');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImage = document.getElementById('popup-image');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productImage = this.getAttribute('data-image');
            popupTitle.innerText = productName;
            popupImage.src = productImage;
            popup.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Các hàm thông báo
    window.dangnhap = function() {
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "http://127.0.0.1:5500/";
    }

    window.dangki = function() {
        alert("Bạn đã tạo tài khoản thành công");
        window.location.href = "http://127.0.0.1:5500/";
    }

    window.giohang = function() {
        alert("Bạn đã thêm vào giỏ hàng thành công");
    }

    window.mua = function() {
        alert("Coming Soon!!!");
    }
    window.validateForm= function() {
        const name= document.getElementById('namedn');
        const pass=document.getElementById('passdn');
        if(name.length==0||pass.length==0){
            alert("Tài khoản và mật khẩu không được để trống");
        }
    }
    var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

// Nút mở modal
var openModalBtn = document.getElementById("openModal");
var openModal1Btn = document.getElementById("openModal1");

// Nút đóng cho từng modal
var closeBtns = document.getElementsByClassName("close");

// Mở các modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}
openModal1Btn.onclick = function() {
    modal1.style.display = "block";
}

// Đóng các modal khi nhấn nút đóng
for (let closeBtn of closeBtns) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}

// Đóng các modal khi nhấn ra ngoài
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

// Ô nhập Số Điện Thoại và Nút "Tiếp Tục"
var phoneInput = document.getElementById("phone");
var continueBtn = document.querySelector('.btn-continue');

// Kích hoạt hoặc vô
var phoneInput = document.getElementById("phone");

// Lấy nút "Tiếp tục"
var continueBtn = document.querySelector('.btn-continue');

// Lắng nghe sự kiện 'input' khi người dùng nhập dữ liệu vào ô số điện thoại
phoneInput.addEventListener('input', function() {
    // Kiểm tra xem ô nhập có trống không
    if (phoneInput.value.trim() !== "") {
        // Nếu ô nhập không trống, kích hoạt nút "Tiếp tục"
        continueBtn.classList.add('active');
        continueBtn.removeAttribute('disabled');
    } else {
        // Nếu ô nhập trống, vô hiệu hóa nút "Tiếp tục"
        continueBtn.classList.remove('active');
        continueBtn.setAttribute('disabled', true);
    }
});
// Kiểm tra nếu ô nhập số điện thoại trống, hiển thị cảnh báo
var phoneInput = document.getElementById("phone");
var continueBtn = document.querySelector('.btn-continue');

continueBtn.addEventListener('click', function() {
    if (phoneInput.value.trim() === "") {
        alert("Vui lòng nhập số điện thoại!");
    } else {
        // Nếu có số điện thoại, thực hiện hành động tiếp theo
        alert("HIỆN TẠI BẠN KHÔNG CÓ MÃ GIẢM GIÁ NÀO!!");
    }
});
    
});
let currentSlide = 0;

function showSlide(index) {
const slides = document.querySelectorAll('.slide');
if (index >= slides.length) currentSlide = 0;
if (index < 0) currentSlide = slides.length - 1;

slides.forEach(slide => slide.classList.remove('active'));
slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
currentSlide += direction;
showSlide(currentSlide);
}
function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Khởi động auto-slide
let autoSlideInterval = setInterval(autoSlide, slideInterval);

// Dừng và khởi động lại auto-slide khi người dùng thao tác
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, slideInterval);
}
// Hiển thị slide đầu tiên khi tải trang
showSlide(currentSlide);





//
// Xử lý Modal
