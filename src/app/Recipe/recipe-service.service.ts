import { Injectable,EventEmitter } from '@angular/core';
import { Ingiredent } from '../Shared/Ingiredentmodel';
import { ShopingServiceService } from '../Shoping/shoping-service.service';

import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipeSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Snacks-1",
    "Potato Puff",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg",
    [
      new Ingiredent('more puffy',2),
      new Ingiredent('patatoes pudding',10)
    ]),
    new Recipe("Snacks-2","Waffers",
    "https://image.shutterstock.com/image-photo/salty-snacks-pretzels-chips-crackers-260nw-637166818.jpg", [
      new Ingiredent('cream',10),
      new Ingiredent('gralic',20)
    ]),
    new Recipe("Snacks-3","PopCorn",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBL97SycJRS_T6lmSkYjr5AosZ7I7qm87qA&usqp=CAU", [
      new Ingiredent('spicey',10),
      new Ingiredent('cheese',20)
    ])
  ];
  constructor( private shopingService:ShopingServiceService) { }
  getRecipe()
  {
   return this.recipes.slice();
  }
  addIngredidentToShoppingList(sendingredidentarray:Ingiredent[])
  {
     this.shopingService.reciveIngredentFromRecipe(sendingredidentarray);
  }
}
