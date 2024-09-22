export function Item(props) {
  return (
    <span className={`item ${props.item.packed ? "packed" : ""}`}>
      <input
        type="checkbox"
        id={props.item.id}
        value={props.item.packed}
        onChange={() => {
          props.onCheck(props.item.id);
        }}
      />
      {/* )} */}

      <label htmlFor={props.item.id}>
        {" "}
        {[props.item.quantity, " ", props.item.name]}{" "}
      </label>
      <span className="del" onClick={() => props.onDeleteItem(props.item.id)}>
        {" "}
        ✖️
      </span>
    </span>
  );
}
