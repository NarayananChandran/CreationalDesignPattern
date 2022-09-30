import { Chair } from "./Chair";
import { Table } from "./Table";

export interface Factory {
    createChair() : Chair;
    createTable(): Table;
}