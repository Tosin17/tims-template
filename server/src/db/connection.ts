const sql = require('mssql')
const sqlConfig = {
    user: 'sa',
    password: 'tman19!*.',
    database: 'Timothy',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: false,
    },
}

async function connectToDB() {
    try {
        await sql.connect(sqlConfig)
        return sql
    } catch (e) {
        throw e
    }
}

export default connectToDB
