import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMuatation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (paylaoad: any) => {
    setPending(true);
    return apiMutation(paylaoad)
      .finally(() => setPending(false))
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
};
