// import { useState, useEffect } from "react";

// export function useItems() {
//   const [items, setItems] = useState([]);

//   // Getting Quest/Wish items into local storage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("items"));
//     if (data) setItems(data); // ochrana proti zaseknutí webu, během úvodního renderování ze zdrojů (chvilková prodleva s null )
//   }, []);

//   //   useEffect(() => {
//   //     localStorage.setItem("items", JSON.stringify(items));
//   //   }, [items]);

//   return items;
// }
