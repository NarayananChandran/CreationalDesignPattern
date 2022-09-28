import { Creator } from "./Creator";
import { Soap } from "./Soap";

export class ConcreteCreator<T extends Soap> extends Creator<Soap> {
    public factoryMethod<T extends Soap>(c : { new() : T }): T {
        return new c();
    }
    

}

/*
https://stackoverflow.com/questions/38311672/generic-and-typeof-t-in-the-parameters/38311757#38311757
*/