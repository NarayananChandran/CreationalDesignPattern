import { Soap } from "./Soap";
export class Medmix implements Soap {
    operation(): string {
        return 'I smells like natural.';
    }

}