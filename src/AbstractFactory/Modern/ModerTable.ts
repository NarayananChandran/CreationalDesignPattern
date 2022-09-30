import { Table } from "../Table";

export class ModernTable implements Table{
    whoIam = "I am table implemented with modern style";
    produceTable(): Table {
        return new ModernTable();
    }

}