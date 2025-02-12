# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
1. Dowload MetaMash on Google Extension. **Xem cách lấy khóa để dùng miễn phí 20 tài khoản**
![image](https://github.com/user-attachments/assets/11a88850-d1f2-4905-8a41-561e9f349090)

2. Test và deploy smart contract trên môi trường localhost.: 
npx hardhat node
npx hardhat run .\scripts\00-deploy.js --network localhost
npx hardhat run .\scripts\01-seedings.js --network localhost

3. Trong file config.js thay lại địa chỉ đã deploy ở trên
![image](https://github.com/user-attachments/assets/86c26427-8431-4d32-a2e1-038dabf3de53)

5. Chạy web dùng lệnh:
npm start  

6. Bấm vào connect để kết nối với MetaMash
![image](https://github.com/user-attachments/assets/532305fa-57b2-4117-9b0b-433b49613bd5)


**Cách lấy address privte:**
1 Chạy lệnh: npx hardhat node -> sẽ hiện ra 20 account lấy address privat đầu tiên
2 Vào góc trên bên trái vào bấm thêm mạng:
![image](https://github.com/user-attachments/assets/f501830b-cfc3-4fe5-90d0-665b606a3ef9)
![image](https://github.com/user-attachments/assets/cfe250d9-f3a2-4834-9db3-ad6538a71817)
3 Bấm Lưu.
Vào Account. Bấm Thêm tài khoản và thêm -> Nhập tài khoản -> dán private address vào và lưu


