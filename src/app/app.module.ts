import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { ShopingComponent } from './Shoping/shoping/shoping.component';
import { RecipeComponent } from './Recipe/recipe/recipe.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';

import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recipe/recipe-list/recipe-item/recipe-item.component';
import { ShopingEditComponent } from './Shoping/shoping-edit/shoping-edit.component';
import { DropdownDerectiveDirective } from './Shared/dropdown-derective.directive';
import { ShopingServiceService } from './Shoping/shoping-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingComponent,
    RecipeComponent,
    RecipeListComponent,

    RecipeDetailComponent,
     RecipeItemComponent,
     ShopingEditComponent,
     DropdownDerectiveDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShopingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
