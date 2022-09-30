import { Chair } from "../Chair";
import { ClassicChair } from "../Classic/ClassicChair";
import { ClassicTable } from "../Classic/ClassicTable";
import { Factory } from "../Factory";
import { Table } from "../Table";

export class ClassicFactory implements Factory{
    createChair(): Chair {
        return new ClassicChair();
    }
    createTable(): Table {
        return new ClassicTable();
    }

}