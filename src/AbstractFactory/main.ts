import { ClassicFactory } from "./ConcreteFactory/ClassicFactory";
import { ModerFactory } from "./ConcreteFactory/ModerFactory";
import { Factory } from "./Factory";

function executeCode(factory : Factory){
    const chair = factory.createChair();
    console.log(chair.whoIam);
    const table = factory.createTable();
    console.log(table.whoIam);
}

executeCode(new ClassicFactory());

executeCode(new ModerFactory());