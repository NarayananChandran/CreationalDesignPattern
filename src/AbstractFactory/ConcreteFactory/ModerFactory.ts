import { Chair } from "../Chair";
import { Factory } from "../Factory";
import { ModernChair } from "../Modern/ModernChair";
import { ModernTable } from "../Modern/ModerTable";
import { Table } from "../Table";

export class ModerFactory implements Factory{
    createChair(): Chair {
        return new ModernChair();
    }
    createTable(): Table {
        return new ModernTable();
    }

}