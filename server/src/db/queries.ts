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

export async function getCustomersHistory() {
    try {
        const sql = await connectToDB()
        const result = await sql.query`select * from tblCustomerHistory`
        return result
    } catch (e) {
        throw e
    }
}

export async function getActiveCustomersStatus() {
    try {
        const sql = await connectToDB()
        const result =
            await sql.query`SELECT CustomerStatusID, Name as CustomerStatus
        FROM Timothy.dbo.tblCustomerStatus
        WHERE Active <> 0`
        return result
    } catch (e) {
        throw e
    }
}

export async function getCustomersStatus() {
    try {
        const sql = await connectToDB()
        const result =
            await sql.query`SELECT * FROM Timothy.dbo.tblCustomerStatus`
        return result
    } catch (e) {
        throw e
    }
}

export async function getActiveCustomersTypes() {
    try {
        const sql = await connectToDB()
        const result =
            await sql.query`SELECT CustomerTypeID, Name as CustomerType
            FROM Timothy.dbo.tblCustomerType
            WHERE Active <> 0
            `
        return result
    } catch (e) {
        throw e
    }
}

export async function getCustomersTypes() {
    try {
        const sql = await connectToDB()
        const result =
            await sql.query`SELECT * FROM Timothy.dbo.tblCustomerType`
        return result
    } catch (e) {
        throw e
    }
}

export async function addCustomer(details: any) {
    try {
        const sql = await connectToDB()
        const result = await sql.query`INSERT INTO [Timothy].[dbo].[tblCustomer]
            (Name, Active, Date, CustomerStatusID, CustomerTypeID, Note, Archived, UserID, DateAdded, DateUpdated)
            VALUES (${details.name}, ${details.active}, getdate(), ${
            details.status
        }, ${details.type}, ${details.note}, ${Number(
            details.archived
        )}, ${Date.now().toString()}, getdate(), getdate())`
        return result
    } catch (e) {
        throw e
    }
}
