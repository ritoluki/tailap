# 11 — Launch Checklist

Không public nếu còn mục bắt buộc chưa hoàn tất.

## A. Scope

- [ ] Product charter đã Approved.
- [ ] GREEN/AMBER/RED list đã chốt.
- [ ] Không có coaching, negotiation, intake case.
- [ ] Không có ads, affiliate, donation/payment.
- [ ] Không có UGC/comments/forum.
- [ ] Public launch chỉ gồm các route/slice đã được Founder duyệt.

## B. Employment/IP

- [ ] Đã đọc lại hợp đồng lao động/NDA.
- [ ] Không copy code/tài liệu/screenshot từ dự án ngân hàng.
- [ ] Không dùng dữ liệu khách hàng/case thật.
- [ ] Không công bố rule/scoring/workflow nội bộ.

## C. Privacy

- [ ] Không login/database người dùng.
- [ ] First-slice health check chỉ dùng component state trong memory.
- [ ] Reload/đóng tab xóa câu trả lời health check.
- [ ] Không có request chứa answer/amount/creditor.
- [ ] Không localStorage/IndexedDB trong first slice.
- [ ] Không analytics hoặc completion event.
- [ ] Privacy notice đúng với thực tế.
- [ ] Access-log retention được cấu hình tại hosting.
- [ ] Nếu công khai email báo lỗi, warning và mailbox retention đã được cấu hình.
- [ ] First slice không công khai địa chỉ email dự án.

## D. Security

- [ ] HTTPS.
- [ ] CSP.
- [ ] Security headers.
- [ ] Không third-party trackers.
- [ ] Dependency scan không còn issue nghiêm trọng chưa xử lý.
- [ ] Secret scan.
- [ ] Security contact hoạt động.

## E. Content

- [ ] Mỗi bài có nguồn và ngày review.
- [ ] Không có claim xóa CIC/giảm nợ.
- [ ] Không xác định nhóm nợ cá nhân.
- [ ] Không kết luận hành vi vi phạm theo case.
- [ ] Nội dung cờ bạc không mô tả cách chơi.
- [ ] Có correction policy.
- [ ] Có editorial policy.

## F. Crisis safety

- [ ] Trang urgent help hoạt động không cần JS.
- [ ] Mọi số khẩn cấp hiển thị public có nguồn chính thức và ngày xác minh.
- [ ] Không có form kể chuyện trên trang khẩn cấp.
- [ ] Nếu công khai email, auto-reply ghi rõ hộp thư không trực 24/7.
- [ ] Assessment dừng khi có urgent flag.

## G. Legal wording

- [ ] Không tự xưng tổ chức phi lợi nhuận nếu chưa có tư cách.
- [ ] Dùng “dự án cộng đồng miễn phí”.
- [ ] Bạn học luật được ghi đúng vai trò.
- [ ] Terms không hứa kết quả.
- [ ] Disclaimer không mâu thuẫn hành vi thực tế.

## H. Testing

- [ ] 5 người test hiểu đây không phải tư vấn.
- [ ] 5 người test hiểu dữ liệu nằm trên thiết bị.
- [ ] Keyboard/accessibility test.
- [ ] Mobile test.
- [ ] Health-check decision-table unit tests.
- [ ] Crisis gate test cho cả ba lựa chọn.
- [ ] Network inspection.
- [ ] Xác nhận không có feedback endpoint hoặc free-text intake.

## I. Operations

- [ ] Có owner sửa nội dung.
- [ ] Có lịch review 90 ngày.
- [ ] Có incident procedure.
- [ ] Có issue labels: legal-source, safety, privacy, correction.
- [ ] Có khả năng tắt nhanh tool hoặc gỡ địa chỉ email khỏi trang public.
- [ ] Founder đã ghi quyết định launch; trạng thái architecture planning không được dùng thay launch approval.
