import connectToDB from './connection'

export async function getCustomers() {
    try {
        const sql = await connectToDB()
        const result = await sql.query`select * from tblCustomer`
        return result
    } catch (e) {
        throw e
    }
}
