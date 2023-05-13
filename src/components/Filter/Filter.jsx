export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contact
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};
