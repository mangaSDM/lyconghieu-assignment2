/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

// Các phần tử DOM cần dùng
const oTimKiem = document.getElementById("o-tim-kiem");
const dsList = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const tinTieuDe = document.getElementById("tin-tieu-de");
const tinNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// F1 + F2 + F3. Hàm lọc tin và cập nhật bộ đếm, thông báo không tìm thấy
function capNhatLocVaBoDem() {
	const tuKhoa = oTimKiem.value.toLowerCase();
	const cacTin = Array.from(dsList.querySelectorAll("li"));
	let soHien = 0;

	cacTin.forEach((tin) => {
		const tieuDe = tin.querySelector("h3") ? tin.querySelector("h3").textContent : "";
		const noiDung = tin.querySelector("p") ? tin.querySelector("p").textContent : "";
		const vanBan = (tieuDe + " " + noiDung).toLowerCase();

		// Khớp khi từ khoá xuất hiện trong tiêu đề hoặc nội dung (từ khoá rỗng thì khớp tất cả)
		const khop = vanBan.includes(tuKhoa);
		if (khop) {
			tin.classList.remove("an");
			soHien++;
		} else {
			tin.classList.add("an");
		}
	});

	// Cập nhật bộ đếm
	boDem.textContent = `Đang hiển thị ${soHien}/${cacTin.length} tin`;

	// Cập nhật thông báo không tìm thấy
	if (soHien === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${oTimKiem.value}"`;
	} else {
		khongThay.classList.add("an");
	}
}

// Khởi chạy bộ đếm ngay khi tải trang
capNhatLocVaBoDem();

// F2. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup)
oTimKiem.addEventListener("keyup", capNhatLocVaBoDem);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list
dsList.addEventListener("click", (e) => {
	// Chỉ xử lý khi bấm trúng nút có class "more"
	if (!e.target.classList.contains("more")) {
		return;
	}

	const nut = e.target;
	const tin = nut.closest("li");
	if (!tin) return;

	const doanVan = tin.querySelector("p");
	if (!doanVan) return;

	if (doanVan.classList.contains("day-du")) {
		doanVan.classList.remove("day-du");
		nut.textContent = "Read more >>";
	} else {
		doanVan.classList.add("day-du");
		nut.textContent = "Thu gọn <<";
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list
nutDang.addEventListener("click", () => {
	const tieuDeVal = tinTieuDe.value.trim();
	const noiDungVal = tinNoiDung.value.trim();

	// Kiểm tra nếu tiêu đề hoặc nội dung là chuỗi rỗng
	if (tieuDeVal === "" || noiDungVal === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	// Tạo <li> mới có cấu trúc chuẩn
	const liMoi = document.createElement("li");

	const spanTime = document.createElement("span");
	spanTime.className = "time";
	spanTime.textContent = homNay();

	const h3 = document.createElement("h3");
	h3.textContent = tinTieuDe.value;

	const p = document.createElement("p");
	p.textContent = tinNoiDung.value;

	const btnMore = document.createElement("button");
	btnMore.type = "button";
	btnMore.className = "more";
	btnMore.textContent = "Read more >>";

	liMoi.appendChild(spanTime);
	liMoi.appendChild(h3);
	liMoi.appendChild(p);
	liMoi.appendChild(btnMore);

	// Chèn vào đầu danh sách #list
	dsList.prepend(liMoi);

	// Xoá trắng hai ô nhập và thông báo lỗi
	tinTieuDe.value = "";
	tinNoiDung.value = "";
	baoLoi.textContent = "";

	// Cập nhật lại bộ lọc và bộ đếm (tuân theo từ khoá đang có trong ô tìm kiếm)
	capNhatLocVaBoDem();
});
