import { Table } from "../Table";

export class ClassicTable implements Table{
    whoIam = "I am table implemented with classic style";
    produceTable(): Table {
        return new ClassicTable();
    }

}