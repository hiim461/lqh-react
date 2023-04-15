import React, { useState, useEffect } from "react";

function useRequest(requestFn, options = {}) {
  const { dependencies = [] } = options;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const request = async () => {
    try {
      setIsLoading(true);
      const data = await requestFn();
      setData(data);
    } catch (error) {
      //dù call API thành công hay thất bại thì nó vẫn chạy vào đây
      // error.response.data: format của axios
      setError(error.response.data.message || "Some thing went wrong!!!"); // ưu tiên error.response.data.message trước, nếu không có thì hiện phía sau với toán tử ||
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request();
  }, [...dependencies]);
  return { data, isLoading, error };
}

export default useRequest;
