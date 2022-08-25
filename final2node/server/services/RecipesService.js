import {dbContext} from '../db/dbContext';
import { BadRequest } from '@bcwdev/auth0provider/lib/Errors.js';


class RecipesService{
    async getAllRecipes(query= {}){
        const recipes = await dbContext.Recipes.find(query).populate(
            "creator",
            "name picture"
        );
        return recipes;
    }
    async getRecipeById(id){
        const recipe = await dbContext.Recipes.findById(id).populate(
            "creator",
            "name picture"
        );
        return recipe;
    }
    async createRecipe(recipe){
        const newRecipe = await dbContext.Recipes.create(recipe);
        await newRecipe.populate("creator", "name picture")
        return newRecipe;
    }
}

export const recipesService = new RecipesService();