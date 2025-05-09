export interface MenuContainerProps {
  selectFormat(format: string): void;
}

export function MenuContainer({ selectFormat }: MenuContainerProps) {
  return (
    <div>
      <h1 className="title">JSON and CSV Parser</h1>
      <div className="menu">
        <button onClick={() => selectFormat("CSV")}>CSV</button>
        <button onClick={() => selectFormat("JSON")}>JSON</button>
      </div>
    </div>
  );
}
