const Users = () => {

    // Quiero que vaya al backend a buscar los usuarios

    // Quiero que muestre en pantalla el listado de los usuarios que devolvió backend

    // Quiero que haya un filtro por role

    // Quiero que haya un buscador

    return (
        <div>
            <h2>Usuarios</h2>
            <p>Esta es la sección de usuarios.</p>

            <Filter />
            <search />
            <UserList />
            <Pagination />
        </div>
    )

}