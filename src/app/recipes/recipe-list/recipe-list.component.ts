import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://images.squarespace-cdn.com/content/v1/5cfb2d62ad3fa300014b98bb/1644103534272-HG13OU56CT98RJQLYQ62/Bacon+Wrapped+Brisket.jpg')
  ];

  constructor() {}
}
