import { Person } from "../../types";
import { ParserStrategyInterface } from "./parser-strategy.interface";

export interface DataContextStrategyInterface {
    setStrategy(strategy: ParserStrategyInterface): void;
    executeStrategy(data: Person[]): void;
    getCurrentStrategy(): ParserStrategyInterface;
}