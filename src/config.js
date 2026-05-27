// src/config.js
export const siteConfig = {
  // Cấu hình riêng cho nút gọi ở phần Đặt Hàng
  orderHotline: { number: "+1 281 299 0989", display: "+1 281 299 0989" },

  locations: [
      { country: "USA", address: "11462 Pagemill Rd, Dallas, TX 75243" },
    { country: "Nhật Bản", address: "19-47 Daimon-cho, Kazo City, Saitama 347-0068, Nhật Bản" }
  ],
  
  hotlines: [
    { location: "Texas", number: "+1 281 299 0989", display: "+1 281 299 0989" }
  ],

paymentMethods: [
    { name: 'Zelle', desc: '' },
    { name: 'Venmo', desc: '' },
    { name: 'Cash App', desc: '' },
    { name: 'Ký check', desc: '(chụp 2 mặt gửi qua messenger)' },
    { name: 'Thanh toán theo cách khác', desc: '' },

  ],
  email: "lienhe@haruco.vn",
  
  facebook: {
    name: "Đai Chữa Đau Lưng Haruco Chính Hãng Nhật Bản",
    url: "https://facebook.com/61554902026755", 
    avatar: "/assets/logos/logo-haruco.png" 
  }
};