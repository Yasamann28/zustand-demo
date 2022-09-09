import { useStore } from "../useStore/useStore";

function ResetBears() {
  const resetBears = useStore((state) => state.resetBears);
  return <button onClick={resetBears}>reset all</button>;
}
export default ResetBears;
