# 00 — Product Charter

**Trạng thái:** Approved for architecture planning  
**Không đồng nghĩa:** Approved for public launch

## 1. Tên làm việc

**Tên chính thức:** Tái Lập  
**Tên đầy đủ:** Tái Lập – Dự án cộng đồng hỗ trợ phục hồi tài chính  
**Repository/package identifier:** `tailap`  

Tái Lập được mô tả là “dự án cộng đồng miễn phí”, không tự xưng tổ chức phi lợi nhuận khi chưa có pháp nhân phù hợp. Domain chưa được chọn.

## 2. Vấn đề

Người mới bắt đầu chậm thanh toán thường không biết:

- tình trạng của mình nghiêm trọng đến đâu;
- nên ưu tiên việc gì trong 24 giờ đầu;
- làm thế nào để tổng hợp toàn bộ nghĩa vụ;
- nên hỏi tổ chức tín dụng những gì;
- thông tin nào trên mạng là lừa đảo;
- khi nào vấn đề đã vượt khỏi khả năng tự xử lý;
- tìm hỗ trợ tâm lý/pháp lý ở đâu nếu nợ liên quan cờ bạc, đe dọa hoặc tranh chấp.

Họ dễ rơi vào vòng lặp vay mới trả nợ cũ, cố “gỡ”, né tránh liên lạc hoặc trả tiền cho dịch vụ hứa xóa CIC.

## 3. Sứ mệnh

Cung cấp một điểm bắt đầu trung lập, không phán xét và tôn trọng quyền riêng tư để người dùng:

1. nhận diện sớm khủng hoảng;
2. dừng hành vi làm tình trạng xấu thêm;
3. sắp xếp thông tin;
4. chuẩn bị làm việc qua kênh chính thức;
5. biết lúc nào phải tìm người có chuyên môn.

## 4. Lời hứa sản phẩm

> Sau khi sử dụng website, người dùng hiểu rõ hơn việc cần làm tiếp theo mà không phải giao dữ liệu tài chính hoặc danh tính cho dự án.

## 5. Đối tượng V1

Người từ 18 tuổi trở lên tại Việt Nam:

- dự đoán tháng tới không đủ khả năng thanh toán; hoặc
- mới bắt đầu chậm trả; hoặc
- có từ hai khoản vay/thẻ trở lên; hoặc
- đang vay mới để trả khoản cũ; hoặc
- phát sinh nợ do cờ bạc/đầu cơ nhưng chưa có tranh chấp tố tụng phức tạp.

Nhóm 18–35 là nhóm nghiên cứu và ưu tiên thiết kế MVP, không phải điều kiện loại trừ. MVP không hỗ trợ trực tiếp trẻ vị thành niên.

## 6. Không phục vụ bằng công cụ tự động

V1 không cố giải quyết:

- vụ việc đang kiện tụng hoặc thi hành án;
- tranh chấp tài sản bảo đảm;
- khoản vay doanh nghiệp;
- yêu cầu xác định trách nhiệm hình sự;
- yêu cầu kết luận hành vi đòi nợ có trái pháp luật;
- khủng hoảng sức khỏe tâm thần cần cấp cứu;
- trường hợp cần đại diện hoặc tư vấn chuyên môn.

Website chỉ chuyển tuyến ở các tình huống này.

## 7. Nguyên tắc sản phẩm

1. **Không khai thác sự tuyệt vọng.** Không quảng cáo vay, đầu tư, cờ bạc hoặc dịch vụ xóa nợ.
2. **Privacy by default.** Không yêu cầu dữ liệu để chứng minh người dùng đang mắc nợ.
3. **Education, not representation.** Giải thích chung, không xử lý vụ việc.
4. **No miracle claims.** Không hứa kết quả.
5. **Source before opinion.** Nội dung quan trọng phải có nguồn chính thức và ngày kiểm tra.
6. **Crisis-aware.** Giao diện không gây xấu hổ, đe dọa hoặc thúc ép.
7. **Employer separation.** Không tái sử dụng tài sản, quy trình hoặc thông tin mật từ nơi làm việc.

## 8. North-star metric

Trong beta, đo bằng moderated usability test, phỏng vấn và tổng hợp thủ công không định danh:

> Tỷ lệ người dùng cho biết họ đã xác định được một bước an toàn có thể thực hiện trong 24 giờ tới.

Không thu completion event trong sản phẩm và không dùng analytics trong V1.

## 9. Chỉ số phụ

- Tỷ lệ người tham gia test hoàn thành health check.
- Tỷ lệ người tham gia hiểu dữ liệu health check bị xóa khi reload.
- Tỷ lệ người tham gia nhận ra health check không xác định CIC, kiện tụng hoặc kết quả đàm phán.
- Tỷ lệ người tham gia xác định được một bước an toàn tiếp theo.
- Số lỗi nội dung được báo và thời gian sửa.

Các chỉ số được tổng hợp thủ công, không định danh. Không dùng doanh thu, lead, số hồ sơ thu được hoặc dữ liệu hành vi trong sản phẩm làm chỉ số năm đầu.

## 10. First vertical slice

First vertical slice chỉ gồm:

- `/`
- `/bat-dau`
- `/ke-hoach-hanh-dong`
- `/ho-tro-khan-cap`
- `/quyen-rieng-tu`
- `/ve-du-an`

Slice này chỉ dùng state trong memory, không calculator, export, feedback endpoint, địa chỉ email public, local persistence, analytics hoặc backend.

## 11. Điều kiện dừng

Tạm dừng chức năng hoặc website nếu:

- phát hiện dữ liệu nhạy cảm bị gửi về server ngoài dự kiến;
- người dùng thường xuyên hiểu nhầm dự án là luật sư hoặc tổ chức tín dụng;
- nội dung tạo ra hành vi vay thêm hoặc kỳ vọng được xóa nợ;
- xuất hiện yêu cầu từ cơ quan có thẩm quyền mà nhóm chưa đủ khả năng xử lý;
- không thể duy trì việc cập nhật nguồn pháp luật/tín dụng.
