export function SensitiveDataWarning() {
  return (
    <aside
      aria-label="Cảnh báo dữ liệu nhạy cảm"
      className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950"
    >
      <p className="font-semibold">Không gửi dữ liệu nhạy cảm cho dự án.</p>
      <p className="mt-2">
        Không gửi CCCD, CIC, hợp đồng, số tài khoản, sao kê, hồ sơ sức
        khỏe, ghi âm hoặc câu chuyện vụ việc cá nhân. First slice không có
        form, upload hoặc địa chỉ email công khai.
      </p>
    </aside>
  );
}
