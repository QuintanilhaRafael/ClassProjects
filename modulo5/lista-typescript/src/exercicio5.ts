enum ROLES {
    ADMIN = "admin",
	USER = "user",
}

type usuario  = {
    nome: string,
    email: string,
    role: ROLES
}

const usuarios : usuario[] = [
    {nome: "Rogério", email: "roger@email.com", role: ROLES.USER},
	{nome: "Ademir", email: "ademir@email.com", role: ROLES.ADMIN},
	{nome: "Aline", email: "aline@email.com", role: ROLES.USER},
	{nome: "Jéssica", email: "jessica@email.com", role: ROLES.USER},  
	{nome: "Adilson", email: "adilson@email.com", role: ROLES.USER},  
	{nome: "Carina", email: "carina@email.com", role: ROLES.ADMIN}  
]

function filtraUsuarios (usuarios: Array < {
    nome: string,
    email: string,
    role: ROLES } > ) : string[]{
    const usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.role === ROLES.ADMIN
    }).map((usuario) => {
        return usuario.email
    })
    return usuariosFiltrados
}

console.log(filtraUsuarios(usuarios))