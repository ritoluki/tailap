# 13 — Health Check Decision Table

- **Trạng thái:** Approved for first-slice implementation
- **Ngày:** 13/07/2026
- **Owner:** Founder
- **Phạm vi:** First vertical slice

## 1. Mục tiêu

Định nghĩa health check deterministic, dễ review và dễ kiểm thử. Công cụ không scoring, không machine learning, không AI và không đưa kết luận pháp lý, CIC, kiện tụng, đàm phán hoặc chẩn đoán tâm lý.

Mọi câu trả lời chỉ tồn tại trong component state. Reload hoặc đóng tab xóa dữ liệu. Không gửi answer, result hoặc state qua network, URL, analytics, log hoặc error report; không lưu vào localStorage, IndexedDB hoặc cookie.

## 2. Kết quả được phép

1. **Cần hỗ trợ khẩn cấp**
2. **Có dấu hiệu vòng xoáy nợ**
3. **Cần hành động sớm**
4. **Tiếp tục theo dõi và chuẩn bị**

Đây là nhãn giáo dục chung, không phải phân loại CIC, chẩn đoán hoặc dự đoán kết quả.

## 3. Câu hỏi đã chốt

### HC-01 — Crisis gate

> Ngay lúc này, bạn có cảm thấy bản thân hoặc người khác không an toàn không?

Lựa chọn:

- Có hoặc tôi không chắc.
- Không.
- Tôi không muốn trả lời.

“Có hoặc tôi không chắc” dừng health check và hiển thị nội dung hỗ trợ khẩn cấp.

### HC-02 — Vay thêm để thanh toán nợ hiện có

> Bạn có đang vay thêm hoặc sử dụng một khoản tín dụng khác để thanh toán khoản nợ hiện có không?

Lựa chọn:

- Có.
- Không.
- Tôi không muốn trả lời.

Chỉ HC-02 = “Có” mới trả kết quả “Có dấu hiệu vòng xoáy nợ”.

### HC-03 — Chi phí thiết yếu

> Sau khi thanh toán các khoản đến hạn, số tiền còn lại có đủ cho chỗ ở, ăn uống, điện nước, đi lại thiết yếu và chăm sóc sức khỏe không?

Lựa chọn:

- Có.
- Không.
- Tôi không chắc.
- Tôi không muốn trả lời.

HC-03 = “Không” hoặc “Tôi không chắc” trả kết quả “Cần hành động sớm”, không phải “Có dấu hiệu vòng xoáy nợ”.

### HC-04 — Khả năng thanh toán đúng hạn

> Hiện tại, bạn có đang chậm thanh toán hoặc dự đoán kỳ tiếp theo sẽ không thể thanh toán đúng hạn không?

Lựa chọn:

- Có.
- Không.
- Tôi không chắc.
- Tôi không muốn trả lời.

HC-04 = “Có” hoặc “Tôi không chắc” trả kết quả “Cần hành động sớm” nếu không có điều kiện ưu tiên cao hơn.

## 4. Decision table

Luật được đánh giá từ trên xuống. Khi một row khớp, trả kết quả của row đó và không đánh giá row thấp hơn.

| Priority | Điều kiện | Kết quả | Hành vi |
|---:|---|---|---|
| 1 | HC-01 = Có hoặc tôi không chắc | Cần hỗ trợ khẩn cấp | Dừng health check; dừng nội dung tài chính; hiển thị nội dung hỗ trợ khẩn cấp |
| 2 | HC-02 = Có | Có dấu hiệu vòng xoáy nợ | Hiển thị action plan chung về dừng vay thêm để trả khoản hiện có |
| 3 | HC-03 = Không | Cần hành động sớm | Ưu tiên nhu cầu thiết yếu trong action plan chung |
| 4 | HC-04 = Có | Cần hành động sớm | Hiển thị action plan kiểm tra sớm và chuẩn bị liên hệ chính thức |
| 5 | HC-03 = Tôi không chắc | Cần hành động sớm | Hiển thị copy giải thích “Tôi không chắc” |
| 5 | HC-04 = Tôi không chắc | Cần hành động sớm | Hiển thị copy giải thích “Tôi không chắc” |
| 6 | Không có điều kiện trên | Tiếp tục theo dõi và chuẩn bị | Hiển thị checklist theo dõi và disclaimer |

## 5. Copy cho “Tôi không chắc”

Khi HC-03 hoặc HC-04 = “Tôi không chắc”, hiển thị:

> Bạn chưa cần đưa ra kết luận ngay. Tuy nhiên, việc chưa chắc mình có đủ tiền cho nhu cầu thiết yếu hoặc kỳ thanh toán tiếp theo là một dấu hiệu nên kiểm tra sớm.

## 6. Quy tắc và copy cho “Tôi không muốn trả lời”

- HC-01 = “Tôi không muốn trả lời”: hiển thị đường dẫn hỗ trợ khẩn cấp nổi bật, sau đó cho phép tiếp tục.
- HC-02, HC-03 hoặc HC-04 = “Tôi không muốn trả lời”: không tự nâng mức kết quả chỉ vì câu hỏi bị bỏ qua.
- “Tôi không muốn trả lời” là lựa chọn hợp lệ; không tạo kết quả thứ năm.
- Nếu có ít nhất một câu bị bỏ qua, hiển thị:

> Kết quả này chỉ dựa trên những câu bạn đã chọn trả lời. Vì một số câu được bỏ qua, công cụ không thể loại trừ những rủi ro khác. Bạn luôn có thể mở trang hỗ trợ khẩn cấp mà không cần hoàn thành health check.

## 7. Result rendering

- Kết quả render ngay tại `/bat-dau`.
- Không truyền answer, result hoặc state qua URL.
- Không lưu answer, result hoặc state vào localStorage, IndexedDB hoặc cookie.
- Nút “Xem bước tiếp theo” cuộn đến action plan tương ứng trên cùng trang.
- `/ke-hoach-hanh-dong` là nội dung giáo dục chung, không nhận dữ liệu từ health check.
- Reload hoặc đóng tab xóa câu trả lời và kết quả.

## 8. Action-plan mapping

Copy chỉ là thông tin giáo dục chung, không cá nhân hóa theo số tiền, tổ chức tín dụng hoặc hợp đồng.

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

## 9. Pseudocode chuẩn

```text
hasSkippedAnswer =
    HC-01 == PREFER_NOT_TO_ANSWER
    or HC-02 == PREFER_NOT_TO_ANSWER
    or HC-03 == PREFER_NOT_TO_ANSWER
    or HC-04 == PREFER_NOT_TO_ANSWER

urgentLinkHighlighted = (HC-01 == PREFER_NOT_TO_ANSWER)

if HC-01 == YES_OR_UNSURE:
    stopHealthCheck = true
    stopFinancialContent = true
    result = CẦN_HỖ_TRỢ_KHẨN_CẤP
else if HC-02 == YES:
    result = CÓ_DẤU_HIỆU_VÒNG_XOÁY_NỢ
else if HC-03 == NO:
    result = CẦN_HÀNH_ĐỘNG_SỚM
    prioritizeEssentialNeeds = true
else if HC-04 == YES:
    result = CẦN_HÀNH_ĐỘNG_SỚM
else if HC-03 == UNSURE or HC-04 == UNSURE:
    result = CẦN_HÀNH_ĐỘNG_SỚM
    showUnsureExplanation = true
else:
    result = TIẾP_TỤC_THEO_DÕI_VÀ_CHUẨN_BỊ

if hasSkippedAnswer:
    showSkippedAnswerExplanation = true

render result and matching action plan at /bat-dau
```

Tên enum trong pseudocode chỉ mô tả logic tài liệu, chưa phải quyết định tên identifier trong source code.

## 10. Test cases tối thiểu

| ID | HC-01 | HC-02 | HC-03 | HC-04 | Expected result | Ghi chú |
|---|---|---|---|---|---|---|
| T01 | Có hoặc tôi không chắc | — | — | — | Cần hỗ trợ khẩn cấp | Dừng ngay; không hỏi tiếp |
| T02 | Không | Có | Không | Có | Có dấu hiệu vòng xoáy nợ | Chỉ HC-02 tạo kết quả vòng xoáy; priority 2 |
| T03 | Không | Không | Không | Không | Cần hành động sớm | HC-03 = Không; ưu tiên nhu cầu thiết yếu |
| T04 | Không | Không | Có | Có | Cần hành động sớm | HC-04 = Có |
| T05 | Không | Không | Tôi không chắc | Không | Cần hành động sớm | Hiển thị copy “Tôi không chắc” |
| T06 | Không | Không | Có | Tôi không chắc | Cần hành động sớm | Hiển thị copy “Tôi không chắc” |
| T07 | Không | Không | Có | Không | Tiếp tục theo dõi và chuẩn bị | Không có trigger cao hơn |
| T08 | Tôi không muốn trả lời | Không | Có | Không | Tiếp tục theo dõi và chuẩn bị | Hiển thị urgent link và copy bỏ qua |
| T09 | Tôi không muốn trả lời | Có | Không | Có | Có dấu hiệu vòng xoáy nợ | HC-02 quyết định; urgent link vẫn nổi bật |
| T10 | Không | Tôi không muốn trả lời | Có | Không | Tiếp tục theo dõi và chuẩn bị | Không tự nâng mức; hiển thị copy bỏ qua |
| T11 | Không | Không | Không | Có | Cần hành động sớm | HC-03 priority 3 được đánh giá trước HC-04; cùng kết quả |
| T12 | Không | Có | Có | Không | Có dấu hiệu vòng xoáy nợ | HC-02 là điều kiện duy nhất cho vòng xoáy |

## 11. Output constraints

Mọi kết quả phải:

- giải thích đây là tín hiệu chung;
- không dùng từ “nhóm nợ” theo nghĩa CIC;
- không dự đoán kiện tụng hoặc hành động của ngân hàng;
- không hứa giảm nợ, cơ cấu hoặc kết quả đàm phán;
- không chẩn đoán tâm lý;
- không yêu cầu gửi hồ sơ;
- có đường đến hỗ trợ khẩn cấp luôn nhìn thấy được.
