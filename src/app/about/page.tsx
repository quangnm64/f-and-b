import { Box, Typography, Paper } from "@mui/material";

// ⭐️ Màu chủ đạo để làm nổi bật các hộp
const ACCENT_COLOR = '#ff8c00'; // Màu cam đậm (Giống màu logo F&B)
const BOX_SHADOW_HOVER = '0 8px 25px rgba(255, 140, 0, 0.3)'; 
const BANNER_IMAGE_URL = 'https://i.pinimg.com/1200x/c0/72/8b/c0728be8022bf2e9acde6c4ce0df4fb1.jpg';

export default function AboutPage() {
  // Style chung cho Paper, thêm hiệu ứng chuyển động và tương tác
  const paperInteractiveStyle = {
    p: 3,
    borderRadius: 3,
    flex: "1 1 280px",
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    
    // ⭐️ Hiệu ứng khi hover
    '&:hover': {
      // Scale ra nhẹ (phóng to nhẹ)
      transform: 'scale(1.03)', 
      // Shadow nổi bật hơn với màu chủ đạo
      boxShadow: BOX_SHADOW_HOVER, 
    },
    // Áp dụng style cho Typography con bên trong
    '&:hover h5': {
      color: ACCENT_COLOR,
      transition: 'color 0.3s ease-in-out',
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, margin: '0 auto' }}>
      
      {/* 1. Banner */}
      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          mb: 4,
          height: 350,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          // ⭐️ Thay thế bằng URL ảnh chất lượng cao
          src={BANNER_IMAGE_URL} 
          alt="About Banner - Nhà hàng sang trọng"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* 2. Tiêu đề và Giới thiệu */}
      <Typography variant="h3" fontWeight={700} mb={2} color={ACCENT_COLOR}>
        Về Chúng Tôi
      </Typography>
        <Typography 
        variant="body1" 
        mb={4} 
        sx={{ 
            maxWidth: 900, // Tăng nhẹ max width cho đoạn văn dài hơn
            color: '#333', // Màu chữ đậm hơn, rõ ràng hơn trên nền trắng
            fontSize: { xs: '1rem', md: '1.15rem' }, // Tăng kích thước chữ nhẹ
            lineHeight: 1.7, // Tăng line height cho dễ đọc
            borderLeft: `5px solid ${ACCENT_COLOR}`, // ⭐️ Thêm đường kẻ bên trái để tạo điểm nhấn
            pl: 3, // Padding trái để tách chữ khỏi đường kẻ
            py: 1.5, // Padding trên dưới nhẹ
            backgroundColor: '#fffaf5', // Nền màu kem nhạt cho khối này
            borderRadius: 1,
            boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
        }}
        >
            F&B Restaurant – Coffee là hệ thống nhà hàng và café được xây dựng với
            mục tiêu mang đến trải nghiệm <Box component="span" sx={{ color: ACCENT_COLOR, fontWeight: 700 }}>ẩm thực chất lượng cao</Box> và không gian 
            <Box component="span" sx={{ color: '#000', fontWeight: 600 }}>thư giãn lý tưởng</Box>. Chúng tôi tự hào là điểm đến quen thuộc của những người yêu thích 
            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 500 }}>sự tinh tế và hương vị tuyệt hảo</Box> trong từng khoảnh khắc.
        </Typography>

      {/* 3. 3 Boxes – Sứ mệnh, Tầm nhìn, Giá trị (Interactive) */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: 'center', // Căn giữa các hộp khi có đủ không gian
        }}
      >
        
        {/* Hộp 1: Sứ mệnh */}
        <Paper sx={paperInteractiveStyle}>
          <Typography variant="h5" fontWeight={700} color="#333">
            Sứ mệnh
          </Typography>
          <Typography mt={1} color="#666">
            Mang đến trải nghiệm ẩm thực đẳng cấp, kết hợp giữa hương vị truyền thống và sự sáng tạo hiện đại, phục vụ khách hàng bằng sự tận tâm và chuyên nghiệp cao nhất.
          </Typography>
        </Paper>

        {/* Hộp 2: Tầm nhìn */}
        <Paper sx={paperInteractiveStyle}>
          <Typography variant="h5" fontWeight={700} color="#333">
            Tầm nhìn
          </Typography>
          <Typography mt={1} color="#666">
            Trở thành chuỗi F&B dẫn đầu khu vực Đông Nam Á trong vòng 5 năm tới, được biết đến là biểu tượng của chất lượng, sự đổi mới và dịch vụ khách hàng xuất sắc.
          </Typography>
        </Paper>

        {/* Hộp 3: Giá trị */}
        <Paper sx={paperInteractiveStyle}>
          <Typography variant="h5" fontWeight={700} color="#333">
            Giá trị
          </Typography>
          <Typography mt={1} color="#666">
            **Chất lượng** – Nguyên liệu tươi ngon; **Tận tâm** – Dịch vụ từ trái tim; **Sáng tạo** – Không ngừng đổi mới; **Bền vững** – Phát triển có trách nhiệm.
          </Typography>
        </Paper>
        
      </Box>
    </Box>
  );
}