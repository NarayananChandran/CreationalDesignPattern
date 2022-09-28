import { Cinthol } from "./Cinthol";
import { ConcreteCreator } from "./ConcreteCreator";
import { Medmix } from "./Medmix";

const a = new ConcreteCreator<Medmix>();
console.log(a.someOperations(Medmix));

const b = new ConcreteCreator<Cinthol>();
console.log(b.someOperations(Cinthol));