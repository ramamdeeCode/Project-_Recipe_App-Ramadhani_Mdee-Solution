import React from "react";
import "./App.css";

function RecipeRead({ deleteRecipe, recipes }) {
  return recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  );
}

// const tableRows = recipes.map(
//   ({ name, cuisine, photo, ingredients, preparation }, index) => {
//     return (
//       <tr key={index}>
//         <td>{name}</td>
//         <td>{cuisine}</td>
//         <td>
//           <img src={photo} />
//         </td>
//         <td>{ingredients}</td>
//         <td>{preparation}</td>
//         <td>
//           <button name="delete" onClick={() => deleteRecipe(index)}>
//             Delete
//           </button>
//         </td>
//       </tr>
//     );
//   }
// );
export default RecipeRead;
