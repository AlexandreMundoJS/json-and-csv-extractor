import { FileParserInterface } from "./interfaces/file-parser.interface";

export class FileParserTemplate implements FileParserInterface {
  public createFile(data: string, type: string, format: string): void {
    const blob = new Blob([data], {
      type: `${type}/${format.toLowerCase()}`,
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = this.createFileName(format);
    a.click();
    URL.revokeObjectURL(url);
  }

  protected createFileName(format: string): string {
    return `data-${new Date().getTime()}.${format.toLowerCase()}`;
  }
}
