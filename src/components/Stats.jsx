export function Stats({ num, packed }) {
  if (num === 0)
    return (
      <div className="stats">
        <h3>Add some tasks to your list 🚀</h3>
      </div>
    );
  const per = ((packed / num) * 100).toFixed(2);
  return (
    <div className="stats">
      {per == 100 ? (
        <h3>You finished all the tasks in your list good Job 👍</h3>
      ) : (
        <h3>
          🛒 you have {num} task in your check list, and you already done{" "}
          {packed} ({per}%)💼
        </h3>
      )}
    </div>
  );
}
