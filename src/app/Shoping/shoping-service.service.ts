import { EventEmitter, Injectable } from '@angular/core';
import { Ingiredent } from '../Shared/Ingiredentmodel';

@Injectable({
  providedIn: 'root'
})
export class ShopingServiceService {
 
  ingredentChanged=new EventEmitter<Ingiredent[]>();
  ingiredents:Ingiredent[] =[
    new Ingiredent("Potato",100)

  ];
  constructor() { }
  getShopingIngiredent()
  {
   return this.ingiredents.slice();
  }
  addIngident(ingiredent:Ingiredent)
  {
    this.ingiredents.push(ingiredent);
    this.ingredentChanged.emit(this.ingiredents.slice());
  }
reciveIngredentFromRecipe(ingredidentarray:Ingiredent[])
{
this.ingiredents.push(...ingredidentarray);
this.ingredentChanged.emit(this.ingiredents.slice());
}
}
