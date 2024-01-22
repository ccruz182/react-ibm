import { useContext } from "react";
import { BudgetAllocatorContext } from "../context/BudgetAllocatorContext";

function TableComponent({ allocations, cbAllocationChange }) {
  const budgetAllocatorCxt = useContext(BudgetAllocatorContext);

  const onClickIncrease = (key) => {
    cbAllocationChange({
      department: key,
      allocationType: "ADD",
      value: 10,
    });
  };

  const onClickDecrease = (key) => {
    cbAllocationChange({
      department: key,
      allocationType: "SUB",
      value: 10,
    });
  };

  const tbodyAllocations = Object.entries(allocations)
    .filter((a) => a[1].value > 0)
    .map((alc) => {
      return (
        <tr key={alc[0]}>
          <td>{alc[1].name}</td>
          <td>
            {budgetAllocatorCxt.currencySign} {alc[1].value}
          </td>
          <td>
            <button
              className="button is-primary is-rounded"
              onClick={() => onClickIncrease(alc[0])}
            >
              <span className="is-size-5 has-text-centered has-text-vcentered">
                +
              </span>
            </button>
          </td>
          <td>
            <button
              className="button is-danger is-rounded"
              onClick={() => onClickDecrease(alc[0])}
            >
              <span className="is-size-5 has-text-centered has-text-vcentered">
                -
              </span>
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div>
      <h3 className="title is-4">Allocation</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
          </tr>
        </thead>
        <tbody>{tbodyAllocations}</tbody>
      </table>
    </div>
  );
}

export default TableComponent;
