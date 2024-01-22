import { useContext } from "react";
import { BudgetAllocatorContext } from "../context/BudgetAllocatorContext";

function RemainingComponent({ remaining }) {
  const budgetAllocatorCxt = useContext(BudgetAllocatorContext);

  return (
    <div className="notification is-primary is-light has-text-weight-bold">
      Remaining: &nbsp;{budgetAllocatorCxt?.currencySign} &nbsp;
      {remaining}
    </div>
  );
}

export default RemainingComponent;
