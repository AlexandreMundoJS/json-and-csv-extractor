import { MenuContainer } from "../components/menu-container";

export interface MenuViewProps {
  selectFormat(format: string): void;
}

export function MenuView({selectFormat}: MenuViewProps) {
  return (
    <div className="menu-container">
      <MenuContainer selectFormat={selectFormat}/>
    </div>
  );
}
