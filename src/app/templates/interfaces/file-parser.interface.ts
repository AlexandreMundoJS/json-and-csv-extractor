import { Person } from "../../types";

export interface FileParserInterface {
    createFile(data: string, type: string, format: string): void;
}