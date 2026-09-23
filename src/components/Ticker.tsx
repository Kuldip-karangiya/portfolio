import { ticker } from "@/content/portfolio";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">{items.map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}</div>
    </div>
  );
}
