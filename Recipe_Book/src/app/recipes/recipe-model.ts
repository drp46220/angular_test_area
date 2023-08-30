import { Ingredient } from "../shared/ingredient-model";

export class Recipe {
    public name: string;         // name of the recipe
    public description: string;  // description of the recipe
    public imagePath: string;    // URL path to image
    public ingredients: Ingredient[];

    // make a new Recipe object with the name, description, and image
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}