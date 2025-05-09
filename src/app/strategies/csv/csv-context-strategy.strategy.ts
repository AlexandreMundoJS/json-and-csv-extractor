import { CSVFileParserTemplate } from "../../templates/csv/csv-parser-template.template";
import { Person } from "../../types";
import { ParserStrategyInterface } from "../interfaces/parser-strategy.interface";

export class CSVContextStrategy implements ParserStrategyInterface {
  execute(data: Person[]): void {
    const csvTemplate = new CSVFileParserTemplate();
    csvTemplate.exportData(data);
  }
}
