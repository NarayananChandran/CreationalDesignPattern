import  {Soap}  from "./Soap";

export abstract class Creator{
    public abstract factoryMethod(): Soap ;

    public someOperations(): string {
        const soap = this.factoryMethod();
        return soap.operation();
    }
}