function CurrencySelector({ cbCurrency }) {
  const onChangeSelect = (event) => {
    cbCurrency(event?.target?.value);
  };

  return (
    <div className="select is-primary">
      <select onChange={onChangeSelect}>
        <option value={"$"}>$ Dollar</option>
        <option value={"£"}>£ Pound</option>
        <option value={"€"}>€ Euro</option>
        <option value={"₹"}>₹ Rupee</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
