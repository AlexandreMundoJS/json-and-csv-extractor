import { Person } from "../../types";
import { FileParserTemplate } from "../file-parser-template.template";

export class JSONFileParserTemplate extends FileParserTemplate {
  public exportData(data: Person[]): void {
    const result = this.formatData(data);
    this.createFile(result, "application", "JSON");
  }

  private formatData(data: Person[]): string {
    const formattedData = JSON.stringify(data, null, 2);
    return formattedData;
  }
}
