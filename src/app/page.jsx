"use client";
import CardUsuario from "@/components/cardUsers/page.jsx";
import { useState, useEffect } from "react";

export default function Usuarios() {
  const [listaUsers, setListaUsers] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=67")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListaUsers(data.users);
        setMsgErro("");
      })
      .catch((erro) => setMsgErro(erro.message));
  }, []);

  return (
    <main>
      <h1>API-DUMMY</h1>
      {msgErro != "" && <p>Erro: {msgErro}</p>}

      {listaUsers.length > 0 ? (
        <div className="users-grid">
          {listaUsers.map((user) => {
            return (
              <CardUsuario
                key={user.id}
                image={user.image}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                phone={user.phone}
                email={user.email}
              />
            );
          })}
        </div>
      ) : (
        <div>Sem usuarios no momento!! tente mais tarde...</div>
      )}
    </main>
  );
}
