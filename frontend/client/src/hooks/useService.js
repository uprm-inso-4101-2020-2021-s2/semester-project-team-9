import { useState } from "react";

//Github inspired Code
export default function useService() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [reqError, setReqError] = useState(null);

  const callService = (promise) => {
    setIsProcessing(true);
    return promise
      .then((response) => {
        setIsProcessing(false);
        return response;
      })
      .catch((error) => {
        setReqError(error);
        setIsProcessing(false);
        throw error;
      });
  };

  return { isProcessing, callService, reqError };
}
