import { Person } from "../types";
import { DataContextStrategyInterface } from "./interfaces/data-context-strategy.interface";
import { ParserStrategyInterface } from "./interfaces/parser-strategy.interface";

export class DataContextStrategy implements DataContextStrategyInterface {
  private strategy!: ParserStrategyInterface;

  public setStrategy(strategy: ParserStrategyInterface): void {
    this.strategy = strategy;
  }

  public executeStrategy(data: Person[]): void {
    this.strategy.execute(data);
  }

  public getCurrentStrategy(): ParserStrategyInterface {
    if (!this.strategy) {
      throw new Error("Strategy not set");
    }

    return this.strategy;
  }
}
