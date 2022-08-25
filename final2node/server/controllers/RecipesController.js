import { Auth0Provider } from "@bcwdev/auth0provider";
import { recipesService } from "../services/RecipesService.js";
import BaseController from "../utils/BaseController.js";


export class RecipesController extends BaseController{
    constructor(){
        super("api/recipes");
        this.router
            .get("", this.getAllRecipes)
            .get("/:id", this.getRecipeById)
            .post("", this.createRecipe)

    }
    async getAllRecipes(req, res, next){
        try{
            const recipes = await recipesService.getAllRecipes(req.query);
            res.send(recipes);
        }catch(error){
            next(error);
        }
    }
    async getRecipeById(req, res, next){
        try{
            const recipe = await recipesService.getRecipeById(req.params.id);
            res.send(recipe);
        }catch(error){
            next(error);
        }
    }
    async createRecipe(req, res, next){
        try{
            req.body.creatorId = req.userInfo.id;
            const recipe = await recipesService.createRecipe(req.body);
            res.send(recipe);
        }catch(error){
            next(error);
        }
    }
}