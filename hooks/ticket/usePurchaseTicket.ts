import { useMutation } from "react-query";
import * as api from "../../api";
import { IEOM, IPostCoreData } from "../../types";

export function usePurchaseTicket() {
  return useMutation({
    mutationFn: async (data: { type: IEOM; eomId: string }) => {
      const { data: ticket } = await api.purchaseTicket(data.type, data.eomId);
      return ticket;
    },
  });
}

export default usePurchaseTicket;
