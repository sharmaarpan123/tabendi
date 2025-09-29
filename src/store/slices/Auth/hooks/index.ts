import { useSelector } from "react-redux";

export const useCurrency = () => {
  const { currency, currencySymbol } = useSelector((s: any) => s.auth);
  return { currency, currencySymbol };
};

export const useAuth = () => {
  const auth = useSelector((s: any) => s.auth);
  return auth;
};
