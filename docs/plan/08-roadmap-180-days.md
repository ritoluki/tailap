# 08 — Roadmap 180 ngày

## Nguyên tắc

- Không code trước khi chốt ranh giới.
- Không public trước khi test wording.
- Mỗi tháng có deliverable cụ thể.
- Không đưa monetization vào roadmap 6 tháng đầu.
- Không analytics trong V1.

## Tháng 1 — Foundation & boundaries

### Tuần 1

- Chốt product charter.
- Chốt GREEN/AMBER/RED scope.
- Kiểm tra hợp đồng lao động/NDA.
- Tạo source register.

### Tuần 2

- Viết editorial policy.
- Viết privacy/security baseline.
- Viết crisis page draft.
- Chuẩn hóa vai trò cộng tác viên nghiên cứu luật.

### Tuần 3

- Lập 30 câu hỏi nghiên cứu.
- Chuẩn bị consent script.
- Tuyển 5 người đầu tiên.

### Tuần 4

- Phỏng vấn vòng 1.
- Cập nhật personas.
- Quyết định một journey duy nhất cho MVP.

**Exit criteria:** product charter đạt trạng thái “Approved for architecture planning”, first vertical slice và RED scope được ghi trong decision log. Trạng thái này không đồng nghĩa được public.

## Tháng 2 — Research & content prototype

- Hoàn thành 15–20 phỏng vấn.
- Viết 8 bài nền tảng dạng draft.
- Prototype sáu route của first vertical slice bằng Figma hoặc HTML tĩnh.
- Test comprehension với 5 người.
- Không xây database.

**Exit criteria:** ít nhất 70% người test hiểu website không tư vấn case và biết bước tiếp theo.

## Tháng 3 — Build MVP

- Sau khi được cho phép khởi tạo: setup Next.js App Router, TypeScript strict, Tailwind CSS và static export.
- Build sáu route first slice; health check chỉ dùng state trong memory.
- Build action plan và trang hỗ trợ khẩn cấp hoạt động không cần JavaScript.
- Không build inventory, calculator, export hoặc feedback endpoint trong first slice.
- Build privacy và about theo phạm vi first slice.
- Implement headers và dependency scanning.

**Exit criteria:** không có network request chứa health-check data; không localStorage/IndexedDB; CSP/HSTS được cấu hình tại hosting layer thử nghiệm.

## Tháng 4 — Content & safety review

- Người bạn học luật kiểm tra nguồn, không “phê duyệt pháp lý”.
- Review tất cả câu có từ “phải”, “được phép”, “vi phạm”, “nhóm nợ”.
- Review nội dung cờ bạc theo checklist safety.
- Accessibility test.
- Threat model và privacy test.

**Exit criteria:** mọi bài có nguồn, ngày review và disclaimer phù hợp.

## Tháng 5 — Closed beta

- 30–50 người dùng thử qua mời riêng.
- Không chạy quảng cáo.
- Không thu hồ sơ.
- Đo comprehension, completion và harmful misunderstanding.
- Theo dõi lỗi từ moderated test và issue tracker nội bộ; first slice chưa công khai email và không có feedback form.

**Exit criteria:** không có lỗi nghiêm trọng; người dùng không nghĩ dự án có thể đàm phán/xóa CIC.

## Tháng 6 — Limited public beta

- Public website.
- Chỉ công khai email báo lỗi nếu retention và warning đã được cấu hình; không có feedback endpoint.
- Publish 10–15 bài chất lượng cao thay vì nhiều bài SEO.
- Review hàng tuần trong tháng đầu.
- Công khai changelog và correction policy.

**Exit criteria:** vận hành ổn định 30 ngày, không có sự cố dữ liệu hoặc nội dung gây hại.

## Backlog sau 180 ngày — chưa cam kết

- Newsletter.
- Danh bạ nguồn hỗ trợ đã xác minh.
- Workshop miễn phí có đối tác chuyên môn.
- Analytics tối thiểu, chỉ sau quyết định AMBER mới và không thuộc V1.
- Tổ chức/pháp nhân phù hợp.

Mọi hạng mục phải quay lại AMBER review.
