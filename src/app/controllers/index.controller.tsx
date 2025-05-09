import { useCallback } from "react";
import { MenuView } from "../view/index.view";



export function MenuController() {
  const mockList = {
  }  
  const selectFormat = useCallback((format: string) => {
  }, [mockList]);
  return <MenuView selectFormat={() => {}} />;
}
