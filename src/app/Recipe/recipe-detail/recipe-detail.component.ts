import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!:Recipe;
  constructor(private recipeservice:RecipeServiceService) { }

  ngOnInit(): void {
  }
  onAddShoppingClick()
  {
      this.recipeservice.addIngredidentToShoppingList(this.recipe.ingrident);
  }
  onEditShoppingClick()
  {

  }
  onDeleteShoppingClick()
  {

  }
}
