/* ============================================================
   PROJECTS.JS — NƠI DUY NHẤT BẠN CẦN SỬA KHI THÊM DỰ ÁN

   HƯỚNG DẪN NHANH:
   B1. Chép ảnh PNG/JPG/WebP vào assets/images/.
   B2. Chép PPTX/PDF/PNG cần tải vào assets/downloads/.
   B3. Sao chép một object { ... } bên dưới, đặt id KHÔNG TRÙNG.
   B4. Điền category, title, description, image, download, link.
   B5. Lưu file rồi tải lại index.html (Ctrl + F5).

   CÁC TRƯỜNG:
   id          : mã duy nhất (vd: "slide-02")
   category    : "slide", "website", "poster", hoặc danh mục mới
   title       : tên dự án hiển thị trên thẻ
   description : mô tả ngắn
   image       : ảnh đại diện; rỗng "" = minh họa mặc định
   download    : file tải xuống (PPTX, PNG, PDF...); rỗng "" = ẩn nút tải
   previewPdf  : đường dẫn PDF nhiều trang dùng cho nút Xem trước
   link        : đường dẫn web; rỗng "" = ẩn link

   LƯU Ý: dấu phẩy giữa các object là bắt buộc.
   ============================================================ */
const PROJECTS = [
  {
    id: "slide-01",
    category: "slide",
    title: "Slide thuyết trình Công Nghệ Dạy Học",
    description: "Công Nghệ Dạy Học",
    image: "assets/images/Công Nghệ Dạy Học - OER.png", // Ví dụ: "assets/images/slide-01.png"
    previewPdf: "assets/downloads/Công Nghệ Dạy Học - OER.pdf", // PDF mẫu 3 trang: thay bằng PDF xuất từ PPTX của bạn
    download: "assets/downloads/Công Nghệ Dạy Học - OER.pptx", // Ví dụ: "assets/downloads/slide-01.pptx" (khi có PPTX thật, nút tải sẽ xuất hiện)
    link: "https://canva.link/cong-nghe-day-hoc-oer"
  },
  {
    id: "slide-02",
    category: "slide",
    title: "Slide thuyết trình Kỹ năng dạy học",
    description: "Kỹ năng dạy học",
    image: "assets/images/Kỹ năng dạy học - Nhật Ký Hiệp Sĩ Xanh.png", // Ví dụ: "assets/images/slide-01.png"
    previewPdf: "assets/downloads/Kỹ năng dạy học - Nhật Ký Hiệp Sĩ Xanh.pdf", // PDF mẫu 3 trang: thay bằng PDF xuất từ PPTX của bạn
    download: "assets/downloads/Kỹ năng dạy học - Nhật Ký Hiệp Sĩ Xanh.pptx", // Ví dụ: "assets/downloads/slide-01.pptx" (khi có PPTX thật, nút tải sẽ xuất hiện)
    link: "https://canva.link/ky-nang-day-hoc-nhat-ky-hiep-si-xanh"
  },
  {
    id: "slide-03",
    category: "slide",
    title: "Slide thuyết trình Quản trị dự án",
    description: "Quản trị dự án",
    image: "assets/images/Truyền thông openday.png", // Ví dụ: "assets/images/slide-01.png"
    previewPdf: "assets/downloads/Truyền thông openday.pdf", // PDF mẫu 3 trang: thay bằng PDF xuất từ PPTX của bạn
    download: "assets/downloads/Quản trị dự án - Truyền thông openday.pptx", // Ví dụ: "assets/downloads/slide-01.pptx" (khi có PPTX thật, nút tải sẽ xuất hiện)
    link: "https://canva.link/truyen-thong-openday"
  },
  {
    id: "slide-04",
    category: "slide",
    title: "Slide thuyết trình E-Learning",
    description: "Giáo dục trong tương lai",
    image: "assets/images/E-Learning Giáo dục trong tương lai.png", // Ví dụ: "assets/images/slide-01.png"
    previewPdf: "assets/downloads/E-Learning Giáo dục trong tương lai.pdf", // PDF mẫu 3 trang: thay bằng PDF xuất từ PPTX của bạn
    download: "assets/downloads/E-Learning Giáo dục trong tương lai.pptx", // Ví dụ: "assets/downloads/slide-01.pptx" (khi có PPTX thật, nút tải sẽ xuất hiện)
    link: "https://canva.link/e-learning-giao-duc-trong-tuong-lai"
  },
  {
    id: "slide-05",
    category: "slide",
    title: "Slide thuyết trình E-Learning",
    description: "Mục tiêu học tập",
    image: "assets/images/E-Learning Mục tiêu học tập  (Bloom + SMART).jpg", // Ví dụ: "assets/images/slide-01.png"
    previewPdf: "assets/downloads/E-Learning Mục tiêu học tập  (Bloom + SMART).pdf", // PDF mẫu 3 trang: thay bằng PDF xuất từ PPTX của bạn
    download: "assets/downloads/E-Learning Mục tiêu học tập  (Bloom + SMART).pptx", // Ví dụ: "assets/downloads/slide-01.pptx" (khi có PPTX thật, nút tải sẽ xuất hiện)
    link: "https://canva.link/e-learning-muc-tieu-hoc-tap-bloom-smart"
  },
  {
    id: "website-01",
    category: "website",
    title: "Thiết kế giao diện website trang chủ",
    description: "website trang chủ",
    image: "assets/images/Trang chủ.png", // Ví dụ: "assets/images/website-01.png"
    previewPdf: "assets/downloads/Trang chủ.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Trang chủ.png", // Có thể dùng file .pdf, .png, .zip ...
    link: "https://edtech-openday-2026.vercel.app/index.html#faq" // Ví dụ: "https://example.com"
  },
  {
    id: "Book-01",
    category: "Book",
    title: "Thiết kế sách - Các công nghệ giáo dục tiên tiến",
    description: "Các công nghệ giáo dục tiên tiến",
    image: "assets/images/Bò Cạp sa mạc.png", // Ví dụ: "assets/images/website-01.png"
    previewPdf: "assets/downloads/Bò Cạp sa mạc.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Bò Cạp sa mạc.png", // Có thể dùng file .pdf, .png, .zip ...
    link: "https://drive.google.com/file/d/1EWs_9Pf_N4W7LzYLrUlvtLNSGdx9JLqF/view?usp=drive_link" // Ví dụ: "https://example.com"
  },
  {
    id: "Book-02",
    category: "Book",
    title: "Thiết kế sách - Các công nghệ giáo dục tiên tiến",
    description: "Các công nghệ giáo dục tiên tiến",
    image: "assets/images/Thằn lằn quỷ.png", // Ví dụ: "assets/images/website-01.png"
    previewPdf: "assets/downloads/Thằn lằn quỷ.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Thằn lằn quỷ.png", // Có thể dùng file .pdf, .png, .zip ...
    link: "https://drive.google.com/file/d/1_rQ4TBpXvXfRvyQDtE2belGecrWuzrCy/view?usp=drive_link" // Ví dụ: "https://example.com"
  },
  {
    id: "Book-03",
    category: "Book",
    title: "Thiết kế sách - Các công nghệ giáo dục tiên tiến",
    description: "Các công nghệ giáo dục tiên tiến",
    image: "assets/images/Linh Dương Ai Cập.jpeg", // Ví dụ: "assets/images/website-01.png"
    previewPdf: "assets/downloads/Linh Dương Ai Cập.jpegg", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Linh Dương Ai Cập.jpeg", // Có thể dùng file .pdf, .png, .zip ...
    link: "https://drive.google.com/file/d/1F0YMBd5WisUPrb8v6Na-elY3zdql5Q5V/view?usp=drive_link" // Ví dụ: "https://example.com"
  },
  {
    id: "poster-01",
    category: "poster",
    title: "Poster truyền thông",
    description: "Thiết kế poster.",
    image: "assets/images/Ấn phẩm 1.png", // Ví dụ: "assets/images/poster-01.png"
    previewPdf: "assets/downloads/Ấn phẩm 1.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Ấn phẩm 1.png", // Ví dụ: "assets/downloads/poster-01.png"
    link: "https://drive.google.com/file/d/1RWp8Izpe1wy2n0Jp3W1L7b7mpa6DQ1a4/view?usp=drive_link"
  },
  {
    id: "poster-02",
    category: "poster",
    title: "Poster truyền thông",
    description: "Thiết kế poster.",
    image: "assets/images/Ấn phẩm 2.png", // Ví dụ: "assets/images/poster-01.png"
    previewPdf: "assets/downloads/Ấn phẩm 2.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Ấn phẩm 2.png", // Ví dụ: "assets/downloads/poster-01.png"
    link: "https://drive.google.com/file/d/1Yg6wkVRYu_2nSEiwG1YT0mx8qlwv3EF3/view?usp=drive_link"
  },
  {
    id: "poster-03",
    category: "poster",
    title: "Poster truyền thông",
    description: "Thiết kế poster.",
    image: "assets/images/Ấn phẩm 3.png", // Ví dụ: "assets/images/poster-01.png"
    previewPdf: "assets/downloads/Ấn phẩm 3.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Ấn phẩm 3.png", // Ví dụ: "assets/downloads/poster-01.png"
    link: "https://drive.google.com/file/d/1j7FfN7B7j1m2mS7_gZTexUTjBqMGG517/view?usp=drive_link"
  },
  {
    id: "poster-04",
    category: "poster",
    title: "Poster truyền thông",
    description: "Thiết kế poster.",
    image: "assets/images/Ấn phẩm.png", // Ví dụ: "assets/images/poster-01.png"
    previewPdf: "assets/downloads/Ấn phẩm.png", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Ấn phẩm.png", // Ví dụ: "assets/downloads/poster-01.png"
    link: "https://drive.google.com/file/d/1MZUlV-Uem4n8PTYAM12mRL6kwIhOI8Zi/view?usp=drive_link"
  },
  {
    id: "poster-05",
    category: "poster",
    title: "Poster truyền thông",
    description: "Thiết kế poster.",
    image: "assets/images/Steam (1).png", // Ví dụ: "assets/images/poster-01.png"
    previewPdf: "assets/downloads/STEAM.pdf", // Không có PDF => xem trước bằng ảnh
    download: "assets/downloads/Steam (1).png", // Ví dụ: "assets/downloads/poster-01.png"
    link: "https://canva.link/m01mssmybiiqb8s"
  }
  /* THÊM DỰ ÁN MỚI: đặt dấu phẩy sau object phía trên, rồi dán:
  ,{
    id: "slide-02",
    category: "slide",
    title: "Bài giảng E-learning Vật lý 12",
    description: "Bài giảng về Từ trường.",
    image: "assets/images/vat-ly-12.png",
    previewPdf: "assets/downloads/vat-ly-12.pdf",
    download: "assets/downloads/bai-giang-vat-ly-12.pptx",
    link: ""
  }
  */
];
