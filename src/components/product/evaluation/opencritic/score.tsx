import { ResponsivePie } from "@nivo/pie";

export enum ScoreColor {
  red = "#eb5732",
  yellow = "#ebb932",
}

export enum ScoreType {
  topCritics = "인증된 평가",
  critics = "긍정적 평가",
}

export default function OpencriticScore(props: {
  data: number;
  color: ScoreColor;
  type: ScoreType;
}) {
  const data = [
    {
      id: "background",
      label: "background",
      value: 100 - props.data,
    },
    {
      id: "score",
      label: "score",
      value: props.data,
    },
  ];

  return (
    <div className="opencritic-chart">
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.9}
        cornerRadius={12}
        activeOuterRadiusOffset={8}
        colors={["#111111", props.color]}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        isInteractive={false}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[]}
      />
      <div className="opencritics-percent">
        <p>{props.type}</p>
        <h3>{props.data}%</h3>
      </div>
    </div>
  );
}
