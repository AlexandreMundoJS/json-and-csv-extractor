import { Person } from "../../types";
import { ParserStrategyInterface } from "../interfaces/parser-strategy.interface";

export class JSONContextStrategy implements ParserStrategyInterface {
  execute(data: Person[]): void {
    // Implement CSV parsing logic here
    console.log("Parsing JSON data:", data);
  }
}
