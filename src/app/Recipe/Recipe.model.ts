import { Ingiredent } from "../Shared/Ingiredentmodel";

export class Recipe{
    public name: string;
    public description: string;
    public ImagePath: string;
    public ingrident!:Ingiredent[];

    /**
     *
     */
    constructor(name:string,description:string,Imagepath:string,ingredient:Ingiredent[]) {
        this.name=name;
        this.description=description;
        this.ImagePath=Imagepath;
        this.ingrident=ingredient;

    }
}