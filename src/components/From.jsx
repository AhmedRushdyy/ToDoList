import { useState } from "react";

export function From({ onAddNewItem }) {
  const [itemv, setItemv] = useState("");
  const [quant, setQuant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemv) return;
    const newList = {
      id: Date.now(),
      name: itemv,
      quantity: quant,
      packed: false,
    };
    onAddNewItem(newList);
    setItemv("");
    setQuant(1);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <span>add items to your list 👜</span>
      <input
        type="number"
        value={quant}
        onChange={(e) => setQuant(+e.target.value)}
      />
      <input
        type="text"
        placeholder="item..."
        value={itemv}
        onChange={(e) => setItemv(e.target.value)}
      />

      <button>add</button>
    </form>
  );
}
