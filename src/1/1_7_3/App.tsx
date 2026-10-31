import { recipes } from './data';

type RecipeProps = { id: string; name: string; ingredients: string[] };

export function Recipe({ name, ingredients }: RecipeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
    </div>
  );
}
// React key принадлежит месту, где создаётся список, а не самому Recipe.
