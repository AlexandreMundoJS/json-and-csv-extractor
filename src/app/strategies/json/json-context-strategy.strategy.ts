import { JSONFileParserTemplate } from "../../templates/json/json-parser-template.template";
import { Person } from "../../types";
import { ParserStrategyInterface } from "../interfaces/parser-strategy.interface";

export class JSONContextStrategy implements ParserStrategyInterface {
  execute(data: Person[]): void {
    const jsonTemplate = new JSONFileParserTemplate();
    jsonTemplate.exportData(data);
  }
}
