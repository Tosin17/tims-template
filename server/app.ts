import express from 'express'
import cors from 'cors'

import {
    getCustomers,
    getCustomersHistory,
    getActiveCustomersStatus,
    getActiveCustomersTypes,
    getCustomersStatus,
    getCustomersTypes,
    addCustomer,
    editCustomer,
    deleteCustomer,
} from './src/db/queries'
const server = express()
const port = 5000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

server.get('/', async (req: express.Request, res: express.Response) => {
    const { recordset } = await getCustomers()
    res.json(recordset)
})

server.get(
    '/customer-history',
    async (req: express.Request, res: express.Response) => {
        const { recordset } = await getCustomersHistory()
        res.json(recordset)
    }
)

server.get(
    '/customer-status',
    async (req: express.Request, res: express.Response) => {
        const status = req.query.active
        const { recordset } = status
            ? await getActiveCustomersStatus()
            : await getCustomersStatus()
        res.json(recordset)
    }
)

server.get(
    '/customer-types',
    async (req: express.Request, res: express.Response) => {
        const status = req.query.active
        const { recordset } = status
            ? await getActiveCustomersTypes()
            : await getCustomersTypes()
        res.json(recordset)
    }
)

server.put(
    '/edit-customer',
    async (req: express.Request, res: express.Response) => {
        const { rowsAffected } = await editCustomer(req.body)
        rowsAffected && rowsAffected?.length
            ? res.sendStatus(200)
            : res.sendStatus(500)
    }
)

server.delete(
    '/delete-customer',
    async (req: express.Request, res: express.Response) => {
        const { rowsAffected } = await deleteCustomer(req.body)
        rowsAffected && rowsAffected?.length
            ? res.sendStatus(200)
            : res.sendStatus(500)
    }
)

server.post(
    '/add-customer',
    async (req: express.Request, res: express.Response) => {
        const { rowsAffected } = await addCustomer(req.body)
        rowsAffected && rowsAffected?.length
            ? res.sendStatus(200)
            : res.sendStatus(500)
    }
)

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})
