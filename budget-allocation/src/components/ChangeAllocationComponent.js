import { useState, useContext } from "react";
import { BudgetAllocatorContext } from "../context/BudgetAllocatorContext";

function ChangeAllocationComponent({ cbAllocationChange }) {
  const budgetAllocatorCxt = useContext(BudgetAllocatorContext);
  const [dep, setDep] = useState("MKT");
  const [all, setAll] = useState("ADD");
  const [value, setValue] = useState(0);

  const onChangeDep = (e) => {
    setDep(e?.target?.value);
  };
  const onChangeAll = (e) => {
    setAll(e?.target?.value);
  };

  const onClickBtnSave = () => {
    cbAllocationChange({
      department: dep,
      allocationType: all,
      value,
    });
  };

  return (
    <>
      <h3 className="title is-4">Change allocation</h3>
      <div className="columns">
        <div className="column">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">Department</a>
            </p>
            <p className="control">
              <div className="select is-link" onChange={onChangeDep}>
                <select>
                  <option value={"MKT"}>Marketing</option>
                  <option value={"FIN"}>Finance</option>
                  <option value={"SAL"}>Sales</option>
                  <option value={"HR"}>Human Resources</option>
                  <option value={"IT"}>IT</option>
                </select>
              </div>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">Allocation</a>
            </p>
            <p className="control">
              <div className="select is-link" onChange={onChangeAll}>
                <select>
                  <option value={"ADD"}>Add</option>
                  <option value={"SUB"}>Subtract</option>
                </select>
              </div>
            </p>
          </div>
        </div>
        <div className="column">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">{budgetAllocatorCxt?.currencySign} </label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    className="input"
                    type="number"
                    step={10}
                    onChange={(e) => setValue(Number(e.target.value))}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <button class="button is-info" onClick={onClickBtnSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangeAllocationComponent;
