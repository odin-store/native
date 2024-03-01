import OpencriticBedges from "./bedges";
import OpencriticScore, { ScoreColor, ScoreType } from "./score";

export default function OpenCritic() {
  return (
    <div className="opencritic">
      <div className="opencritic-title">
        <h3>평론가 추천</h3>
        <p>
          <a href="https://opencritic.com/" target="_">
            Opencritic
          </a>
          에서 제공하는 평가에요
        </p>
      </div>
      <div className="opencritic-score">
        <OpencriticBedges tier="Mighty" />
        <OpencriticScore
          data={84}
          color={ScoreColor.yellow}
          type={ScoreType.critics}
        />
      </div>
    </div>
  );
}
