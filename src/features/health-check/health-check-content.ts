import type {
  Hc01Answer,
  Hc02Answer,
  Hc03OrHc04Answer,
  HealthCheckResult,
} from "./health-check";

export type HealthCheckOption<TValue extends string> = {
  label: string;
  value: TValue;
};

export const HEALTH_CHECK_NOTICE =
  "Câu trả lời trong health check chỉ được xử lý tạm thời trên trang này, không được gửi về máy chủ và sẽ bị xóa khi bạn tải lại trang hoặc đóng tab.";

export const UNSURE_EXPLANATION =
  "Bạn chưa cần đưa ra kết luận ngay. Tuy nhiên, việc chưa chắc mình có đủ tiền cho nhu cầu thiết yếu hoặc kỳ thanh toán tiếp theo là một dấu hiệu nên kiểm tra sớm.";

export const SKIPPED_ANSWER_EXPLANATION =
  "Kết quả này chỉ dựa trên những câu bạn đã chọn trả lời. Vì một số câu được bỏ qua, công cụ không thể loại trừ những rủi ro khác. Bạn luôn có thể mở trang hỗ trợ khẩn cấp mà không cần hoàn thành health check.";

export const HC01 = {
  id: "hc01",
  legend:
    "Ngay lúc này, bạn có cảm thấy bản thân hoặc người khác không an toàn không?",
  options: [
    { label: "Có hoặc tôi không chắc", value: "yes-or-unsure" },
    { label: "Không", value: "no" },
    { label: "Tôi không muốn trả lời", value: "prefer-not-to-answer" },
  ] satisfies HealthCheckOption<Hc01Answer>[],
};

export const HC02 = {
  id: "hc02",
  legend:
    "Bạn có đang vay thêm hoặc sử dụng một khoản tín dụng khác để thanh toán khoản nợ hiện có không?",
  options: [
    { label: "Có", value: "yes" },
    { label: "Không", value: "no" },
    { label: "Tôi không muốn trả lời", value: "prefer-not-to-answer" },
  ] satisfies HealthCheckOption<Hc02Answer>[],
};

export const HC03 = {
  id: "hc03",
  legend:
    "Sau khi thanh toán các khoản đến hạn, số tiền còn lại có đủ cho chỗ ở, ăn uống, điện nước, đi lại thiết yếu và chăm sóc sức khỏe không?",
  options: [
    { label: "Có", value: "yes" },
    { label: "Không", value: "no" },
    { label: "Tôi không chắc", value: "unsure" },
    { label: "Tôi không muốn trả lời", value: "prefer-not-to-answer" },
  ] satisfies HealthCheckOption<Hc03OrHc04Answer>[],
};

export const HC04 = {
  id: "hc04",
  legend:
    "Hiện tại, bạn có đang chậm thanh toán hoặc dự đoán kỳ tiếp theo sẽ không thể thanh toán đúng hạn không?",
  options: [
    { label: "Có", value: "yes" },
    { label: "Không", value: "no" },
    { label: "Tôi không chắc", value: "unsure" },
    { label: "Tôi không muốn trả lời", value: "prefer-not-to-answer" },
  ] satisfies HealthCheckOption<Hc03OrHc04Answer>[],
};

type ResultContent = {
  label: string;
  explanation: string;
  actions: string[];
};

export const RESULT_CONTENT: Record<HealthCheckResult, ResultContent> = {
  "urgent-support": {
    label: "Cần hỗ trợ khẩn cấp",
    explanation:
      "Hãy dừng phần nội dung tài chính tại đây và ưu tiên tìm hỗ trợ trực tiếp ngay. Tái Lập không phải dịch vụ cấp cứu và không có nhân sự trực hoặc theo dõi 24/7.",
    actions: [
      "Dừng nội dung tài chính.",
      "Tìm hỗ trợ trực tiếp ngay.",
      "Liên hệ một người đáng tin cậy.",
      "Tái Lập không có nhân sự trực hoặc theo dõi 24/7.",
    ],
  },
  "debt-spiral-signs": {
    label: "Có dấu hiệu vòng xoáy nợ",
    explanation:
      "Đây là tín hiệu giáo dục chung từ những câu bạn đã chọn, không phải phân loại CIC hoặc dự đoán kết quả cho trường hợp cá nhân.",
    actions: [
      "Không vay thêm chỉ để trả khoản hiện có.",
      "Không cố gỡ bằng cờ bạc, đầu cơ hoặc khoản vay rủi ro hơn.",
      "Giữ lại nhu cầu sống thiết yếu.",
      "Liệt kê các khoản đến hạn.",
      "Liên hệ tổ chức tín dụng qua kênh chính thức.",
      "Cảnh báo dịch vụ xóa CIC hoặc cam kết giảm nợ.",
    ],
  },
  "early-action": {
    label: "Cần hành động sớm",
    explanation:
      "Đây là tín hiệu giáo dục chung từ những câu bạn đã chọn, không phải ý kiến pháp lý, tài chính cá nhân hoặc dự đoán kết quả đàm phán.",
    actions: [
      "Kiểm tra ngày đến hạn và số tiền phải thanh toán.",
      "Tách chi phí thiết yếu.",
      "Không tạo thêm khoản vay trước khi hiểu tổng nghĩa vụ.",
      "Chuẩn bị câu hỏi để liên hệ tổ chức tín dụng.",
      "Không đưa ra dự đoán pháp lý hoặc kết quả đàm phán.",
    ],
  },
  "monitor-and-prepare": {
    label: "Tiếp tục theo dõi và chuẩn bị",
    explanation:
      "Đây là tín hiệu giáo dục chung dựa trên những câu bạn đã chọn và không loại trừ các rủi ro khác.",
    actions: [
      "Ghi lại ngày đến hạn.",
      "Theo dõi khả năng chi trả.",
      "Chú ý dấu hiệu vay mới trả nợ cũ.",
      "Làm lại health check khi tình trạng thay đổi.",
    ],
  },
};
