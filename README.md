- API REST Libraries 🙌.
- Stack de tecnologias: NodeJS-Express - Sequelize - SQLite.

- Comence instalando las siguientes dependencias:

- bcrypt: Para el cifrado de datos.
- jsonwebtoken y passport: Para la autenticacion.
- sequelize: Para manipular mi bd.
- babel: Para convertir codigo moderno a codigo que pueda ser entendido por cada navegador.
- uuid: para generar identificadores únicos.

Quiero aclarar que yo ya tengo algunos conocimiento de backend, por eso estructure el proyecto a mi manera, tambien porque estaba jugado con el tiempo, estoy trabajando como freelancer, por lo tanto, me quita tiempo.

# API REST Documentation

* base url
- GET -> http:localhost/8000/

* libraries
- POST -> /api/v1/library/create (debe iniciar sesion y full_name == "admin")
{
    name: STRING, *
    location: STRING, *
    phone: STRING *
}
- POST -> /api/v1/library/:id/addBook (debe iniciar sesion y full_name == "admin")
{
    isbn: INTEGER, *
    title: STRING, *
    author: STRING, *
    year: STRING, *
    libraryId: ID libreria.
}
- GET -> /api/v1/library
- GET -> /api/v1/library/:id
- PUT -> /api/v1/library/:id (debe iniciar sesion y full_name == "admin")
- DELETE /api/v1/library/:id (debe iniciar sesion y full_name == "admin")

* books
- POST /api/v1/books/create (debe iniciar sesion y full_name == "admin")
{
    isbn: INTEGER, *
    title: STRING, *
    author: STRING, *
    year: STRING, *
    libraryId: ID libreria.
}
- GET /api/v1/books 
- GET /api/v1/books/:id
- PUT /api/v1/books/:id (debe iniciar sesion y full_name == "admin")
- DELETE /api/v1/books/:id (debe iniciar sesion y full_name == "admin")

* auth
- POST /api/v1/auth/crear-usuario
{
    full_name: INTEGER, *
    email: STRING, *
    password: STRING, *
}
- POST /api/v1/auth/login

* users
- GET /api/v1/users/:id (necesita iniciar sesion)