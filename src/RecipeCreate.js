import React, { useState } from "react";
import "./App.css";

function RecipeCreate() {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create">
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
          <tr>
            <td>
              <input name="name" placeholder="Name" />
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" />
            </td>
            <td>
              <input name="photo" placeholder="Photo" />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
