import { Chair } from "../Chair";

export class ClassicChair implements Chair {
    whoIam = "I am Chair implemented with classic style";
    producechair(): Chair {
        return new ClassicChair();
    }

}