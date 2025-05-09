export interface MenuContainerProps {
    selectFormat(format: string): void;
}

export function MenuContainer({selectFormat}: MenuContainerProps) {
  return (
    <div>
      <h1 className="title">JSON and CSV Parser</h1>
      <div className="menu">
        <button onClick={() => alert("CSV Selected")}>CSV</button>
        <button onClick={() => alert("JSON Selected")}>JSON</button>
      </div>
    </div>
  );
}
