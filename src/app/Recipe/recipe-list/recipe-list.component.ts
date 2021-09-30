import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

//  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes!: Recipe[];
  constructor(private recipeservice:RecipeServiceService) { }
  // OnRecipeSelected(recipe:Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);
  // }
  ngOnInit() {
        this.recipes=this.recipeservice.getRecipe();
  }

}
