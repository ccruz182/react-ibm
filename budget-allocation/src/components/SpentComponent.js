import { useContext } from "react";
import { BudgetAllocatorContext } from "../context/BudgetAllocatorContext";

function SpentComponent({ spent }) {
  const budgetAllocatorCxt = useContext(BudgetAllocatorContext);

  return (
    <div className="notification is-primary is-light has-text-weight-bold">
      Spent so far: &nbsp;{budgetAllocatorCxt?.currencySign} &nbsp;
      {spent}
    </div>
  );
}

export default SpentComponent;
