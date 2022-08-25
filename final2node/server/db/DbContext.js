import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RecipeSchema } from '../models/Recipe'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Recipes = mongoose.model('Recipe', RecipeSchema);

}

export const dbContext = new DbContext()
