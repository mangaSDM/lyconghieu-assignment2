# Khuyến mãi thiệp Tết 2026 — Blakletterpress

Dự án bài tập sửa lỗi CSS (Box model & Position) cho trang khuyến mãi thiệp Tết và triển khai web trên Vercel.

## Các nội dung đã khắc phục
- **Thanh menu**: Thêm `top: 0` và `z-index: 100` để cố định dính (sticky) ở mép trên màn hình khi cuộn và luôn nổi trên ảnh.
- **Hero banner**: Thêm `position: relative` cho `.hero` để tiêu đề `.hero-overlay` căn giữa chính xác; thêm `object-fit: cover` cho ảnh nền.
- **Thẻ sản phẩm**:
  - Chuẩn hoá `box-sizing: border-box` toàn cục giúp 3 thẻ hiển thị vừa vặn trên 1 hàng ngang.
  - Thêm `position: relative` cho `.card` để nhãn `-20%` nằm đúng góc trên bên phải mỗi thẻ.
  - Điều chỉnh kích thước `.card img` và chiều cao thẻ để ảnh và chữ nằm gọn gàng, không bị tràn ra ngoài.
- **Nút lên đầu trang**: Đổi toạ độ sang `bottom: 24px` để nút "↑" nổi cố định ở góc dưới bên phải màn hình khi cuộn.
