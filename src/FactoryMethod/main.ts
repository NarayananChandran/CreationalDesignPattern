import { Cinthol } from "./Cinthol";
import { ConcreteCreator1 } from "./ConcreteCreator1";
import { ConcreteCreator2 } from "./ConcreteCreator2";
import { Medmix } from "./Medmix";

const medmix = new ConcreteCreator1();
console.log(medmix.someOperations());

const cinthol = new ConcreteCreator2();
console.log(cinthol.someOperations());