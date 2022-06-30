import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  //initial form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // handle form state
  const [formData, setFormData] = useState({ ...initialFormState });

  //setFormData from form.
  const handleFormChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
      [target.cuisine]: target.value,
      [target.photo]: target.value,
      [target.ingredients]: target.value,
      [target.preparation]: target.value,
    });
  };

  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                onChange={handleFormChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                onChange={handleFormChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                onChange={handleFormChange}
                value={formData.photo}
                placeholder="Photo"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleFormChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleFormChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
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
