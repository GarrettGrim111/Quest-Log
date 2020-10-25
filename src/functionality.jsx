// import React, { useState, useEffect, useRef } from "react";

// import MainQuestPage from "./pages/mainQuestPage-component";
// import SideQuestPage from "./pages/sideQuestPage-component";
// import WishListPage from "./pages/wishListPage-component";
// import QuestWishList from "./components/questOrWish-list.component";
// import TextField from "./components/input.component";

// const Functionality = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const LOCAL_STORAGE_KEY = "questAPP.items";

//   // Getting Quest/Wish items into local storage
//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storedItems) setItems(storedItems);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
//   }, [items]);

//   // Adding items

//   const handleAddItem = () => {
//     if (inputValue) {
//       setItems((prevItems) => {
//         return [
//           ...prevItems,
//           { id: Date.now(), name: inputValue, complete: false },
//         ];
//       });
//       setInputValue("");
//     }
//   };

//   // changing complete to incomplete - dynamically scratch complete ones with css
//   const toggleComplete = (e) => {
//     const newItems = [...items];
//     const item = newItems.find((item) => item.id === item);
//     item.complete = !item.complete;
//     setItems(newItems);
//   };

//   // not working - print only not completed ones
//   const handleDeleteAll = () => {
//     const newItems = items.filter((item) => !item.complete);
//     setItems(newItems);
//   };

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <MainQuestPage
//         handleDeleteAll={handleDeleteAll}
//         handleAddItem={handleAddItem}
//       />
//       <SideQuestPage
//         handleDeleteAll={handleDeleteAll}
//         handleAddItem={handleAddItem}
//       />
//       <WishListPage
//         handleDeleteAll={handleDeleteAll}
//         handleAddItem={handleAddItem}
//       />

//       <TextField inputValue={inputValue} setInputValue={handleChange} />

//       <QuestWishList items={items} toggleComplete={toggleComplete} />
//     </div>
//   );
// };

// export default Functionality;
