import React, { memo } from "react";

function Child() {
  console.log("Child render");
  return (
    <div>
      <h1 className="text-center">Child</h1>
    </div>
  );
}
//memo sẽ ghi nhớ output của component, khi component bị kích hoạt quá trình hiển thị lại, nó sẽ đi kiểm tra các giá trị props (nếu có), nếu có bất kì giá trị props nào bị thay đổi nó sẽ tiếp tục quá trình hiển thị lại, ngược lại nó sẽ không cần thực thi quá trình hiển thị lại mà lấy output đã được ghi nhớ ở lần trước để hiển thị ra

//Cách khai báo sử dụng memo
//memo: dùng để chặn chạy lại component con khi component cha chạy lại mà component con không có props hay state thay đổi để re-rendering
export default memo(Child);
//Khi nào nên sử dụng memo?????
//=> khi làm web cứ dùng component bình thường, khi nào dùng chức năng j đó lag quá thì khi đó mới kiểm tra xem vì sao=> tối ưu web => dung memo
