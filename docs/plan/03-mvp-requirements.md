# 03 — MVP Product Requirements

**Trạng thái:** Approved for first-slice scaffold  
**Không đồng nghĩa:** Approved for public launch

## 1. Mục tiêu release

Tái Lập được triển khai theo các vertical slice. First vertical slice giúp người dùng hoàn thành hai việc mà không giao dữ liệu cho dự án:

1. nhận diện tín hiệu chung bằng health check deterministic chạy tại trình duyệt;
2. nhận kế hoạch hành động chung hoặc chuyển sang hỗ trợ khẩn cấp.

Debt inventory, calculator và export không thuộc first slice.

## 2. First vertical slice

### Route

```text
/
/bat-dau
/ke-hoach-hanh-dong
/ho-tro-khan-cap
/quyen-rieng-tu
/ve-du-an
```

### Nội dung

- Trang chủ.
- Bắt đầu khi nhận thấy không đủ khả năng thanh toán.
- Những việc không nên làm trong 24 giờ đầu.
- Dấu hiệu vay mới để trả nợ cũ.
- Chuẩn bị trước khi liên hệ tổ chức tín dụng qua kênh chính thức.
- Hỗ trợ khẩn cấp.
- Quyền riêng tư.
- Giới thiệu dự án.

### Không có trong first slice

- localStorage hoặc IndexedDB.
- Debt inventory.
- Calculator.
- Export.
- Feedback form hoặc endpoint nhận free text.
- Analytics hoặc completion event.
- Backend API, database, authentication, CMS, AI hoặc third-party scripts.

## 3. FR-01 — Trang chủ

### Nội dung

- Tên đầy đủ: “Tái Lập – Dự án cộng đồng hỗ trợ phục hồi tài chính”.
- Trấn an: “Bạn không cần gửi giấy tờ để bắt đầu.”
- Định vị rõ đây là dự án cộng đồng miễn phí, không phải dịch vụ tư vấn hoặc xử lý nợ.
- Lối vào “Bắt đầu” cho người đang hoặc dự đoán sắp không đủ khả năng thanh toán.
- Đường dẫn hỗ trợ khẩn cấp tách biệt và luôn dễ nhận biết.
- Không dùng hình ảnh đe dọa, công an, tòa án hoặc đồng hồ đếm ngược.

### Acceptance criteria

- Không có form danh tính.
- Không có CTA “nhận tư vấn”.
- Disclaimer hiển thị trước CTA chính.
- Không có request chứa dữ liệu hành vi hoặc câu trả lời.

## 4. FR-02 — Health check tại `/bat-dau`

### Nguyên tắc

- Chạy hoàn toàn phía client.
- Chỉ dùng component state trong memory.
- Reload hoặc đóng tab sẽ xóa toàn bộ câu trả lời.
- Không dùng scoring, machine learning hoặc AI.
- Không gửi hoặc ghi câu trả lời vào server, URL, log hay analytics.
- Không xác định CIC, nguy cơ kiện tụng, kết quả đàm phán hoặc chẩn đoán tâm lý.
- Không hỏi tên chủ nợ, số tiền chính xác, CCCD, CIC, số hợp đồng hoặc dữ liệu định danh.

### Crisis gate

Câu hỏi làm việc:

> Ngay lúc này, bạn có cảm thấy bản thân hoặc người khác không an toàn không?

Lựa chọn:

- Có hoặc tôi không chắc.
- Không.
- Tôi không muốn trả lời.

Hành vi:

- “Có hoặc tôi không chắc”: dừng health check, dừng nội dung tài chính và hiển thị nội dung hỗ trợ khẩn cấp.
- “Tôi không muốn trả lời”: hiển thị đường dẫn hỗ trợ nổi bật nhưng vẫn cho phép tiếp tục.
- Không lưu hoặc gửi câu trả lời.

### Kết quả được phép

1. “Cần hỗ trợ khẩn cấp”.
2. “Có dấu hiệu vòng xoáy nợ”.
3. “Cần hành động sớm”.
4. “Tiếp tục theo dõi và chuẩn bị”.

Thứ tự ưu tiên:

1. Crisis/safety signal.
2. HC-02 = “Có”: có dấu hiệu vòng xoáy nợ.
3. HC-03 = “Không”: cần hành động sớm, ưu tiên nhu cầu thiết yếu.
4. HC-04 = “Có”: cần hành động sớm.
5. HC-03 hoặc HC-04 = “Tôi không chắc”: cần hành động sớm.
6. Không có điều kiện trên: tiếp tục theo dõi và chuẩn bị.

Bảng câu hỏi, luật quyết định và test cases nằm tại `13-health-check-decision-table.md`.

Kết quả render ngay trong `/bat-dau`. Nút “Xem bước tiếp theo” cuộn đến action plan tương ứng trên cùng trang. Không truyền answer, result hoặc state qua URL và không lưu vào localStorage, IndexedDB hoặc cookie. `/ke-hoach-hanh-dong` là trang nội dung chung và không nhận dữ liệu từ health check.

## 5. FR-03 — Kế hoạch hành động chung

Trang `/ke-hoach-hanh-dong` không đọc câu trả lời health check, không nhận query parameter và không tạo kế hoạch cá nhân hóa.

### Cần hỗ trợ khẩn cấp

- Dừng nội dung tài chính.
- Tìm hỗ trợ trực tiếp ngay.
- Liên hệ một người đáng tin cậy.
- Không tạo cảm giác dự án có nhân sự theo dõi 24/7.

### Có dấu hiệu vòng xoáy nợ

- Không vay thêm chỉ để trả khoản hiện có.
- Không cố gỡ bằng cờ bạc, đầu cơ hoặc khoản vay rủi ro hơn.
- Giữ lại nhu cầu sống thiết yếu.
- Liệt kê các khoản đến hạn.
- Liên hệ tổ chức tín dụng qua kênh chính thức.
- Cảnh báo dịch vụ xóa CIC hoặc cam kết giảm nợ.

### Cần hành động sớm

- Kiểm tra ngày đến hạn và số tiền phải thanh toán.
- Tách chi phí thiết yếu.
- Không tạo thêm khoản vay trước khi hiểu tổng nghĩa vụ.
- Chuẩn bị câu hỏi để liên hệ tổ chức tín dụng.
- Không đưa ra dự đoán pháp lý hoặc kết quả đàm phán.

### Tiếp tục theo dõi và chuẩn bị

- Ghi lại ngày đến hạn.
- Theo dõi khả năng chi trả.
- Chú ý dấu hiệu vay mới trả nợ cũ.
- Làm lại health check khi tình trạng thay đổi.

Copy chỉ là thông tin giáo dục chung, không cá nhân hóa theo số tiền, tổ chức tín dụng hoặc hợp đồng.

### Chuẩn bị liên hệ

Cung cấp danh sách câu hỏi chung, không phải thư đàm phán:

- Tổng số tiền và cấu phần hiện tại được xác nhận qua kênh nào?
- Tài liệu nào được tổ chức yêu cầu qua kênh chính thức?
- Lựa chọn hỗ trợ nào đang được tổ chức công bố?
- Thỏa thuận được xác nhận bằng văn bản thế nào?
- Kênh khiếu nại chính thức là gì?

Không sinh email, đơn, kịch bản thương lượng hoặc khuyến nghị dựa trên hồ sơ cá nhân.

## 6. FR-04 — Hỗ trợ khẩn cấp

- Trang `/ho-tro-khan-cap` hoạt động khi JavaScript bị tắt.
- Không có form kể chuyện, chat hoặc lời hứa có người trực.
- Không yêu cầu chi tiết phương thức tự hại.
- Không hardcode hotline chưa được kiểm tra bằng nguồn chính thức.
- Nội dung chuyển tuyến phải có ngày kiểm tra và owner.
- Website không tạo cảm giác dự án có nhân sự theo dõi 24/7.

## 7. FR-05 — Quyền riêng tư và giới thiệu dự án

`/quyen-rieng-tu` phải giải thích:

- Health check chỉ dùng state trong memory.
- Reload hoặc đóng tab sẽ xóa câu trả lời.
- Không có analytics, database người dùng hoặc tracking trong V1.
- Static hosting có thể tạo access log kỹ thuật; chỉ chọn provider cho phép cấu hình retention.
- Không gửi thông tin vụ việc qua email dự án.
- First slice chưa công khai địa chỉ email dự án.

`/ve-du-an` phải dùng cụm “dự án cộng đồng miễn phí” và không tự xưng tổ chức phi lợi nhuận.

## 8. V1 complete — các slice sau

Các capability sau thuộc V1 complete nhưng không thuộc first slice:

- Nội dung tĩnh về cờ bạc/đầu cơ, người thân, cảnh báo lừa đảo và nguồn chính thức.
- Kế hoạch chung 7 ngày và 30 ngày.
- Debt inventory local-only.
- Nút xóa toàn bộ dữ liệu local.
- Print stylesheet cho bản tóm tắt local.
- Các trang editorial policy, terms, corrections và security.

### Debt inventory định hướng

- Dự kiến dùng IndexedDB.
- Chỉ lưu sau khi người dùng opt-in.
- Không cloud sync.
- Không có trường ghi chú tự do.
- Có schema versioning, shared-device warning và nút xóa toàn bộ.
- Không export JSON và không dùng PDF generator trong phạm vi đã duyệt.

## 9. Future/AMBER capabilities

Mọi hạng mục sau cần quyết định mới và không thuộc V1:

- Analytics.
- Newsletter.
- Tài khoản, cloud sync hoặc dashboard.
- Referral directory.
- Workshop.
- Donation/tài trợ.
- AI tìm kiếm nội dung.
- Calculator, chỉ sau khi có decision mới duyệt công thức, assumptions, test cases, rounding rules, disclaimer và review nguy cơ gây quyết định sai.

Chưa có calculator nào được chấp thuận để xây.

Chatbot, AI advice, upload, forum/comments, payment, affiliate, coaching, bank integration và CIC integration vẫn là RED trong V1.

## 10. Non-functional requirements

### Accessibility

- WCAG 2.2 AA mục tiêu.
- Keyboard-first.
- Font hệ thống hoặc font được bundle local; không external fonts.
- Không dùng màu đơn lẻ để biểu đạt mức nguy cơ.
- Không animation gây căng thẳng.
- Trang hỗ trợ khẩn cấp hoạt động không cần JavaScript.

### Performance

- Nội dung cốt lõi hoạt động khi JavaScript lỗi; health check hiển thị fallback dẫn đến kế hoạch chung và hỗ trợ khẩn cấp.
- Lighthouse performance mục tiêu >= 90 trên mobile phổ thông.
- Không video autoplay.
- Không PWA hoặc service worker.

### Security và privacy

- HTTPS.
- CSP và HSTS tại hosting layer.
- Custom security headers.
- Dependencies được pin/scan sau khi được phép khởi tạo dự án.
- Không third-party scripts hoặc analytics.
- Automated network test phải chứng minh không có câu trả lời health check rời khỏi browser.

### Localization

- Route công khai dùng tiếng Việt không dấu như danh sách đã duyệt.
- Tiếng Việt phổ thông, câu ngắn.
- Giải thích thuật ngữ ngay tại chỗ.
- Không dùng giọng ngân hàng/collector.

## 11. Kiến trúc định hướng

- Next.js App Router.
- TypeScript strict.
- Tailwind CSS.
- Static export.
- Package manager: npm.
- Content format first slice: Markdown, không MDX.
- System font, không external font.
- Không backend API, database, authentication, CMS, AI, third-party scripts, external fonts hoặc service worker.

Chi tiết và hệ quả kỹ thuật nằm tại `../architecture/ADR-001-mvp-architecture.md`. Hosting provider, domain và phiên bản dependency chưa được chọn; hosting/domain không phải blocker cho local scaffold.
