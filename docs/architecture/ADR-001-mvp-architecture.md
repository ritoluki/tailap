# ADR-001 — Kiến trúc MVP static-only

- **Trạng thái:** Accepted for first-slice scaffold
- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Phạm vi:** First vertical slice và định hướng V1
- **Không đồng nghĩa:** Approved for public launch

## 1. Bối cảnh

Tái Lập xử lý chủ đề tài chính, khủng hoảng và hành vi có mức nhạy cảm cao. First vertical slice phải cung cấp health check và nội dung hành động chung mà không gửi câu trả lời, danh tính hoặc dữ liệu khoản nợ về server.

Kiến trúc phải hỗ trợ:

- nội dung tĩnh có nguồn và metadata review;
- health check deterministic chạy trong browser;
- trang hỗ trợ khẩn cấp hoạt động không cần JavaScript;
- static hosting với security headers;
- không backend API, database, authentication, CMS, AI hoặc analytics.

## 2. Quyết định

Chọn kiến trúc định hướng:

- Next.js App Router.
- TypeScript strict.
- Tailwind CSS.
- Static export.
- Package manager: npm.
- Nội dung first slice dùng Markdown trong repository, không MDX.
- Dùng system font, không external font.
- Health-check result render tại `/bat-dau`.
- First slice chưa công khai địa chỉ email dự án.

Hosting provider và domain chưa được chọn nhưng không phải blocker cho local scaffold. Phiên bản dependency sẽ được pin khi scaffold. License tiếp tục ở trạng thái Proposed. Công việc cập nhật tài liệu này không cài dependency hoặc chạy `create-next-app`.

## 3. Sơ đồ dữ liệu

```text
Build time
├── source code công khai
├── Markdown và metadata biên tập
└── static export HTML/CSS/JS

Static hosting
├── HTTPS
├── CSP/HSTS và custom security headers
├── access logs có retention cấu hình được
└── không tự chèn analytics

Browser
├── static pages
├── health-check rules deterministic
├── component state trong memory
└── không gửi answer/debt data ra network
```

First slice không có API route, Server Action, cookie, localStorage, IndexedDB, service worker, external font hoặc third-party runtime script.

## 4. Route first vertical slice

- `/`
- `/bat-dau`
- `/ke-hoach-hanh-dong`
- `/ho-tro-khan-cap`
- `/quyen-rieng-tu`
- `/ve-du-an`

Mọi route khác thuộc V1 complete hoặc slice sau.

## 5. Static export và giới hạn Next.js

Next.js static export tạo output HTML/CSS/JS có thể phục vụ từ static web server. App Router vẫn dùng được cho các route được xác định tại build time.

Export mode không được dựa vào các tính năng cần runtime server, gồm:

- dynamic route không có danh sách param tại build time;
- Route Handler phụ thuộc request;
- cookies;
- rewrites hoặc redirects runtime;
- custom headers qua Next.js runtime;
- Incremental Static Regeneration;
- default image optimization service;
- Draft Mode;
- Server Actions;
- Proxy/Middleware cần runtime.

Vì custom headers của Next.js không áp dụng cho static export, CSP, HSTS và các security headers khác phải được cấu hình tại hosting layer.

## 6. Tailwind CSS

Tailwind chỉ tham gia build pipeline để tạo CSS từ source. First slice không dùng browser CDN build, injected runtime script hoặc external stylesheet từ bên thứ ba.

Version Tailwind và browser support baseline phải được khóa cùng nhau trước khi scaffold, vì các major version có thể có yêu cầu browser khác nhau.

## 7. Ranh giới client/server

### Client được phép

- Hiển thị nội dung đã build.
- Giữ câu trả lời health check trong component state.
- Chạy decision table deterministic.
- Render result và action plan tương ứng ngay tại `/bat-dau`.
- Cuộn đến action plan cùng trang khi người dùng chọn “Xem bước tiếp theo”.

Trang `/ke-hoach-hanh-dong` là nội dung chung, không nhận answer, result hoặc state từ health check.

### Không được phép

- Gửi health-check answer trong request, URL, analytics, error report hoặc log.
- Truyền answer, result hoặc state giữa route qua URL.
- Gọi backend API.
- Lưu câu trả lời first slice vào localStorage, IndexedDB hoặc cookie.
- Dùng scoring, machine learning hoặc AI.
- Chèn third-party scripts, external fonts, embeds hoặc tracking pixels.

## 8. Nội dung và review

Nội dung nằm trong repository để:

- review thay đổi bằng diff;
- bắt buộc metadata nguồn, ngày kiểm tra và cấp L1/L2/L3;
- không phụ thuộc CMS hoặc tài khoản biên tập;
- tách copy được review khỏi decision rules.

First slice dùng Markdown, không MDX. Nội dung thay đổi phải qua review trong repository và không được nhúng executable component vào file nội dung.

## 9. Hosting gate

Hosting provider và domain không phải blocker cho local scaffold. Chúng phải được khóa trước khi deploy môi trường public.

Provider chỉ được chọn nếu đáp ứng:

- HTTPS.
- Custom security headers.
- CSP và HSTS tại hosting layer.
- Access-log retention cấu hình được.
- Không tự động chèn analytics, ads hoặc tracking script.
- Có cách tắt nhanh site/tool khi có sự cố.

Privacy notice phải mô tả access log đúng với cấu hình thực tế; không hứa “không thu dữ liệu server” nếu provider vẫn giữ IP hoặc user-agent.

## 10. Kiểm thử bắt buộc sau khi được phép build

- Unit test cho toàn bộ row trong health-check decision table.
- Crisis gate test cho “Có hoặc tôi không chắc”, “Không”, “Tôi không muốn trả lời”.
- Test chứng minh chỉ HC-02 = “Có” tạo kết quả “Có dấu hiệu vòng xoáy nợ”.
- Test chứng minh HC-03 = “Không” tạo kết quả “Cần hành động sớm”.
- Test nút “Xem bước tiếp theo” chỉ cuộn trong `/bat-dau`.
- Test reload/close-tab semantics.
- Network inspection chứng minh không có answer rời browser.
- Test JavaScript-disabled cho `/ho-tro-khan-cap`.
- Accessibility keyboard/mobile và WCAG 2.2 AA target.
- Kiểm tra CSP/security headers trên môi trường deploy.
- Dependency và secret scanning.

## 11. Hệ quả

### Lợi ích

- Không có application server nhận dữ liệu nhạy cảm.
- Bề mặt tấn công và vận hành nhỏ.
- Nội dung khẩn cấp vẫn truy cập được khi JavaScript lỗi.
- Có thể review decision rules độc lập với UI.

### Trade-off

- Không có server-side feedback form, personalization, account hoặc sync.
- First slice không có địa chỉ email public.
- Custom headers phụ thuộc khả năng hosting.
- Không dùng tính năng Next.js cần runtime.
- Nội dung thay đổi phải đi qua repository/build.

## 12. Hạng mục còn mở

- Hosting provider, domain và access-log retention cụ thể trước public deploy; không chặn local scaffold.
- Phiên bản Next.js, Tailwind CSS và browser support baseline phải được pin/ghi nhận khi scaffold.
- Chính sách email và mailbox retention nếu xem xét công khai sau first slice.
- Xác nhận cuối cùng MIT cho source code và CC BY-NC-SA 4.0 cho nội dung.

## 13. Nguồn framework đã kiểm tra

- [Next.js — Static Exports](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/static-exports.mdx)
- [Next.js — Content Security Policy](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/content-security-policy.mdx)
- [Tailwind CSS documentation source](https://github.com/tailwindlabs/tailwindcss.com)
