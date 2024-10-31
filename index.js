
// Lấy các phần tử từ DOM
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');
const 
// Mở trang con
openPopupButton.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

// Đóng trang con khi nhấn nút Đóng
closePopupButton.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Đóng trang con khi nhấn bên ngoài hộp
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});
function validateForm() {
    let x = .value;
    if (x == "") {
        alert("Name must be filled out");
    return false;
    }
}
function dangnhap(){
  alert("Bạn đã đăng nhập thành công")
}
function dangki(){
  alert("Bạn đã tạo tài khoản thành công")
}