import express from 'express'
import cors from 'cors'
const server = express()
const port = 5000

import {
    getCustomers,
    getCustomersHistory,
    getActiveCustomersStatus,
    getActiveCustomersTypes,
    getCustomersStatus,
    getCustomersTypes,
    addCustomer,
} from './src/db/queries'

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
