import  {Soap}  from "./Soap";

export abstract class Creator<T extends Soap> {
    public abstract factoryMethod<T extends Soap>(c : {new(): T }): T ;

    public someOperations( a: { new(): T extends Soap ? any : any } ): string {
        const soap = this.factoryMethod<T extends Soap? any: any>(a);
        return soap.operation();
    }
}