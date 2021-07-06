import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { PopUpUsers } from "./components/PopUps/PopUpUsers";
import { PopUpProducts } from "./components/PopUps/PopUpProducts";
import "./index.css";

import { IUserProps, IProductProps } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUserProps[]>([
    { id: 1, name: "Никита", checked: true },
    { id: 2, name: "Олег", checked: false },
    { id: 3, name: "Алина", checked: true },
  ]);

  const [products, setProducts] = useState<IProductProps[]>([
    {
      id: 1,
      name: "Хлеб",
      price: 54,
    },
    {
      id: 2,
      name: "Молоко",
      price: 69,
    },
    {
      id: 3,
      name: "Яйца",
      price: 70,
    },
  ]);

  // открывает/ закрывает PopUp
  const [popUpViewUsers, setPopUpViewUsers] = useState<boolean>(false);
  const [popUpViewProducts, setPopUpViewProducts] = useState<boolean>(false);

  // добавление/удаление нового участника
  const handleAddUser = (userObj: IUserProps) => {
    setUsers([...users, userObj]);
  };

  const handleRemoveUser = (id: number) => {
    setUsers(users.filter((el) => el.id !== id));
  };
  // добавление/удаление продуктов
  const handleAddProduct = (productObj: IProductProps) => {
    console.log("handleAddProduct");

    setProducts([...products, productObj]);
  };
  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter((el) => el.id !== id));
  };

  return (
    <>
      <NavBar
        popUpViewUsers={popUpViewUsers}
        setPopUpViewUsers={setPopUpViewUsers}
        popUpViewProducts={popUpViewProducts}
        setPopUpViewProducts={setPopUpViewProducts}
      />
      {popUpViewUsers ? (
        <PopUpUsers
          users={users}
          handleAddUser={handleAddUser}
          handleRemoveUser={handleRemoveUser}
          setPopUpView={setPopUpViewUsers}
        />
      ) : null}
      {popUpViewProducts ? (
        <PopUpProducts
          products={products}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          setPopUpViewProducts={setPopUpViewProducts}
        />
      ) : null}

      <div>
        <h2>calculation block</h2>
      </div>
    </>
  );
};

export default App;
