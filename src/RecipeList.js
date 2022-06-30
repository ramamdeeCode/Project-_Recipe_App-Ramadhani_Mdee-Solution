import React from "react";
import RecipeRead from "./RecipeRead";
import "./App.css";

function RecipeList({ deleteRecipe, recipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingridients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeRead deleteRecipe={deleteRecipe} recipes={recipes} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
