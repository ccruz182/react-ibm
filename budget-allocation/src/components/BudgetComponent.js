import { useState, useContext } from "react";
import { BudgetAllocatorContext } from "../context/BudgetAllocatorContext";

function BudgetComponent({ cbBudget, spent }) {
  const budgetAllocatorCxt = useContext(BudgetAllocatorContext);
  const [budget, setBudget] = useState(0);

  const onChangeInputBudget = event => {
    const qty = event.target.value;

    if (qty > 20000) {
      alert("Budget is more than limit 20000. Adjust it, please");
      return;
    }

    if (spent > qty) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    setBudget(qty);
    cbBudget(qty);
  }

  return (
    <div className="notification is-link is-light">
      <div className="field is-horizontal">
        <div className="field-label is-small">
          <label className="label is-size-6">
            Budget: &nbsp;{budgetAllocatorCxt?.currencySign}{" "}
          </label>
        </div>
        <div className="field-body">
          <div className="field is-small">
            <p className="control">
              <input
                className="input"
                type="number"
                max={20000}
                step={10}
                value={budget}
                onChange={onChangeInputBudget}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetComponent;
