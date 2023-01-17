# Getting Started with Create React App and Redux

- `npm install`
- `npm start`
- Open new tab of Terminal and run command `cd server`
- Run command `npm install` to install all the dependencies
- Run command `npm run start` to start the Server
- Run command `npm run startAuth` to start the Authentication Server

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

### 1. Luồng xử lý

Chúng ta sẽ dùng sở đồ sau để hình dung luồng xử lý của 1 hệ thống sử dụng bảo mật JWT:

![JWT](https://images.viblo.asia/0cb529a7-8db9-424e-a994-e3ef28b16380.png)

Nhìn vào sơ đồ, ta có thể thấy luồng đi như sau:

1. User thực hiện login bằng cách gửi username/password (hoặc tương tự) hay sử dụng các tài khoản mạng xã hội lên phía Authentication Server (Server xác thực)

2. Authentication Server tiếp nhận các dữ liệu mà User gửi lên để phục vụ cho việc xác thực người dùng. Trong trường hợp thành công, Authentication Server sẽ tạo một JWT và trả về cho người dùng thông qua response.

3. Người dùng nhận được JWT do Authentication Server vừa mới trả về làm "chìa khóa" để thực hiện các "lệnh" tiếp theo đối với Application Server.

4. Application Server trước khi thực hiện yêu cầu được gọi từ phía User, sẽ verify JWT gửi lên. Nếu OK, tiếp tục thực hiện yêu cầu được gọi.

Mình sẽ minh họa cho các bạn dễ hiểu hơn bằng một ví dụ thực tế hơn trong cuộc sống nhé.

Bạn là một học sinh của 1 trường THPT A. Hôm nay bạn đến sớm hơn mọi hôm và muốn vào được lớp thì cửa lớp phải được mở. Nhưng trường bạn khác với những trường khác là cửa của các lớp luôn khóa khi hết giờ và bảo vệ thì chẳng có nhiệm vụ phải đi mở cửa từng lớp. Thay vào đó, mỗi lớp sẽ phải cử ra người để đi lấy chìa khóa tại phòng bảo vệ để mở cửa cho lớp mình. Như thế, bạn có thể hình dung:

    * User là bạn
    * Authentication Server là phòng bảo vệ
    * JWT là chìa khóa
    * Application Server là lớp học

Đầu tiên, bạn phải cầm thẻ học sinh tới phòng bảo vệ, để bác bảo vệ xác định bạn có đúng là học sinh của trường ko, học lớp nào và giao chìa khóa (Tuơng ứng với việc user gửi thông tin về username/password để Authenticaion Server xác thực và trả về cho người dùng 1 mã JWT). Bạn nhận được chìa khóa, lấy chìa khóa để mở cửa trước khi có thể vào bên trong lớp (Tuơng ứng với việc người dùng sử dụng JWT kèm theo để Application Verify trước khi thực hiện các lệnh mà User yêu cầu)

### 2. Hệ thống Verify chuỗi JWT thế nào?

Chuỗi JWT có cấu trúc **H.P.S** được **Client** gửi lên. **Server** sẽ làm tương tự như sau:

- Set S1 = S
- Set S2 = HMAC(SHA256(H.P) vỡi secret key của hệ thống) (Giả sử hệ thống sử dụng encryption algorithms SHA256)
- So sánh S1 == S2 ?

-> Nếu S1 và S2 khớp nhau, tức là chữ ký hợp lệ, hệ thống mới tiếp decode payload và tục kiểm tra các data trong payload. Ví dụ trường exp (expiration date)

## III. Axios Interceptors

Interceptor có thể hiểu như một bước tường lưới chặn các request, response của ứng dụng để cho phép kiểm tra, thêm vào header hoặc thay đổi các param của request, response. Nó cho phép chúng ta kiểm tra các token, Content-Type hoặc tự thêm các header vào request. Điều này cho phép chúng ta tận dụng tối đa thao tác chỉnh sửa header, body, param request gửi lên server sao cho hợp lý nhất, bảo mật nhất.

- Ví dụ một cái đơn giản về việc: `"tự thêm các header vào request"`:

  - Ta sử dụng useEffect để fetch API

  ```js
  useEffect(() => {
    async function fetchData(token) {
      const res = await axios.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }, []);
  ```

  - Bây giờ... hãy tưởng tượng mỗi khi các bạn muốn fetchData thì đều phải thêm headers Authorization vào và lặp lại liên tục như vậy. Vậy có cách nào để không phải thêm headers Authorization vào mỗi lần gọi API không? Có, đó là sử dụng Interceptors.

  - Bây giờ, ta sẽ tạo ra một thư mục tên là `api`, và nằm trong `src`. Đường dẫn sẽ là `../src/api`. Tạo 1 file tên là `axios.js`, file này để config mọi thứ liên quan tới axios (api endpoint, interceptors, v.v...)

  ```js
  import axios from "axios";

  export default axios.create({
    baseURL: "http://localhost:5000",
  });

  export const axiosPrivate = axios.create({
    baseURL: "http://localhost:3008",
  });
  ```
