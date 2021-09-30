import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { RecipeServiceService } from '../../recipe-service.service';

import { Recipe } from '../../Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  @Output() recipeSelectedbyUser=new EventEmitter<void>();
  constructor( private recipeservice:RecipeServiceService) { }
  onRecipeSingleItemClick()
  {
    // this.recipeSelectedbyUser.emit();
    this.recipeservice.recipeSelected.emit(this.recipe);
  }
  ngOnInit(): void {
  }


}
