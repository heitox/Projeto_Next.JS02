import "@/components/cardUsers/cardUsers.css"

export default function CardUsuario({image, firstName, lastName, age, phone, email}) {
    return(
        <div className="card">
            <img src={image} alt="" />
              <h3>
                {firstName} {lastName}
              </h3>
              <h3>Idade: {age}</h3>
              <h3 className="phone">Telefone: {phone}</h3>
              <p className="email">
                E-mail: <b>{email}</b>
              </p>
        </div>
    )
}