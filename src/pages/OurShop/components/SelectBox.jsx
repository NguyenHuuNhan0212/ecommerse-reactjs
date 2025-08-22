function SelectBox({ options, getValue }) {
  console.log(options);
  return (
    <select onChange={(e) => getValue(e.target.value)}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
