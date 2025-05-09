import { Person } from "../../types";
import { ParserStrategyInterface } from "../interfaces/parser-strategy.interface";

export class CSVContextStrategy implements ParserStrategyInterface {
  execute(data: Person[]): void {
    // Implement CSV parsing logic here
    console.log("Parsing CSV data:", data);
  }
}
