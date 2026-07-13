# Decision Log

## Cách dùng

Mọi thay đổi liên quan dữ liệu, AI, tư vấn, tài trợ, cộng đồng hoặc vai trò chuyên môn phải được ghi trước khi triển khai.

## D-001 — Chọn mô hình dự án cộng đồng miễn phí

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Sáu tháng đầu không có doanh thu, quảng cáo, affiliate, donation hoặc dịch vụ theo case.
- **Lý do:** Ưu tiên kiểm chứng tác động và giảm xung đột lợi ích.
- **Hệ quả:** Không xây payment, lead-gen hoặc coaching.

## D-002 — Không có luật sư đồng hành thường xuyên

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Thu hẹp V1 thành website giáo dục chung, không tư vấn/đại diện.
- **Vai trò cộng tác viên:** nghiên cứu và kiểm tra nguồn pháp luật, không tự xưng luật sư, cố vấn pháp lý hoặc chuyên gia pháp lý.
- **Hệ quả:** Không nhận hồ sơ, không trả lời case, không sinh văn bản pháp lý cá nhân hóa.

## D-003 — Local-only debt data

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** First-slice health check chỉ dùng component state trong memory; reload hoặc đóng tab xóa câu trả lời. Debt inventory ở slice tương lai dự kiến dùng IndexedDB và chỉ lưu sau opt-in.
- **Lý do:** Dữ liệu tài chính và hành vi là dữ liệu rủi ro cao.
- **Hệ quả:** Không login, sync, dashboard cloud, localStorage/IndexedDB trong first slice hoặc trường ghi chú tự do trong debt inventory. Inventory tương lai phải có schema versioning, shared-device warning và nút xóa toàn bộ.

## D-004 — Không UGC

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Không comment, forum, story submission hoặc tố cáo công khai.
- **Lý do:** Rủi ro dữ liệu, danh dự, misinformation và quản trị nền tảng.

## D-005 — Tên và định vị chính thức

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Tên chính thức là “Tái Lập”; tên đầy đủ là “Tái Lập – Dự án cộng đồng hỗ trợ phục hồi tài chính”; repository/package identifier là `tailap`.
- **Quyết định:** Chỉ dùng mô tả “dự án cộng đồng miễn phí”, không tự xưng tổ chức phi lợi nhuận khi chưa có pháp nhân.
- **Hệ quả:** Loại bỏ toàn bộ tên tạm trước đây khỏi repository.

## D-006 — Đối tượng phục vụ

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Website phục vụ người từ 18 tuổi trở lên. Nhóm 18–35 là nhóm nghiên cứu và ưu tiên thiết kế MVP, không phải điều kiện loại trừ.
- **Hệ quả:** MVP không hỗ trợ trực tiếp trẻ vị thành niên.

## D-007 — First vertical slice

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** First slice chỉ gồm `/`, `/bat-dau`, `/ke-hoach-hanh-dong`, `/ho-tro-khan-cap`, `/quyen-rieng-tu`, `/ve-du-an`.
- **Nội dung:** Trang chủ; bắt đầu khi nhận thấy không đủ khả năng thanh toán; việc không nên làm trong 24 giờ; dấu hiệu vay mới trả nợ cũ; chuẩn bị liên hệ qua kênh chính thức; hỗ trợ khẩn cấp; quyền riêng tư; giới thiệu dự án.
- **Hệ quả:** Debt inventory, calculator, export và các route khác thuộc V1 complete hoặc slice sau.

## D-008 — Health check deterministic, không scoring

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Health check chạy hoàn toàn phía client, chỉ dùng luật deterministic có thứ tự ưu tiên; không scoring, machine learning hoặc AI.
- **Kết quả được phép:** “Cần hỗ trợ khẩn cấp”, “Có dấu hiệu vòng xoáy nợ”, “Cần hành động sớm”, “Tiếp tục theo dõi và chuẩn bị”.
- **Thứ tự:** crisis/safety; HC-02 = “Có”; HC-03 = “Không”; HC-04 = “Có”; HC-03/HC-04 = “Tôi không chắc”; tiếp tục theo dõi.
- **Điều kiện vòng xoáy:** Chỉ HC-02 = “Có” trả “Có dấu hiệu vòng xoáy nợ”. HC-03 = “Không” trả “Cần hành động sớm” và ưu tiên nhu cầu thiết yếu.
- **Không chắc:** HC-03 hoặc HC-04 = “Tôi không chắc” trả “Cần hành động sớm” với copy giải thích đã khóa.
- **Bỏ qua:** Không tự nâng mức chỉ vì HC-02, HC-03 hoặc HC-04 = “Tôi không muốn trả lời”; hiển thị copy giới hạn kết quả đã khóa.
- **Wording:** HC-01 đến HC-04 và toàn bộ lựa chọn được khóa theo `13-health-check-decision-table.md`.
- **Hệ quả:** Không xác định CIC, nguy cơ kiện tụng, kết quả đàm phán hoặc chẩn đoán tâm lý. Câu hỏi không được nhận tên chủ nợ, số tiền chính xác, CCCD, CIC hoặc số hợp đồng.
- **Tài liệu kiểm soát:** `13-health-check-decision-table.md`.

## D-009 — Crisis gate

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Dùng wording “Ngay lúc này, bạn có cảm thấy bản thân hoặc người khác không an toàn không?” với ba lựa chọn “Có hoặc tôi không chắc”, “Không”, “Tôi không muốn trả lời”.
- **Hành vi:** “Có hoặc tôi không chắc” dừng health check và hiển thị nội dung hỗ trợ khẩn cấp; “Tôi không muốn trả lời” hiển thị đường dẫn hỗ trợ nổi bật và vẫn cho phép tiếp tục.
- **Hệ quả:** Không lưu/gửi câu trả lời; trang hỗ trợ khẩn cấp hoạt động không cần JavaScript; không hardcode hotline chưa được kiểm tra; không tạo cảm giác có nhân sự trực 24/7.

## D-010 — Không feedback endpoint trong release đầu

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Loại feedback form khỏi release đầu và không có endpoint nhận free text.
- **Hệ quả:** First slice chưa công khai email. Sau first slice chỉ có thể công khai email báo lỗi nội dung/kỹ thuật nếu gần email có cảnh báo không gửi CCCD, CIC, hợp đồng, sao kê, ghi âm hoặc câu chuyện vụ việc và retention của mailbox đã được khóa.

## D-011 — Không analytics trong V1

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Không analytics, session replay, heatmap, fingerprinting, behavioral tracking hoặc completion event trong V1.
- **Phương pháp đo:** Moderated usability test, phỏng vấn và tổng hợp thủ công không định danh.

## D-012 — Kiến trúc định hướng MVP

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Trạng thái:** Accepted for first-slice scaffold; không đồng nghĩa approved for public launch.
- **Quyết định:** Next.js App Router, TypeScript strict, Tailwind CSS, static export, npm, Markdown trong first slice và system font.
- **Ranh giới:** Không backend API, database, authentication, CMS, AI, third-party scripts, external fonts, PWA hoặc service worker.
- **Hosting:** Chưa chọn provider/domain và đây không phải blocker cho local scaffold; trước public deploy vẫn bắt buộc HTTPS, custom security headers, CSP/HSTS tại hosting layer, access-log retention cấu hình được và không tự chèn analytics.
- **License:** Tiếp tục ở trạng thái Proposed.
- **Tài liệu:** `../architecture/ADR-001-mvp-architecture.md`.

## D-013 — Export và calculator

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** First slice không export và không calculator.
- **Slice tương lai:** Ưu tiên print stylesheet; chưa hỗ trợ JSON hoặc PDF generator.
- **Calculator gate:** Chỉ xem xét khi có công thức, assumptions, test cases, rounding rules và disclaimer rõ ràng.

## D-014 — Ownership

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Founder là owner của product/scope, privacy, security, crisis content và launch decision.
- **Legal source research:** Cộng tác viên nghiên cứu pháp luật.
- **Content review:** Founder và cộng tác viên nghiên cứu pháp luật.
- **Giới hạn:** Crisis content chỉ gồm thông tin chung và hướng dẫn chuyển tuyến; cộng tác viên không được giới thiệu là luật sư, cố vấn pháp lý hoặc chuyên gia pháp lý.

## D-015 — Phân lớp phạm vi

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Mọi requirement phải được gắn một trong ba lớp: First vertical slice, V1 complete hoặc Future/AMBER.
- **Hệ quả:** Capability không nằm trong first slice không được tự động đưa vào release đầu; capability AMBER cần decision mới.

## D-016 — Đề xuất giấy phép

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Trạng thái:** Proposed — chưa phê duyệt cuối cùng.
- **Đề xuất:** Source code dùng MIT License; nội dung dùng CC BY-NC-SA 4.0.
- **Hệ quả:** Không tạo file `LICENSE` hoặc thông báo license cho đến khi Founder xác nhận cuối cùng.

## D-017 — Render flow và action-plan mapping

- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Quyết định:** Health-check result render ngay tại `/bat-dau`; nút “Xem bước tiếp theo” cuộn đến action plan tương ứng trên cùng trang.
- **Ranh giới dữ liệu:** Không truyền answer, result hoặc state qua URL; không lưu vào localStorage, IndexedDB hoặc cookie.
- **Route chung:** `/ke-hoach-hanh-dong` là nội dung giáo dục chung và không nhận dữ liệu từ health check.
- **Action mapping:** Bốn action plan cho “Cần hỗ trợ khẩn cấp”, “Có dấu hiệu vòng xoáy nợ”, “Cần hành động sớm” và “Tiếp tục theo dõi và chuẩn bị” được khóa tại `13-health-check-decision-table.md` và `12-copy-library.md`.
- **Giới hạn:** Copy không cá nhân hóa theo số tiền, tổ chức tín dụng hoặc hợp đồng.

## Template quyết định mới

### D-XXX — [Tên]

- **Ngày:**
- **Owner:**
- **Bối cảnh:**
- **Quyết định:**
- **Phương án bị loại:**
- **Rủi ro dữ liệu/pháp lý/an toàn:**
- **Nguồn/căn cứ:**
- **Điều kiện review lại:**
