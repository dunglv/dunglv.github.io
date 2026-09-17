# ZData - Kho dữ liệu cá nhân trên GitHub Pages

Trang tĩnh cho phép chia sẻ file qua GitHub Pages nhưng file được **mã hoá AES-256-GCM**
trước khi commit lên repo. Người xem trang cần nhập đúng mật khẩu thì trình duyệt mới
giải mã và tải file gốc về được.

## Cách thêm file mới

Chạy script Node cục bộ (không cần cài thêm package nào, chỉ dùng module có sẵn của Node):

```bash
node ZDATA/tools/encrypt.js "duong/dan/file-goc.pdf" "mat-khau-cua-ban" "Tên hiển thị (tuỳ chọn)"
```

- Nếu bỏ trống mật khẩu, script sẽ hỏi qua terminal.
- File sẽ được **tự động chia thành các chunk ~20MB** trước khi mã hoá, ghi ra
  `ZDATA/files/<id>-0.enc`, `<id>-1.enc`, ... (file nhỏ dưới 20MB chỉ có đúng 1 chunk).
  Đồng thời thêm 1 dòng vào `ZDATA/files/manifest.json` (chỉ chứa tên hiển thị, kích
  thước, loại file, danh sách chunk — không chứa nội dung hay mật khẩu).
- Commit **tất cả** các chunk `ZDATA/files/*.enc` và `manifest.json` lên repo như bình
  thường bằng `git add`/`git commit` **thông thường** — không dùng Git LFS (xem lý do ở
  mục dưới).
- **Không bao giờ** commit mật khẩu vào repo, README, commit message hay chat log. Gửi
  mật khẩu cho người cần tải qua kênh riêng (Zalo, Slack DM, gặp trực tiếp...).

## Vì sao không dùng Git LFS cho file lớn?

GitHub Pages **không hỗ trợ serve nội dung Git LFS** — khi build site, Pages chỉ trả về
đoạn pointer text (vài trăm byte) thay vì nội dung nhị phân thật, nên trang web sẽ tải về
"rác" thay vì file mã hoá thật và giải mã sẽ luôn báo lỗi. Vì vậy `encrypt.js` chủ động
chia nhỏ file thành nhiều chunk dưới ngưỡng cảnh báo 50MB / ngưỡng cứng 100MB của GitHub,
để mỗi chunk vẫn là 1 **blob git bình thường** (không qua LFS) mà trang web tải và ghép
lại được. Lưu ý: git vẫn không lý tưởng cho file nhị phân lớn hay thay đổi liên tục — mỗi
lần re-upload một file lớn, các chunk cũ vẫn nằm mãi trong lịch sử git, làm repo phình to
dần theo thời gian.

## Cách kiểm tra giải mã cục bộ

```bash
node ZDATA/tools/decrypt.js "<id-hoặc-tên-file-gốc>" "mat-khau" "duong/dan/output.pdf"
```

Script tự tra `manifest.json` để tìm đúng danh sách chunk theo `id` (hoặc theo tên file
gốc/tên hiển thị), giải mã và ghép lại thành file gốc.

## Cách tải file trên trang web

Mở `https://<username>.github.io/ZDATA/`, nhập mật khẩu tương ứng, bấm "Tải xuống".
Nếu sai mật khẩu, trình duyệt sẽ báo lỗi giải mã (không tải được file rác).

## Giới hạn bảo mật cần biết

- Đây là **static site**, không có server kiểm tra quyền — ai cũng tải được *file mã hoá*
  (`.enc`), nhưng không đọc được nội dung nếu không có mật khẩu đúng.
- Mật khẩu được suy ra key bằng PBKDF2-SHA256 100.000 vòng lặp, đủ chậm để chống brute-force
  thông thường, nhưng **mật khẩu yếu vẫn có thể bị dò ra** nếu ai đó quyết tâm và có thời
  gian/tài nguyên tính toán. Dùng mật khẩu đủ dài (khuyến nghị ≥ 12 ký tự, không phải từ
  trong từ điển).
- `manifest.json` để công khai tên file, kích thước, loại file (không mã hoá phần metadata
  này) để trang web hiển thị danh sách — nếu tên file/loại file bản thân đã nhạy cảm, hãy
  đặt `displayName` chung chung khi chạy `encrypt.js`.
- Đây là mức bảo mật "đủ dùng" để chặn người xem ngẫu nhiên tải nhầm dữ liệu cá nhân/nội bộ,
  **không phù hợp** cho dữ liệu tuyệt mật (thông tin tài chính, giấy tờ tuỳ thân...). Với dữ
  liệu thật sự nhạy cảm, nên dùng dịch vụ có backend kiểm soát quyền truy cập thay vì static
  site.
