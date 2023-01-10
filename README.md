# Getting Started with Create React App and Redux

- `npm install`
- `npm start`
- Open new tab of Terminal and run command `cd server`
- Run command `npm install` to install all the dependencies
- Run command `npm start` to start the Server

# Kiến thức học được

## I. Json Web Token (JWT)

### 0. Mở đầu

**Token-based authentication** là phương thức xác thực bằng chuỗi mã hóa. Một hệ thống sử dụng **Token-based authentication** cho phép người dùng nhập username/password (hoặc tương tự) để nhận về 1 chuỗi mã - được gọi là token. Mã này được sử dụng để "xác minh" quyền truy cập vào tài nguyên mà không cần phải cung cấp lại username/password nữa.

### 1. JSON Web Token (JWT) là gì?

Để giải thích theo cách đơn giản nhất thì nó là 1 chuỗi mã hóa mà gốc gác ban đầu của nó là 1 chuỗi JSON. Tức là ban đầu, chuỗi thông tin ấy là 1 chuỗi dạng JSON (easy readable) , sau đó bằng phương pháp mã hóa nào đó, nó trở thành 1 chuỗi ký tự lộn xộn ( có thể hiểu là như vậy ) mà mắt thường mình nhìn chả hiểu nó có những thông tin gì 🤔

Như vậy, Bảo mật JWT là phuơng pháp xác thực quyền truy cập (Authentication) bằng JSON Web Token.

### 2. Cấu trúc của một JWT

Dưới đây là 1 JSON Web Token:

```md
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiJuaHMzMTA4IiwiZXhwIjoxNTU4MDYzODM3fQ.
449KVmOFWcpOUjnYGm-f1QWhY8N-DerKDfTK0JQm1Nc
```

Trông rối rắm thế kia thì có cấu trúc quái gì nhỉ? Thế nhưng không, JWT có cấu trúc của nó đấy các bạn nhé.

JWT trên bao gồm 3 phần:

- Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
- Payload: eyJzdWIiOiJuaHMzMTA4IiwiZXhwIjoxNTU4MDYzODM3fQ
- Signature: 449KVmOFWcpOUjnYGm-f1QWhY8N-DerKDfTK0JQm1Nc

Và chúng được phân cách nhau bởi dấu chấm (.)

Trông thì có vẻ phức tạp, nhưng cấu trúc của nó theo format như sau:

```xml
<base64-encoded header>.<base64-encoded payload>.<HMACSHA256(base64-encoded signature)>
```

### 3. Tìm hiểu kĩ càng hơn về JWT

Đây là ảnh để mô tả các thành phần bên trong JWT

![JWT](https://images.viblo.asia/8f216a92-af6d-417a-806a-3cab6bc2a491.jpeg)

Bây giờ, mình sẽ giải thích từng thành phần một nhóe 😘

#### 3.1. Header

Header bao gồm hai phần chính:

- typ - Loại token (mặc định là JWT - Thông tin này cho biết đây là một Token JWT)
- alg - Thuật toán đã dùng để mã hóa (mặc định là HS256, ngoài ra còn có thể là RSA, ...v.v)

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Đoạn JSON trên sau khi được mã hóa base64url sẽ trở thành như sau:

```java
String header = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
System.out.println(Base64.getUrlEncoder().encodeToString(header.getBytes()));
```

Output: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`

#### 3.2. Payload

Phần thứ 2 của token đó là Payload, nơi chứa các nội dung của thông tin (claims). Thông tin truyền đi có thể là mô tả của 1 thực thể (ví dụ như người dùng) hoặc cũng có thể là các thông tin bổ sung thêm cho phần Header. Nhìn chung, chúng được chia làm 3 loại: reserved, public và private.

- **Reversed**: là những thông tin đã được quy định ở trong **IANA JSON Web Token Claims registry**. Những thông tin này không có cái nào là bắt buộc cả. Tuy nhiên tùy vào từng ưng dụng bạn implement mà hãy ràng buộc yêu cầu bắt buộc đối với những thông tin cần thiết

  - iss (issuer): tổ chức phát hành token (không bắt buộc)
  - sub (subject): người dùng được phân quyền (không bắt buộc)
  - aud (audience): đối tượng sử dụng token (không bắt buộc)
  - exp (expiration time): thời gian hết hạn của token (bắt buộc)
  - nbf (not before): thời gian bắt đầu sử dụng token (không bắt buộc)
  - iat (issued at): thời gian phát hành token (không bắt buộc)
  - jti (JWT ID): mã định danh của token (không bắt buộc)

- **Public**: Khóa có thể define tùy theo ý muốn của người sử dụng JWT. Tuy nhiên để tránh trùng lặp, khóa nên được quy định ở trong IANA JSON Web Token Registry hoặc là 1 URL có chứa không gian tên không bị trùng lặp. Ví dụ:

```json
"https://www.techmaster.vn/jwt_claims/is_admin": true
```

- **Private**: Phần thông tin thêm dùng để truyền qua giữa các máy thành viên. Ví dụ:

```json
{
  "user_id": 1,
  "user_name": "techmaster",
  "user_email": "
}
```

**Ta có ví dụ cho phần payload như sau:**

```json
{
  "sub": "nhs3108",
  "exp": 1558065429
}
```

Đoạn JSON trên sẽ được mã hóa base64url và trở thành như sau:

```java
String payload = "{"sub":"nhs3108","exp":1558063837}";
System.out.println(Base64.getUrlEncoder().encodeToString(payload.getBytes()));
```

Output: `eyJzdWIiOiJuaHMzMTA4IiwiZXhwIjoxNTU4MDYzODM3fQ`

#### 3.3. Signature

Phần chữ ký được tạo bằng cách kết hợp 2 phần Header + Payload, rồi mã hóa nó lại bằng 1 giải thuật encode nào đó, càng phức tạp thì càng tốt, ví dụ như `HMAC SHA-256`

Ta có thể xem lại công thức mà mình vừa nhắc ở đầu chủ đề JWT này

```xml
<base64-encoded header>.<base64-encoded payload>.<HMACSHA256(base64-encoded signature)>
```

Với signature là phần kết hợp giữa header và payload Ở 2 phần trên, ta đã có:

```java
String header = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
String encodedHeader = Base64.getUrlEncoder().encodeToString(header.getBytes());

String payload = "{"sub":"nhs3108","exp":1558063837}";
String encodedPayload = Base64.getUrlEncoder().encodeToString(payload.getBytes());

String signature = encodedHeader + "." + encodedPayload;

String encodedSignature = HMACSHA256.encode(signature, scretKey);

System.out.println(encodedSignature);
```

Output: `449KVmOFWcpOUjnYGm-f1QWhY8N-DerKDfTK0JQm1Nc`

Tổng lại 3 phần, ta có chuỗi JWT như sau:
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuaHMzMTA4IiwiZXhwIjoxNTU4MDYzODM3fQ.449KVmOFWcpOUjnYGm-f1QWhY8N-DerKDfTK0JQm1Nc`

## II. Luồng xử lý của 1 hệ thống sử dụng bảo mật JWT
