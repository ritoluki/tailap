# Tái Lập – Dự án cộng đồng hỗ trợ phục hồi tài chính

**Phiên bản:** 0.1  
**Ngày chốt:** 13/07/2026  
**Trạng thái:** Approved for first-slice scaffold – chưa phê duyệt public launch  
**Repository/package identifier:** `tailap`  

## 1. Mục tiêu của bộ tài liệu

Bộ tài liệu này giúp nhóm nhỏ bắt đầu Tái Lập, một website cộng đồng hỗ trợ người đang gặp khó khăn vì nợ tiêu dùng, chậm trả, vay chồng vay hoặc nợ liên quan đến cờ bạc/đầu cơ.

Dự án giai đoạn đầu:

- miễn phí;
- không quảng cáo, affiliate hoặc nhận phí theo vụ việc;
- không tư vấn pháp lý, tài chính hay tâm lý theo từng trường hợp;
- không đại diện người dùng làm việc với ngân hàng hoặc tổ chức tín dụng;
- không nhận hồ sơ, hợp đồng, CCCD, CIC, sao kê hoặc bằng chứng cá nhân;
- không lưu dữ liệu khoản nợ trên máy chủ;
- không analytics, session replay, heatmap, fingerprinting hoặc behavioral tracking trong V1;
- không mở diễn đàn, bình luận công khai hoặc tố cáo doanh nghiệp/cá nhân;
- chỉ cung cấp kiến thức chung, công cụ tự quản lý và hướng dẫn tìm đúng nguồn hỗ trợ.

## 2. Cách đọc

1. Đọc `00-product-charter.md` để hiểu sứ mệnh và thước đo thành công.
2. Đọc `01-legal-safety-boundaries.md` trước khi thiết kế tính năng.
3. Dùng `03-mvp-requirements.md` làm product requirements document cho V1.
4. Dùng `AGENTS.md` làm ràng buộc bắt buộc cho Codex/AI coding agent.
5. Trước mỗi bài viết, dùng `content-article-template.md`.
6. Trước public beta, hoàn tất `11-launch-checklist.md`.

## 3. Danh mục tài liệu

| File | Mục đích |
|---|---|
| `AGENTS.md` | Quy tắc bắt buộc cho AI coding agent và contributor |
| `00-product-charter.md` | Sứ mệnh, phạm vi, nguyên tắc và tiêu chí thành công |
| `01-legal-safety-boundaries.md` | Ranh giới hoạt động để tránh biến thành dịch vụ tư vấn/xử lý nợ |
| `02-personas-and-journeys.md` | Nhóm người dùng và hành trình ưu tiên |
| `03-mvp-requirements.md` | Yêu cầu chức năng và phi chức năng của MVP |
| `04-content-editorial-policy.md` | Quy trình biên tập và ngôn ngữ an toàn |
| `05-privacy-security.md` | Thiết kế privacy-first và security baseline |
| `06-crisis-safety.md` | Xử lý nội dung khủng hoảng và chuyển tuyến |
| `07-user-research-protocol.md` | Phỏng vấn người dùng mà không thu hồ sơ nhạy cảm |
| `08-roadmap-180-days.md` | Kế hoạch 6 tháng theo deliverable |
| `09-risk-register.md` | Sổ đăng ký rủi ro và biện pháp kiểm soát |
| `10-source-register.md` | Nguồn chính thức và lịch kiểm tra hiệu lực |
| `11-launch-checklist.md` | Điều kiện bắt buộc trước khi public |
| `12-copy-library.md` | Mẫu disclaimer, cảnh báo email và microcopy |
| `13-health-check-decision-table.md` | Câu hỏi và bảng quyết định deterministic cho health check |
| `content-article-template.md` | Template bài viết chuẩn |
| `decision-log.md` | Ghi lại quyết định sản phẩm và thay đổi phạm vi |
| `docs/architecture/ADR-001-mvp-architecture.md` | Kiến trúc định hướng cho MVP static-only |

## 4. Nguyên tắc sử dụng

Đây là tài liệu vận hành nội bộ, không phải ý kiến pháp lý. Những nội dung pháp luật phải được kiểm tra lại theo nguồn chính thức tại thời điểm xuất bản. Người bạn có bằng luật có thể làm cộng tác viên nghiên cứu nguồn, nhưng không được giới thiệu là luật sư hoặc đứng tên tư vấn nếu chưa đáp ứng điều kiện hành nghề.

## 5. Định nghĩa ngắn gọn

- **Thông tin chung:** nội dung áp dụng ở mức giáo dục, không đưa kết luận cho một người cụ thể.
- **Tư vấn cá nhân hóa:** sử dụng dữ liệu riêng của một người để đề xuất họ nên thực hiện hành động pháp lý/tài chính cụ thể.
- **Chuyển tuyến:** hướng người dùng đến cơ quan, tổ chức tín dụng, luật sư, cơ sở y tế hoặc chuyên gia phù hợp.
- **Dữ liệu nhạy cảm của dự án:** thông tin tài chính, tín dụng, sức khỏe, hành vi cờ bạc, danh tính, hợp đồng, ghi âm và thông tin người thân.
- **Red feature:** tính năng không được xây trong V1.

## 6. Yêu cầu phát triển

- Node.js `>=20.9.0` — môi trường scaffold: `22.13.0`.
- npm — môi trường scaffold: `10.9.2`.
- Browser baseline của Tailwind CSS v4: Chrome 111+, Safari 16.4+ và Firefox 128+.

First slice dùng Next.js App Router, TypeScript strict, Tailwind CSS và static
export. Font hiển thị là system font; không tải font hoặc script từ bên thứ ba.

## 7. Cài đặt và chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. First slice chỉ gồm:

- `/`
- `/bat-dau`
- `/ke-hoach-hanh-dong`
- `/ho-tro-khan-cap`
- `/quyen-rieng-tu`
- `/ve-du-an`

## 8. Kiểm tra chất lượng

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` tạo static export trong thư mục `out/`. Không dùng `next start`
cho output này; hãy phục vụ `out/` bằng static web server khi cần kiểm tra bản
build.

## 9. Ranh giới scaffold

Scaffold hiện tại chỉ có layout, navigation, shared components, static route
shell và placeholder Markdown trong `content/pages/`.

Chưa có health-check logic, decision table implementation, dynamic action-plan
mapping, localStorage, IndexedDB, API, Server Action, database, authentication,
analytics, form, email public, MDX, external font hoặc service worker.

Security headers như CSP và HSTS phải được cấu hình tại hosting layer sau khi
provider được chọn; chúng không được mô phỏng bằng Next.js runtime trong static
export.
