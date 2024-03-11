import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShopppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel', 
          'A super-tasty Schnitzel - just awesome!', 
          'https://images.squarespace-cdn.com/content/v1/5cfb2d62ad3fa300014b98bb/1644103534272-HG13OU56CT98RJQLYQ62/Bacon+Wrapped+Brisket.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('Frenc Fries', 20)
          ])
      ];

      constructor(private slService: ShopppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoopingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}