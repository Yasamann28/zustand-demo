import { useStore } from "../useStore/useStore";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h2>{bears} around here...</h2>;
}
export default BearCounter;
