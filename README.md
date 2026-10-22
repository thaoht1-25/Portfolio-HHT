# My Creative Portfolio — Phiên bản xem trước PDF nhiều trang

## 1. Tính năng
- Giao diện xanh dương và vàng, tương thích điện thoại.
- Quản lý dự án tập trung bằng mảng `PROJECTS` trong `projects.js`.
- Tự động tạo thẻ và bộ lọc từ `category`.
- **Nút Xem trước**: nếu có `previewPdf`, mở PDF nhiều trang ngay trong website (iframe); nếu không có, mở ảnh đại diện.
- **Nút Tải PPTX**: dùng trường `download`, độc lập với `previewPdf`.
- Mở link dự án từ trường `link`.
- Comment tiếng Việt ở các file HTML, CSS và JavaScript.

## 2. Cách thêm một bài PowerPoint

**Bước 1.** Mở PowerPoint -> File -> Export/Save As -> PDF, lưu toàn bộ slide (không chỉ slide hiện tại). Ví dụ `bai-giang.pdf`.

**Bước 2.** Xuất 1 slide đẹp thành ảnh PNG/JPG, ví dụ `bia-bai-giang.png`.

**Bước 3.** Chép file vào các thư mục:

```text
assets/images/bia-bai-giang.png
assets/downloads/bai-giang.pdf
assets/downloads/bai-giang.pptx
```

**Bước 4.** Mở `projects.js`, thêm object vào mảng `PROJECTS` (nhớ dấu phẩy giữa các object):

```javascript
{
  id: "bai-giang-02",             // Không trùng với id khác
  category: "slide",             // Bộ lọc tự cập nhật
  title: "Bài giảng Vật lý 12",  // Tên thẻ
  description: "Bài giảng về Từ trường.",
  image: "assets/images/bia-bai-giang.png", // Ảnh trên thẻ
  previewPdf: "assets/downloads/bai-giang.pdf", // PDF xem toàn bộ slide
  download: "assets/downloads/bai-giang.pptx", // PPTX tải về
  link: ""                       // Link ngoài (nếu có)
}
```

**Bước 5.** Lưu `projects.js`, mở/tải lại `index.html`. Chọn **Xem trước** để xem PDF; chọn **Tải PPTX** để tải PowerPoint.

## 3. Dự án chỉ có ảnh

Đặt `previewPdf: ""` và điền `image`. Nút Xem trước sẽ hiển thị ảnh như trước.

## 4. File demo

Dự án `slide-01` đã được cấu hình `previewPdf: "assets/downloads/demo-slide-preview.pdf"` với PDF demo 3 trang để bạn thử tính năng ngay. Đây chỉ là **PDF minh họa**, không phải bài giảng thực. Trường `download` của dự án mẫu để trống, vì chưa có PowerPoint thực tế. Hãy thay PDF demo và thêm PPTX của bạn khi sử dụng.

## 5. Lưu ý

- **HTML không phát trực tiếp PPT/PPTX**: PDF chỉ là bản xem trước, không giữ hiệu ứng, animation hay trigger tương tác của PowerPoint.
- PDF nhúng được hiển thị bằng trình xem có sẵn của trình duyệt. Nếu trình duyệt không hỗ trợ, chọn **Mở PDF ở tab mới**.
- Mở trực tiếp `index.html` có thể hoạt động, nhưng một số trình duyệt hạn chế nhúng PDF qua `file://`. Nên dùng VS Code + Live Server hoặc chạy `python -m http.server 8000` trong thư mục dự án, rồi mở `http://localhost:8000`.
- Đường dẫn phân biệt chữ hoa/chữ thường khi đăng lên hosting. Không dùng đường dẫn kiểu `C:\Users\...`.
- Chép toàn bộ thư mục `assets/` lên hosting cùng với `index.html`, `projects.js`, `app.js`, `style.css`.
- Website HTML tĩnh không có chức năng tải file lên từ giao diện quản trị: bạn cần tự chép file vào thư mục và thêm dữ liệu.

## 6. Tổng hợp yêu cầu đã đáp ứng

1. Giao diện hiện đại, tối giản, xanh dương + vàng.
2. Danh mục Slide, Website UI, Poster và tự hỗ trợ danh mục mới.
3. Thẻ dự án sinh từ mảng JavaScript `PROJECTS`.
4. Ảnh đại diện và xem trước ảnh.
5. Xem trước PowerPoint dưới dạng PDF nhiều trang trong modal.
6. Tải file PowerPoint gốc riêng biệt.
7. Hỗ trợ link dự án và tải ảnh/PDF/ZIP theo đường dẫn.
8. Mã nguồn có comment tiếng Việt và README hướng dẫn.
