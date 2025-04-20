import { createSignal } from "solid-js";

export const Counter = () => {
  const [count, setCount] = createSignal(1);

  return (
    <button type="button" onClick={() => setCount(count() + 1)}>
      {count()}
    </button>
  );
};
