# Báo cáo thay đổi Bài tập 2

## 1. Bài 2a (js/bai-a-tin-tuc.js)
Các vị trí điền vào chỗ trống:
- (1): parse
- (2): push
- (3): unshift
- (4): pop
- (5): 6
- (6): shift
- (7): 5
- (8): ["tac gia"]
- (9): delete
- (10): undefined
- (11): [GHIM] Mẫu thiệp cưới mùa thu
- (12): filter
- (13): 4
- (14): map
- (15): toUpperCase
- (16): bai.views
- (17): 0
- (18): 2600
- (19): (B)
- (20): >
- (21): 2
- (22): undefined
- (23): of
- (24): the
- (25): 2
- (26): constructor
- (27): this
- (28): new
- (29): stringify
- (30): không

## 2. Bài 2b (js/bai-b-gio-hang.js)
Nội dung hoàn thiện class GioHang và hàm napGioHang:
- them(sanPham, soLuong): Kiểm tra soLuong là số nguyên lớn hơn 0. Nếu sản phẩm đã có thì cộng dồn số lượng, chưa có thì tạo dòng mới với bản sao độc lập (5 thuộc tính: id, ten, loai, gia, soLuong). Giữ nguyên DANH_MUC và không tham chiếu đối tượng bên ngoài. Trả về true nếu thành công, false nếu số lượng không hợp lệ.
- xoa(id): Tìm dòng theo id và xóa khỏi mảng dsDong. Trả về true nếu có xóa, false nếu không tìm thấy.
- tongTien(): Tính tổng tiền (gia * soLuong) của các dòng bằng reduce. Giỏ rỗng trả về 0.
- thongKeTheoLoai(): Thống kê tổng tiền theo từng loại sản phẩm. Giỏ rỗng trả về object rỗng {}.
- dongDatNhat(): Trả về bản sao của dòng có thành tiền lớn nhất kèm thuộc tính thanhTien. Nếu bằng nhau lấy dòng đứng trước. Giỏ rỗng trả về null.
- layDanhSach(): Trả về mảng bản sao của các dòng, mỗi dòng có thêm thuộc tính thanhTien. Thay đổi trên mảng trả về không ảnh hưởng giỏ hàng.
- xuatJSON(): Trả về chuỗi JSON của mảng các dòng với đúng 5 thuộc tính (id, ten, loai, gia, soLuong), không chứa thanhTien.
- napGioHang(chuoiJSON): Hàm ngoài class, parse chuỗi JSON và nạp vào đối tượng GioHang mới độc lập, dùng được đầy đủ các phương thức.

## 3. Source code đã thay đổi

### File js/bai-a-tin-tuc.js
```javascript
/* BÀI A — ĐIỀN VÀO CHỖ TRỐNG: Trang News lấy dữ liệu từ JSON
   Thay mỗi ___(n)___ bằng đáp án của bạn.
   - Chỗ trống nằm trong CODE: điền tên phương thức / từ khoá / toán tử / biểu thức còn thiếu.
   - Chỗ trống nằm trong CHÚ THÍCH ("in ra: ..."): điền kết quả bạn DỰ ĐOÁN, chưa chạy vội.
   File chỉ chạy được khi mọi chỗ trống trong code đã được điền. */

// Máy chủ gửi về MỘT CHUỖI JSON chứa 5 bài viết.
const duLieuTho = '[' +
	'{"id":1,"title":"Khai trương xưởng in mới","date":"01-03-2012","views":320,"tags":["su kien","xuong in"],"draft":false},' +
	'{"id":2,"title":"Mẫu thiệp cưới mùa thu","date":"15-03-2012","views":870,"tags":["thiep cuoi","mau moi"],"draft":false},' +
	'{"id":3,"title":"Hướng dẫn chọn giấy cotton","date":"02-04-2012","views":540,"tags":["huong dan","giay"],"draft":false},' +
	'{"id":4,"title":"Bảng giá 2013","date":"20-04-2012","views":0,"tags":["bang gia"],"draft":true},' +
	'{"id":5,"title":"Ưu đãi in danh thiếp","date":"05-05-2012","views":870,"tags":["khuyen mai","mau moi"],"draft":false}' +
	']';

// ---------- Phần 1: JSON → mảng object ----------
const dsBai = JSON.parse(duLieuTho);

// ---------- Phần 2: Thêm / bớt phần tử ----------
// Thêm vào CUỐI mảng:
dsBai.push({ id: 6, title: "Tuyển thực tập sinh", date: "10-05-2012", views: 45, tags: ["tuyen dung"], draft: true });
// Thêm vào ĐẦU mảng:
dsBai.unshift({ id: 0, title: "Thông báo nghỉ lễ", date: "30-04-2012", views: 120, tags: ["thong bao"], draft: false });
// Lấy ra và xoá phần tử CUỐI:
const baiCuoi = dsBai.pop();
console.log(baiCuoi.id);             // in ra: 6
// Lấy ra và xoá phần tử ĐẦU:
const baiDau = dsBai.shift();
console.log(dsBai.length);           // in ra: 5

// ---------- Phần 3: Thuộc tính của object ----------
const baiMot = dsBai[0];
baiMot.noiBat = true;                          // thêm thuộc tính
baiMot["tac gia"] = "Ban biên tập";              // thêm thuộc tính có khoá là  tac gia  (có dấu cách)
delete baiMot.noiBat;                       // xoá thuộc tính noiBat
console.log(baiMot.noiBat);          // in ra: undefined

// ---------- Phần 4: Kiểu tham chiếu ----------
const baiGhim = dsBai[1];
baiGhim.title = "[GHIM] " + baiGhim.title;
console.log(dsBai[1].title);         // in ra: [GHIM] Mẫu thiệp cưới mùa thu

// ---------- Phần 5: filter / map / reduce ----------
// Chỉ giữ các bài ĐÃ ĐĂNG (draft là false):
const daDang = dsBai.filter(bai => bai.draft === false);
console.log(daDang.length);          // in ra: 4

// Mảng mới gồm tiêu đề viết HOA:
const dsTieuDe = daDang.map(bai => bai.title.toUpperCase());

// Tổng lượt xem:
const tongLuotXem = daDang.reduce((tong, bai) => tong + bai.views, 0);
console.log(tongLuotXem);            // in ra: 2600
// Nếu BỎ đối số thứ hai (17) của reduce thì tongLuotXem là:
//   (A) vẫn là con số đúng   (B) một chuỗi bắt đầu bằng "[object Object]"   (C) báo TypeError
//   → (B)

// Bài nhiều lượt xem nhất; nếu bằng nhau thì giữ bài ĐỨNG TRƯỚC trong mảng:
const baiHot = daDang.reduce((max, bai) => bai.views > max.views ? bai : max);
console.log(baiHot.id);              // in ra: 2

// Callback của map KHÔNG return:
const thu = daDang.map(bai => { bai.views + 1; });
console.log(thu[0]);                 // in ra: undefined

// ---------- Phần 6: Đếm số bài theo thẻ (tag) ----------
const demThe = {};
daDang.forEach(bai => {
	for (const the of bai.tags) {
		demThe[the] = (demThe[the] || 0) + 1;
	}
});
console.log(demThe["mau moi"]);      // in ra: 2

// ---------- Phần 7: Class ----------
class BaiViet {
	constructor(duLieu) {
		this.title = duLieu.title;
		this.date = duLieu.date;
		this.views = duLieu.views;
	}
	tomTat() {
		return `${this.date} — ${this.views} lượt xem`;
	}
}
const dsBaiViet = daDang.map(duLieu => new BaiViet(duLieu));

// ---------- Phần 8: Object → JSON ----------
const guiDi = JSON.stringify(dsBaiViet[0]);
console.log(guiDi);
// Chuỗi guiDi có chứa phương thức tomTat không? (có / không)  → không

// ---------- Hiển thị ----------
veDanhSachTin(dsBaiViet);
hienThi(`Đã đăng: ${daDang.length} bài — tổng ${tongLuotXem} lượt xem — bài hot: #${baiHot.id}`);
hienThi(`Tiêu đề: ${dsTieuDe.join(" | ")}`);
for (const the in demThe) {
	hienThi(`#${the}: ${demThe[the]} bài`);
}
```

### File js/bai-b-gio-hang.js
```javascript
/* BÀI B — VIẾT CODE: Giỏ hàng của xưởng in
   Hoàn thiện class GioHang và hàm napGioHang.
   Không đổi tên class, tên phương thức, tên hàm; không sửa phần "DỮ LIỆU ĐÃ CHO". */

// ---------- DỮ LIỆU ĐÃ CHO (không sửa) ----------
const DANH_MUC = [
	{ id: "TC01", ten: "Thiệp cưới cotton", loai: "thiep cuoi", gia: 1500 },
	{ id: "TC02", ten: "Thiệp cưới kraft", loai: "thiep cuoi", gia: 900 },
	{ id: "DT01", ten: "Danh thiếp ép kim", loai: "danh thiep", gia: 1200 },
	{ id: "PB01", ten: "Phong bì lót lụa", loai: "phu kien", gia: 500 }
];

// ---------- PHẦN BẠN VIẾT ----------
class GioHang {
	constructor() {
		// Mỗi dòng của giỏ là một object { id, ten, loai, gia, soLuong }.
		this.dsDong = [];
	}

	// 1. Thêm sản phẩm; trả về true nếu thêm được, false nếu soLuong không hợp lệ.
	them(sanPham, soLuong) {
		if (typeof soLuong !== "number" || !Number.isInteger(soLuong) || soLuong <= 0) {
			return false;
		}
		const dongHienTai = this.dsDong.find(dong => dong.id === sanPham.id);
		if (dongHienTai) {
			dongHienTai.soLuong += soLuong;
		} else {
			this.dsDong.push({
				id: sanPham.id,
				ten: sanPham.ten,
				loai: sanPham.loai,
				gia: sanPham.gia,
				soLuong: soLuong
			});
		}
		return true;
	}

	// 2. Xoá dòng có id tương ứng; trả về true nếu có xoá, false nếu không tìm thấy.
	xoa(id) {
		const viTri = this.dsDong.findIndex(dong => dong.id === id);
		if (viTri !== -1) {
			this.dsDong.splice(viTri, 1);
			return true;
		}
		return false;
	}

	// 3. Tổng tiền cả giỏ.
	tongTien() {
		return this.dsDong.reduce((tong, dong) => tong + dong.gia * dong.soLuong, 0);
	}

	// 4. Object thống kê: { "<loai>": tổng tiền của loại đó, ... }.
	thongKeTheoLoai() {
		const ketQua = {};
		for (const dong of this.dsDong) {
			ketQua[dong.loai] = (ketQua[dong.loai] || 0) + dong.gia * dong.soLuong;
		}
		return ketQua;
	}

	// 5. Dòng có thành tiền lớn nhất (bản sao, có thêm thanhTien); null nếu giỏ rỗng.
	dongDatNhat() {
		if (this.dsDong.length === 0) {
			return null;
		}
		let dongMax = this.dsDong[0];
		let maxTien = dongMax.gia * dongMax.soLuong;
		for (let i = 1; i < this.dsDong.length; i++) {
			const thanhTien = this.dsDong[i].gia * this.dsDong[i].soLuong;
			if (thanhTien > maxTien) {
				maxTien = thanhTien;
				dongMax = this.dsDong[i];
			}
		}
		return {
			id: dongMax.id,
			ten: dongMax.ten,
			loai: dongMax.loai,
			gia: dongMax.gia,
			soLuong: dongMax.soLuong,
			thanhTien: maxTien
		};
	}

	// 6. Mảng BẢN SAO các dòng, mỗi dòng có thêm thuộc tính thanhTien.
	layDanhSach() {
		return this.dsDong.map(dong => ({
			id: dong.id,
			ten: dong.ten,
			loai: dong.loai,
			gia: dong.gia,
			soLuong: dong.soLuong,
			thanhTien: dong.gia * dong.soLuong
		}));
	}

	// 7. Chuỗi JSON của mảng các dòng.
	xuatJSON() {
		const ds = this.dsDong.map(dong => ({
			id: dong.id,
			ten: dong.ten,
			loai: dong.loai,
			gia: dong.gia,
			soLuong: dong.soLuong
		}));
		return JSON.stringify(ds);
	}
}

// 8. Tạo lại một GioHang từ chuỗi JSON do xuatJSON() sinh ra.
function napGioHang(chuoiJSON) {
	const gio = new GioHang();
	if (!chuoiJSON) {
		return gio;
	}
	try {
		const danhSach = JSON.parse(chuoiJSON);
		if (Array.isArray(danhSach)) {
			for (const dong of danhSach) {
				gio.dsDong.push({
					id: dong.id,
					ten: dong.ten,
					loai: dong.loai,
					gia: dong.gia,
					soLuong: dong.soLuong
				});
			}
		}
	} catch (e) {
	}
	return gio;
}

// ---------- CHẠY THỬ (không sửa) ----------
const gio = new GioHang();
gio.them(DANH_MUC[0], 100);
gio.them(DANH_MUC[3], 200);
gio.them(DANH_MUC[0], 50);
veGioHang(gio.layDanhSach(), gio.tongTien());
console.table(gio.layDanhSach());
hienThi(`JSON gửi lên máy chủ: ${gio.xuatJSON()}`);
```
