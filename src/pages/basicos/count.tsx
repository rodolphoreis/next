import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCount(count + 10);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={count}
          name="count"
          placeholder="Digite um numero"
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button type="submit">Somar</button>
      </form>
      <p>Current count: {count}</p>
    </div>
  );
};

export default CountComponent;
