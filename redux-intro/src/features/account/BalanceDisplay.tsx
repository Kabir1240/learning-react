import { useSelector } from "react-redux";
import { RootState } from "../../store/store"

function formatCurrency(value: number | bigint) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store: RootState) => store.account.balance)
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
