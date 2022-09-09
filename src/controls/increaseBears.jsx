import { useStore } from "../useStore/useStore";

function IncreaseBears() {
  const increaseBears = useStore((state) => state.increaseBears);
  return <button onClick={increaseBears}>one up</button>;
}
export default IncreaseBears;
