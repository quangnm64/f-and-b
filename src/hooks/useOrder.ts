import OrderContext from "@/context/OrderContext";
import { useContext } from "react";

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used in OrderProvider");
  return ctx;
};
