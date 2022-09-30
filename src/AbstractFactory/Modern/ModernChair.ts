import { Chair } from "../Chair";

export class ModernChair implements Chair {
    whoIam = "I am Chair implemented with modern style";
    producechair(): Chair {
        return new ModernChair();
    }

}