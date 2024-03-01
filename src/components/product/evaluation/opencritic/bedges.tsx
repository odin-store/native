export default function OpencriticBedges(props: { tier: string }) {
  if (props.tier === "Mighty") {
    return (
      <img className="opencritic-tier-bedge" src="/ui/opencritic/mighty.png" />
    );
  } else if (props.tier === "Strong") {
    return (
      <img className="opencritic-tier-bedge" src="/ui/opencritic/strong.png" />
    );
  } else if (props.tier === "Fair") {
    return (
      <img className="opencritic-tier-bedge" src="/ui/opencritic/fair.png" />
    );
  } else {
    return (
      <img className="opencritic-tier-bedge" src="/ui/opencritic/weak.png" />
    );
  }
}
