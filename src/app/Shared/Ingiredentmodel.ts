import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Ingiredent{
    public name:string;
    public amount:number;

    /**
     *
     */
    constructor(name:string,amount:number) {
        this.name=name;
        this.amount=amount;
        
    }
}