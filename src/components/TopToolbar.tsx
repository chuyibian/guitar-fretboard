import "./TopToolbar.css";

function Icon(props: { name: string }) {
  const { name } = props;
  switch (name) {
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "layout":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <rect x="3" y="5" width="8" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="13" y="5" width="8" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="13" y="13" width="8" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "sliders":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="6" r="2" fill="currentColor" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="12" r="2" fill="currentColor" />
          <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
          <circle cx="7" cy="18" r="2" fill="currentColor" />
        </svg>
      );
    case "back":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <polygon points="15,6 7,12 15,18" fill="currentColor" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <polygon points="7,5 19,12 7,19" fill="currentColor" />
        </svg>
      );
    case "record":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="8" fill="#e53935" />
        </svg>
      );
    case "metro":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M12 4l6 16H6L12 4z" fill="none" stroke="#4fc3f7" strokeWidth="2" />
          <line x1="12" y1="8" x2="12" y2="14" stroke="#4fc3f7" strokeWidth="2" />
        </svg>
      );
    case "undo":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M8 8H4l4-4v4zm12 12a8 8 0 00-8-8H8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 8a4 4 0 110 8 4 4 0 010-8zm0-6l2 3 3 .5-1.5 2.5 1.5 2.5-3 .5-2 3-2-3-3-.5 1.5-2.5L7 5.5l3-.5 2-3z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TopToolbar() {
  return (
    <div className="topToolbar">
      <div className="toolbarLeft">
        <button className="iconBtn"><Icon name="arrow" /></button>
        <button className="iconBtn"><Icon name="layout" /></button>
        <button className="iconBtn"><Icon name="sliders" /></button>
      </div>
      <div className="toolbarCenter">
        <button className="transportBtn"><Icon name="back" /></button>
        <button className="transportBtn play"><Icon name="play" /></button>
        <button className="transportBtn"><Icon name="record" /></button>
        <button className="transportBtn"><Icon name="metro" /></button>
      </div>
      <div className="toolbarRight">
        <button className="iconBtn"><Icon name="undo" /></button>
        <button className="iconBtn"><Icon name="settings" /></button>
      </div>
    </div>
  );
}
