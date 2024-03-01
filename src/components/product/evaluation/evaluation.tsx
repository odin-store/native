import OpenCritic from "./opencritic/openCritic";
import UserEvaluation from "./userEvaluation";

export default function Evaluation() {
  return (
    <div className="product-evaluation">
      <OpenCritic />
      <div className="product-divider"></div>
      <UserEvaluation />
    </div>
  );
}
