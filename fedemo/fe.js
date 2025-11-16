const searchBox = document.querySelector('.search-box');
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const openBtn = document.getElementById("openContact"); // nút bạn đã có
const closeBtn = document.getElementById("closeContact");
const panel = document.getElementById("contactPanel");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
    panel.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    panel.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    panel.classList.remove("active");
    overlay.classList.remove("active");
});
document.querySelector('.menu-toggle').addEventListener('click', function () {
    var submenu = this.closest('.menu-item').querySelector('.submenu');
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
});
const availableSuggestions = [
    "Túi xách nữ",
    "Phụ kiện bằng da cho nữ",
    "Phụ kiện thời trang cho nữ",
    "Làm đẹp",
    "Túi xách nam",
    "Phụ kiện bằng da cho nam",
    "Giày nam",
    "Nước hoa",
    // Thêm các từ khóa/tên sản phẩm khác của bạn vào đây
];

const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');

// 2. Lắng nghe sự kiện gõ phím
searchInput.addEventListener('input', function () {
    const inputValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Xóa đề xuất cũ

    if (inputValue.length === 0) {
        suggestionsBox.style.display = 'none'; // Ẩn khi ô tìm kiếm trống
        return;
    }

    // 3. Lọc dữ liệu
    const filteredSuggestions = availableSuggestions.filter(item =>
        item.toLowerCase().includes(inputValue) // Kiểm tra nếu từ khóa chứa nội dung đã nhập
    );

    // 4. Hiển thị đề xuất
    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.classList.add('suggestion-item');
            item.textContent = suggestion;

            // Xử lý khi người dùng nhấp vào đề xuất
            item.addEventListener('click', function () {
                searchInput.value = suggestion; // Điền đề xuất vào ô tìm kiếm
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';

                // Ở đây, bạn có thể gọi hàm search() để bắt đầu tìm kiếm ngay lập tức
                // Ví dụ: window.location.href = `/search?q=${encodeURIComponent(suggestion)}`; 
            });

            suggestionsBox.appendChild(item);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Ẩn đề xuất khi nhấp chuột ra ngoài (tùy chọn)
document.addEventListener('click', function (e) {
    if (searchBox && !searchBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
    }
});
function openDetailPage(name, price, image, desc) {
    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImage", image);
    localStorage.setItem("productDesc", desc);

    // Chuyển đến trang chi tiết
    window.location.href = "detail.html";
}