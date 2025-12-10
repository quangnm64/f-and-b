"use client"; // ⭐️ BẮT BUỘC: Cho phép các components tương tác (MUI Button, Next Link) hoạt động.

import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, Stack, Container, Paper } from "@mui/material"; 
// Icons cho phần Giá trị Cốt lõi
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';

// ⭐️ Định nghĩa màu sắc chủ đạo
const PRIMARY_COLOR = '#3C4A60'; // Xanh Navy (Màu nền chữ chính)
const ACCENT_COLOR = '#ff8c00'; // Màu Cam (Màu điểm nhấn/nổi bật)

// Component phụ cho các Điểm nổi bật (Sử dụng cho Section 3)
// Component phụ cho các Điểm nổi bật (Sử dụng cho Section 3)
const FeatureBox = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Paper 
        elevation={6} 
        sx={{ 
            p: 3, 
            borderRadius: 2, 
            height: '100%', 
            transition: 'all 0.3s ease-in-out', // Thêm transition cho mọi thay đổi
            textAlign: 'center', 
            // Đã đổi style box hover
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 10px 20px ${ACCENT_COLOR}30`,
                
                // ⭐️ CSS LỒNG GHÉP: Đổi màu chữ Title bên trong khi hover Paper
                '& .feature-title': {
                    color: ACCENT_COLOR,
                }
            }
        }}
    >
        {/* Icon (Màu ACCENT_COLOR mặc định) */}
        <Box sx={{ color: ACCENT_COLOR, mb: 1.5, fontSize: '2rem' }}>
            {icon}
        </Box>
        
        {/* Title (Màu PRIMARY_COLOR mặc định) */}
        <Typography 
            variant="h6" 
            fontWeight={700} 
            mb={1} 
            color={PRIMARY_COLOR} // ⭐️ MÀU MẶC ĐỊNH LÀ PRIMARY_COLOR
            className="feature-title" // ⭐️ Thêm class để dễ dàng nhắm mục tiêu bằng CSS lồng ghép
            sx={{ transition: 'color 0.3s' }} // Thêm transition riêng cho màu chữ
        >
            {title}
        </Typography>
        
        <Typography variant="body2" color="#666">
            {description}
        </Typography>
    </Paper>
);


export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, textAlign: 'center' }}>
      <main>
        
        {/* 1. Hình ảnh Nổi bật (HERO SECTION) */}
        <Box sx={{ 
            width: '100%', 
            maxWidth: 1100, 
            margin: '0 auto',
            height: { xs: 250, md: 450 },
            mb: 6,
            borderRadius: 3, 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            position: 'relative',
          }}
        >
          <Image
            src="https://i.pinimg.com/1200x/54/fa/34/54fa348af6a020adf27b599c02474a79.jpg"
            alt="Món ăn nổi bật của nhà hàng F&B"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </Box>

        {/* 2. Giới thiệu & CTA */}
        <Box sx={{ maxWidth: 800, margin: '0 auto', px: 2, mb: 6 }}>
          <Typography 
            variant="h2" 
            fontWeight={800} 
            mb={2} 
            color={PRIMARY_COLOR}
            sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
          >
            Nơi Khởi Nguồn Cảm Hứng Ẩm Thực
          </Typography>
          <Typography 
            variant="h6" 
            mb={4} 
            color="#555"
            sx={{ maxWidth: 650, margin: '0 auto 32px auto' }}
          >
            Khám phá thực đơn phong phú từ món Á sang Âu, cùng không gian ấm cúng 
            và dịch vụ tận tâm.
          </Typography>
        
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            {/* Nút 1: Đặt bàn */}
            <Button
              component={Link}
              href="/booking"
              variant="contained"
              sx={{
                background: ACCENT_COLOR,
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 700,
                boxShadow: `0 4px 10px ${ACCENT_COLOR}60`,
                transition: 'all 0.3s',
                '&:hover': {
                  background: PRIMARY_COLOR,
                  boxShadow: `0 6px 15px ${PRIMARY_COLOR}60`,
                  transform: 'translateY(-1px)',
                }
              }}
            >
              ĐẶT BÀN NGAY
            </Button>
            {/* Nút 2: Xem Menu */}
            <Button
              component={Link}
              href="/menu"
              variant="outlined"
              sx={{
                borderColor: PRIMARY_COLOR,
                color: PRIMARY_COLOR,
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: ACCENT_COLOR,
                  background: '#f8f8f8',
                  color: ACCENT_COLOR,
                }
              }}
            >
              XEM THỰC ĐƠN
            </Button>
          </Stack>
        </Box>

        <hr style={{ width: '50%', margin: '64px auto', border: 'none', borderTop: `1px solid ${ACCENT_COLOR}20` }} />

        {/* 3. TẠI SAO CHỌN CHÚNG TÔI (VALUE PROPOSITION) */}
        <Box sx={{ mb: 8, px: 2 }}>
            <Typography variant="h4" fontWeight={800} mb={5} color={PRIMARY_COLOR}>
                ✨ ƯU ĐIỂM VƯỢT TRỘI ✨
            </Typography>
            
            <Stack 
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                justifyContent="center"
                alignItems="stretch" 
                sx={{ maxWidth: 1000, margin: '0 auto' }}
            >
                <Box sx={{ flex: '1 1 300px' }}>
                    <FeatureBox 
                        icon={<LocalDiningIcon sx={{ fontSize: 40 }} />} 
                        title="Nguyên Liệu Tươi Sống"
                        description="Chúng tôi cam kết sử dụng nguyên liệu được chọn lọc kỹ lưỡng, tươi ngon mỗi ngày từ các nhà cung cấp uy tín."
                    />
                </Box>
                <Box sx={{ flex: '1 1 300px' }}>
                    <FeatureBox 
                        icon={<FavoriteIcon sx={{ fontSize: 40 }} />} 
                        title="Dịch Vụ Tận Tâm"
                        description="Đội ngũ nhân viên chuyên nghiệp, thân thiện, luôn sẵn lòng phục vụ để mang đến trải nghiệm hài lòng tuyệt đối."
                    />
                </Box>
                <Box sx={{ flex: '1 1 300px' }}>
                    <FeatureBox 
                        icon={<SpaIcon sx={{ fontSize: 40 }} />} 
                        title="Không Gian Đẳng Cấp"
                        description="Thiết kế hiện đại, ấm cúng và sang trọng, lý tưởng cho mọi sự kiện từ hẹn hò riêng tư đến tiệc công ty."
                    />
                </Box>
            </Stack>
        </Box>

        <hr style={{ width: '50%', margin: '64px auto', border: 'none', borderTop: `1px solid ${ACCENT_COLOR}20` }} />

        {/* 4. MÓN ĂN/ĐỒ UỐNG NỔI BẬT (FEATURED ITEM) */}
        <Box sx={{ mb: 8, px: 2 }}>
            <Typography variant="h4" fontWeight={800} mb={5} color={PRIMARY_COLOR}>
                🍔 MÓN ĐẶC TRƯNG TRONG TUẦN 🍹
            </Typography>
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'center',
                    maxWidth: 1100,
                    margin: '0 auto',
                    textAlign: 'left',
                }}
            >
                {/* Cột Nội dung */}
                <Box sx={{ flex: '1 1 50%' }}>
                    <Box sx={{ px: { xs: 0, md: 4 } }}>
                        <Typography variant="h6" color={ACCENT_COLOR} fontWeight={700}>
                            Sự Hòa Quyện Tuyệt Hảo
                        </Typography>
                        <Typography variant="h3" fontWeight={800} mb={2} color={PRIMARY_COLOR}>
                            Signature Salmon Steak
                        </Typography>
                        <Typography variant="body1" mb={3} color="#555">
                            Thưởng thức món Salmon Steak được chế biến hoàn hảo, với lớp da giòn tan 
                            và phần thịt cá hồi mềm tan trong miệng, ăn kèm sốt chanh leo bơ tỏi đặc biệt. 
                            Món ăn này là sự kết hợp tinh tế giữa ẩm thực châu Âu và hương vị nhiệt đới.
                        </Typography>
                        <Button 
                            component={Link} 
                            href="/menu/signature-salmon" 
                            variant="text" 
                            endIcon={<LocalDiningIcon />}
                            sx={{ color: ACCENT_COLOR, fontWeight: 600 }}
                        >
                            Xem Chi Tiết Món
                        </Button>
                    </Box>
                </Box>
                
                {/* Cột Hình ảnh */}
                <Box sx={{ flex: '1 1 50%' }}>
                    <Box 
                        sx={{ 
                            height: { xs: 300, md: 400 }, 
                            borderRadius: 3, 
                            overflow: 'hidden', 
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                            position: 'relative',
                            width: '100%',
                        }}
                    >
                        <Image
                            src="https://i.pinimg.com/736x/d7/35/a8/d735a8d18e7c7f13f3d456a5f84eceea.jpg"
                            alt="Signature Salmon Steak"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 960px) 100vw, 50vw"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
        
      </main>
    </Container>
  );
}