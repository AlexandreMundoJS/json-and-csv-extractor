import { useCallback } from "react";
import { MenuView } from "../view/index.view";
import { DataContextStrategy } from "../strategies/data-context-strategy.strategy";
import { CSVContextStrategy } from "../strategies/csv/csv-context-strategy.strategy";
import { mockList } from "../../mocks/mock-list";
import { JSONContextStrategy } from "../strategies/json/json-context-strategy.strategy";

const dataStrategy = new DataContextStrategy();

export function MenuController() {
  const selectFormat = useCallback((format: string) => {
    switch (format) {
      case "CSV":
        dataStrategy.setStrategy(new CSVContextStrategy());
        dataStrategy.executeStrategy(mockList);
        break;
      case "JSON":
        dataStrategy.setStrategy(new JSONContextStrategy());
        dataStrategy.executeStrategy(mockList);
        break;
    }
  }, []);

  return <MenuView selectFormat={selectFormat} />;
}
