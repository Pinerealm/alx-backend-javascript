import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): RowID;
declare function updateRow(rowId: RowID, row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
