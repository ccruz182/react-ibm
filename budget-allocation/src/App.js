import { useContext, useState } from "react";

import "./App.css";
import "bulma/css/bulma.min.css";

import { BudgetAllocatorContext } from "./context/BudgetAllocatorContext";
import BudgetComponent from "./components/BudgetComponent";
import CurrencySelector from "./components/CurrencySelector";
import ChangeAllocationComponent from "./components/ChangeAllocationComponent";
import RemainingComponent from "./components/RemainingComponent";
import SpentComponent from "./components/SpentComponent";
import TableComponent from "./components/TableComponent";

function App() {
  const ctx = useContext(BudgetAllocatorContext);

  // States
  const [currencySign, setCurrencySign] = useState("$");
  const [budget, setBudget] = useState(ctx.budget);
  const [remaining, setRemaining] = useState(ctx.budget);
  const [spent, setSpent] = useState(0);

  const [allocation, setAllocation] = useState({
    MKT: { name: "Marketing", value: 0 },
    FIN: { name: "Finance", value: 0 },
    SAL: { name: "Sales", value: 0 },
    HR: { name: "Human Resources", value: 0 },
    IT: { name: "IT", value: 0 },
  });

  // Callbacks
  const cbBudget = (value) => {
    setBudget(value);
    setRemaining(value);
  };
  const cbCurrency = (value) => {
    setCurrencySign(value);
  };

  const cbAllocationChange = (allocationChange) => {
    console.log("ALL_CHANGE", allocationChange);
    if (remaining < allocationChange.value) {
      alert(
        "The value cannot exceed the remaining funds " +
          currencySign +
          "" +
          remaining
      );
      return;
    }

    const dp = allocationChange.department;
    const depAll = allocation[dp];
    let newVal = 0;
    let qtySpent = 0;
    if ("ADD" === allocationChange.allocationType) {
      newVal = depAll.value + allocationChange.value;
      qtySpent = allocationChange.value;
    } else {
      newVal = depAll.value - allocationChange.value;
      qtySpent = -allocationChange.value;
    }

    setAllocation({ ...allocation, [dp]: { ...depAll, value: newVal } });
    setSpent(spent + qtySpent);
    // setBudget(budget - qtySpent);
    setRemaining(remaining - qtySpent);
  };

  return (
    <BudgetAllocatorContext.Provider value={{ ...ctx, currencySign }}>
      <div className="container is-fluid">
        <h2 className="title">Company's Budget Allocation</h2>
        {/* HEADER */}
        <div className="columns">
          <div className="column is-4">
            <BudgetComponent cbBudget={cbBudget} spent={spent} />
          </div>
          <div className="column">
            <RemainingComponent remaining={remaining} />
          </div>
          <div className="column">
            <SpentComponent spent={spent} />
          </div>
          <div className="column">
            <CurrencySelector cbCurrency={cbCurrency} />
          </div>
        </div>

        {/* TABLE */}
        <TableComponent
          allocations={allocation}
          cbAllocationChange={cbAllocationChange}
        />

        {/* CHANGE */}
        <ChangeAllocationComponent cbAllocationChange={cbAllocationChange} />
      </div>
    </BudgetAllocatorContext.Provider>
  );
}

export default App;
