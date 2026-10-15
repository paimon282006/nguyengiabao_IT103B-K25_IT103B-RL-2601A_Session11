/**
 * MÔ TẢ & GIẢI THÍCH SỬA LỖI:
 * 1. Lỗi logic Falsy Value: 
 *    - Ban đầu dùng điều kiện `if (updatedData.isActive)` và `if (updatedData.powerWatts)`. 
 *    - Khi truyền vào giá trị `false` (tắt thiết bị) hoặc `0` (hạ công suất về 0W), 
 *      JavaScript hiểu nhầm đó là Falsy (sai/rỗng) nên bỏ qua không cập nhật.
 * 2. Khắc phục:
 *    - Sửa lại điều kiện thành `!== undefined` để kiểm tra xem dữ liệu có thực sự được truyền lên hay không, 
 *      nhờ đó giữ lại được chính xác các giá trị `0` và `false`.
 */

function updateDevice(devices, targetId, updatedData) {
  let targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) {
    return false;
  }

  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  // Sửa lỗi: Dùng '!== undefined' để không bị bỏ qua khi isActive là false
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  // Sửa lỗi: Dùng '!== undefined' để không bị bỏ qua khi powerWatts là 0
  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
}