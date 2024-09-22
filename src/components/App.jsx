import { useState } from "react";
import "../index.css";
import { Logo } from "./Logo";
import { From } from "./From";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const num = items.length;
  let packed = 0;
  function clear() {
    const confirm = window.confirm("Are you sure you want to delete all items");
    if (confirm) setItems([]);
  }
  function handleNewItem(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  items.forEach((item) => {
    if (item.packed) packed++;
  });
  return (
    <div>
      <Logo />
      <From onAddNewItem={handleNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheck={handleCheck}
        onClear={clear}
      />
      <Stats num={num} packed={packed} />
    </div>
  );
}
