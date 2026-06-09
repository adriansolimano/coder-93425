const UserDetail = ({ name, email, role, phone, address }) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Rol: {role}</p>
            <p>Telefono: {phone}</p>
            <p>Dirección: {address}</p>
        </div>  
    )
}