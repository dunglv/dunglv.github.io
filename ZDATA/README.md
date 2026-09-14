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
- Script sẽ tạo file `ZDATA/files/<id>.enc` (nội dung đã mã hoá) và thêm 1 dòng vào
  `ZDATA/files/manifest.json` (chỉ chứa tên hiển thị, kích thước, loại file — không chứa
  nội dung hay mật khẩu).
- Commit cả `ZDATA/files/*.enc` và `manifest.json` lên repo như bình thường.
- **Không bao giờ** commit mật khẩu vào repo, README, commit message hay chat log. Gửi
  mật khẩu cho người cần tải qua kênh riêng (Zalo, Slack DM, gặp trực tiếp...).

## Cách kiểm tra giải mã cục bộ

```bash
node ZDATA/tools/decrypt.js "ZDATA/files/<id>.enc" "mat-khau" "duong/dan/output.pdf"
```

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
