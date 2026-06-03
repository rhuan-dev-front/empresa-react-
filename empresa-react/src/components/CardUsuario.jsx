function CardUsuario(props) {
    return (
        <div>
            <p>Nome: {props.usuario.nome}</p>
            <p>Email: {props.usuario.email}</p>
        </div>
    )
}

export default CardUsuario