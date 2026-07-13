---
title: Bắt đầu
route: /bat-dau
status: implemented-first-slice
content_level: L1
reviewed_against: docs/plan/13-health-check-decision-table.md
last_reviewed: 2026-07-13
---

# Bắt đầu khi lo không đủ khả năng thanh toán

Health check gồm bốn câu hỏi đã được phê duyệt. Câu trả lời chỉ tồn tại trong
component state trên trang, không được gửi về máy chủ và bị xóa khi tải lại
hoặc đóng tab.

Kết quả và action plan chung được hiển thị ngay tại `/bat-dau`. Công cụ không
xác định nhóm nợ CIC, không đưa ý kiến cho vụ việc cá nhân và không dự đoán hành
động của tổ chức tín dụng.

Trang luôn có đường dẫn đến hỗ trợ khẩn cấp và cảnh báo không gửi dữ liệu nhạy
cảm.
