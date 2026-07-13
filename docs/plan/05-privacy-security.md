# 05 — Privacy & Security Baseline

## 1. Nguyên tắc

- Data minimization.
- Local processing first.
- Không thu vì “có thể cần sau này”.
- Không dùng dữ liệu cho quảng cáo hoặc profiling.
- Không bán/chia sẻ lead.
- Người dùng luôn có cách xóa dữ liệu local.

## 2. Data map V1

| Dữ liệu | Nơi xử lý | Lưu server? | Retention |
|---|---|---:|---|
| Health check first slice | Component state trong trình duyệt | Không | Đến khi reload hoặc đóng tab |
| Debt inventory ở slice tương lai | IndexedDB sau opt-in | Không | Đến khi người dùng xóa |
| Nội dung bài viết | CDN/static | Có | Theo version |
| Access log kỹ thuật | Static hosting | Tối thiểu | Chỉ chọn provider cho phép cấu hình retention; thời hạn phải khóa trước launch |
| Email báo lỗi do người dùng chủ động gửi | Hộp thư dự án | Có giới hạn | Chính sách retention phải khóa trước khi công khai email |

First slice không có form hoặc endpoint nhận free text.
First slice cũng chưa công khai địa chỉ email dự án.

## 3. Dữ liệu không được nhận

- CCCD/hộ chiếu.
- Số hợp đồng.
- Số tài khoản/thẻ.
- Mã OTP/mật khẩu.
- Báo cáo CIC.
- Sao kê.
- Hồ sơ sức khỏe.
- Ghi âm/tin nhắn.
- Danh sách người thân.
- Ảnh giấy tờ.

## 4. In-memory và local storage UX

### First slice

- Health check chỉ dùng component state trong memory.
- Hiển thị rõ: “Câu trả lời sẽ bị xóa khi bạn tải lại trang hoặc đóng tab.”
- Không dùng localStorage, IndexedDB, cookie hoặc URL để lưu câu trả lời.

### Debt inventory ở slice tương lai

- Dùng IndexedDB và chỉ lưu sau opt-in rõ ràng.
- Không có trường ghi chú tự do.
- Có schema versioning và biểu tượng trạng thái local-only.
- Có nút xóa toàn bộ, cảnh báo thiết bị dùng chung và confirm phù hợp.
- Không tự động backup hoặc cloud sync.
- Ưu tiên print stylesheet; chưa hỗ trợ JSON hoặc PDF generator.

## 5. Technical controls

- TLS/HTTPS.
- Content Security Policy nghiêm ngặt.
- `Referrer-Policy: strict-origin-when-cross-origin` hoặc chặt hơn.
- `Permissions-Policy` tắt camera, microphone, geolocation trong V1.
- `X-Content-Type-Options: nosniff`.
- Không iframe từ nguồn không kiểm soát.
- Không CDN script bên thứ ba nếu có thể bundle local.
- Secret scanning và dependency scanning.
- First slice không có feedback endpoint, request body hoặc cơ chế chống spam phía server.
- Không third-party error reporting nếu có thể nhận URL, input hoặc dữ liệu hành vi.

## 6. Analytics

Không analytics trong V1, bao gồm closed beta và first slice. Không thu completion event trong sản phẩm.

Việc đo lường chỉ dùng moderated usability test, phỏng vấn và tổng hợp thủ công không định danh.

Nếu sau V1 cần xem xét analytics:

- ưu tiên dữ liệu tổng hợp, tự host hoặc privacy-preserving;
- không gửi answer assessment, số tiền, ngày đến hạn hoặc nguyên nhân nợ;
- không dùng session replay/heatmap;
- cập nhật privacy notice và decision log trước khi bật.

## 7. Incident response tối thiểu

1. Tắt form/tính năng nghi ngờ.
2. Bảo toàn log kỹ thuật cần thiết, không sao chép dữ liệu lan rộng.
3. Xác định loại dữ liệu và người nhận ngoài dự kiến.
4. Xóa/tắt quyền truy cập không cần thiết.
5. Ghi incident timeline.
6. Đánh giá nghĩa vụ thông báo theo pháp luật hiện hành.
7. Thông báo minh bạch cho người bị ảnh hưởng khi phù hợp.
8. Chỉ mở lại sau khi có biện pháp phòng ngừa.

## 8. Privacy notice phải trả lời

- Dự án là ai và liên hệ thế nào.
- Dữ liệu nào được/không được thu.
- Công cụ nào xử lý tại trình duyệt.
- Hosting có log gì.
- Access log được giữ bao lâu và cách hosting provider cấu hình retention.
- Email báo lỗi được giữ bao lâu nếu địa chỉ email được công khai.
- Bên thứ ba nào nhận dữ liệu.
- Cách yêu cầu xóa/sửa.
- Ngày cập nhật chính sách.

## 9. Red lines

- Không yêu cầu người dùng chứng minh họ mắc nợ.
- Không dùng email để xây hồ sơ tài chính.
- Không upload ảnh/hợp đồng trong V1.
- Không dùng CAPTCHA thu thập hành vi quá mức nếu có lựa chọn nhẹ hơn.
- Không gửi thông tin tài chính vào công cụ AI bên thứ ba.
