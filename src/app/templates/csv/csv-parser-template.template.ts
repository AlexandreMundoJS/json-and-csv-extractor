import { Person } from "../../types";
import { FileParserTemplate } from "../file-parser-template.template";

export class CSVFileParserTemplate extends FileParserTemplate {
    public exportData(data: Person[]): void {
        const headers = this.formatHeaders(data);
        const parsedData = this.convertToCSV(data, headers, ';');
        this.createFile(parsedData, "text", "CSV");
    }

    private formatHeaders(data: Person[]): string[] {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Input JSON must be a non-empty array of objects.');
        }

        const headersSet = new Set<string>();
        data.forEach((item) => {
            Object.keys(item).forEach((key) => headersSet.add(key));
        });
        const formattedHeaders = Array.from(headersSet);

        return formattedHeaders;
    }

    private convertToCSV(
        data: Person[],
        headers: string[],
        delimiter = ';',
    ): string {
        if (headers.length === 0) {
            return '';
        }
        const csvRows: string[] = [];
        csvRows.push(headers.join(delimiter));

        data.forEach((item) => {
            const row = headers.map((header) => {
                const value = item[header as keyof Person];
                if (value === null || value === undefined) return '';
                if (typeof value === 'object')
                    return JSON.stringify(value).replace(/"/g, '');
                return String(value).replace(/"/g, '');
            });
            csvRows.push(row.join(delimiter));
        });

        return csvRows.join('\n');
    }
}
