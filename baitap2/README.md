# Bài tập 2 — Tìm và sửa lỗi CSS (Box model, Position, Overflow, Stacking Context)

Trang khuyến mãi thiệp Tết 2026 — Blakletterpress.

## Các lỗi tinh vi đã chẩn đoán và khắc phục:

1. **Sticky Header bị cuộn trôi khỏi màn hình**:
   - **Nguyên nhân**: Phần tử `.page` có thuộc tính `overflow-x: hidden;`, biến nó thành overflow container (`overflow-y: auto`), làm mất cơ chế neo `position: sticky; top: 0;` của `.site-header` theo viewport của trình duyệt.
   - **Khắc phục**: Loại bỏ thuộc tính `overflow-x: hidden;` khỏi `.page` để header dính cố định ở mép trên màn hình khi cuộn.

2. **Thẻ sản phẩm thứ 3 bị rớt hàng**:
   - **Nguyên nhân**: `.card` bị gán `box-sizing: content-box;`. Thuộc tính `flex: 0 0 calc((100% - 48px) / 3)` chỉ tính toán bề rộng vùng content, khiến mỗi thẻ bị cộng thêm 32px padding và 2px border (tổng cộng +34px/thẻ). Tổng 3 thẻ + khoảng cách gap vượt 100% bề ngang container (`100% + 102px`), đẩy thẻ thứ 3 xuống hàng mới.
   - **Khắc phục**: Loại bỏ `box-sizing: content-box;` để `.card` nhận lại `box-sizing: border-box;` từ reset toàn cục `*`, giúp cả 3 thẻ hiển thị vừa vặn trên 1 hàng ngang.

3. **Nhãn giảm giá "-20%" bị che khuất**:
   - **Nguyên nhân**: `.card img` có `position: relative; z-index: 2;` (stacking level dương), trong khi `.badge` có `position: absolute;` nhưng mặc định `z-index: auto` (stacking level 0). Do đó ảnh bị vẽ đè lên trên nhãn.
   - **Khắc phục**: Loại bỏ `position: relative;` và `z-index: 2;` khỏi `.card img` để ảnh trở về non-positioned block thông thường; nhãn `.badge` (`position: absolute;`) tự động hiển thị nổi bật trên góc ảnh.

## Các đoạn CSS bất thường có chủ đích được giữ nguyên:
- `.products` có `margin: -48px auto 48px;` và `position: relative; z-index: 1;` để nổi lên trên phần chân banner `.hero`.
- `.hero-bg` có `transform: scale(1.08);` căn chỉnh thẩm mỹ bên trong `.hero` (`overflow: hidden;`).
- `.hero-overlay` có `transform: translate(-50%, -50%);` căn giữa tuyệt đối.
- `.back-to-top` có `position: fixed; z-index: 200;` để luôn nổi trên menu và nội dung.
