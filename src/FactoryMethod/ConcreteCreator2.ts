import { Cinthol } from "./Cinthol";
import { Creator } from "./Creator";
import { Soap } from "./Soap";

export class ConcreteCreator2 extends Creator {
    public factoryMethod():  Soap{
        return new Cinthol();
    }
    

}

/*
https://stackoverflow.com/questions/38311672/generic-and-typeof-t-in-the-parameters/38311757#38311757
*/