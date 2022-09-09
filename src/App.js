import IncreaseBears from "./controls/increaseBears";
import ResetBears from "./controls/resetBears";
import BearCounter from "./controls/bearCounter";

export default function App() {
  return (
    <div className="App">
      <BearCounter />
      <IncreaseBears />
      <ResetBears />
    </div>
  );
}
