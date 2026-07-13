# 09 — Risk Register

Thang điểm: Probability (P) 1–5, Impact (I) 1–5, Score = P × I.

Founder là accountable owner cho product/scope, privacy, security, crisis content và launch. Cộng tác viên nghiên cứu pháp luật hỗ trợ kiểm tra nguồn, không cung cấp tư vấn pháp lý và không thay Founder ra quyết định launch.

| ID | Rủi ro | P | I | Score | Owner | Kiểm soát | Trigger dừng |
|---|---|---:|---:|---:|---|---|---|
| R01 | Người dùng hiểu là tư vấn pháp lý | 4 | 5 | 20 | Founder | Wording chung, disclaimer, không intake case | Nhiều phản hồi yêu cầu “xử lý hộ” |
| R02 | Thu dữ liệu tài chính ngoài dự kiến | 3 | 5 | 15 | Founder | First slice dùng memory-only, cấm free text, test network | Request/log chứa dữ liệu health check hoặc khoản nợ |
| R03 | Lộ dữ liệu qua kênh báo lỗi | 2 | 5 | 10 | Founder | Không feedback endpoint; email có warning và retention | Người dùng gửi CCCD/hợp đồng |
| R04 | Nội dung pháp luật hết hiệu lực | 4 | 4 | 16 | Founder | Cộng tác viên kiểm tra source register; review 90 ngày | Nguồn sửa đổi/đình chỉ/hết hiệu lực |
| R05 | Kết luận CIC sai | 4 | 4 | 16 | Founder | Không classify, không hỏi CIC, wording giới hạn | Output hiển thị nhóm nợ chính thức |
| R06 | Dính NDA/bí mật công việc | 3 | 5 | 15 | Founder | Không dùng tài liệu nội bộ, self-review | Nội dung chỉ có thể biết từ hệ thống nội bộ |
| R07 | Nội dung gây kích hoạt cờ bạc | 3 | 5 | 15 | Founder | Không hình ảnh/tỷ lệ/cách chơi | Phản hồi cho thấy nội dung tăng ham muốn chơi |
| R08 | Bỏ sót người có nguy cơ tự hại | 3 | 5 | 15 | Founder | Crisis gate, urgent page no-JS, source review | Người dùng báo trang không chỉ đường hỗ trợ trực tiếp |
| R09 | Người dùng bị scam qua quảng cáo | 1 | 5 | 5 | Founder | Không ads/affiliate | Bất kỳ quảng cáo vay/xóa CIC xuất hiện |
| R10 | Dự án bị xem là platform tố cáo | 2 | 5 | 10 | Founder | Không UGC/comments/naming accusation | Người dùng đăng nội dung cáo buộc |
| R11 | Cộng tác viên luật bị giới thiệu sai vai trò | 2 | 4 | 8 | Founder | Chỉ dùng title “cộng tác viên nghiên cứu pháp luật” | Copy ghi “luật sư/cố vấn pháp lý/chuyên gia pháp lý” |
| R12 | Scope creep sang coaching/đàm phán | 4 | 5 | 20 | Founder | Red list, decision log, launch gate | Nhóm bắt đầu xem hồ sơ/gọi thay |
| R13 | Tool tính sai gây quyết định xấu | 3 | 4 | 12 | Founder | Không calculator trước khi duyệt formula/test/rounding/disclaimer | Sai số/edge case ảnh hưởng plan |
| R14 | Người dùng nghĩ site trực 24/7 | 3 | 5 | 15 | Founder | Không live chat; crisis/email copy rõ | Email khẩn cấp không được xử lý kịp |
| R15 | Third-party script theo dõi dữ liệu | 3 | 5 | 15 | Founder | Không third-party scripts/analytics; CSP; network test | Network gửi dữ liệu hành vi ra ngoài |
| R16 | Tên “phi lợi nhuận” gây hiểu nhầm tư cách | 3 | 3 | 9 | Founder | Dùng “dự án cộng đồng miễn phí” | Website tự xưng tổ chức/quỹ chưa đăng ký |

## Quy trình review rủi ro

- Review hàng tuần trong build.
- Review trước mỗi release.
- Risk score >= 15: bắt buộc có owner và mitigation trước merge.
- Sự cố liên quan dữ liệu/khủng hoảng: stop-the-line.
- Launch decision thuộc Founder.
