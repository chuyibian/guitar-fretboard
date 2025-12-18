import "./RulerBar.css";

export default function RulerBar(props: { frets?: number }) {
  const frets = props.frets ?? 12;
  const items = Array.from({ length: frets + 1 }, (_, i) => i);
  return (
    <div className="rulerBar">
      <div className="emojiBtn">😊</div>
      <div className="ticks">
        {items.map((f) => (
          <div key={f} className="tick">
            <span className="line" />
            <span className="num">{f}</span>
          </div>
        ))}
      </div>
      <div className="rightStrip">
        <div className="scaleLabel">
          <span className="icon">🎵</span>
          <span>Scale</span>
        </div>
        <div className="bars" />
        <div className="plus">+</div>
      </div>
    </div>
  );
}
