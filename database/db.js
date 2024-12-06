import mysql from 'mysql2';

// Cria a conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST,       // Acessa a variável de ambiente DB_HOST
    user: process.env.DB_USER,       // Acessa a variável de ambiente DB_USER
    password: process.env.DB_PASSWORD, // Acessa a variável de ambiente DB_PASSWORD
    database: process.env.DB_NAME,    // Acessa a variável de ambiente DB_NAME
    port: process.env.DB_PORT || 3306 // Acessa a variável de ambiente DB_PORT (padrão 3306)
});

// Verifica se a conexão foi bem-sucedida
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados: ', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

export default connection;


