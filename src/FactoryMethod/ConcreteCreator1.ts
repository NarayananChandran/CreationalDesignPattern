import { Creator } from "./Creator";
import { Medmix } from "./Medmix";
import { Soap } from "./Soap";

export class ConcreteCreator1 extends Creator {
    public factoryMethod():  Soap{
        return new Medmix();
    }
    

}

/*
https://stackoverflow.com/questions/38311672/generic-and-typeof-t-in-the-parameters/38311757#38311757
*/