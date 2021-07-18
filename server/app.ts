const express = require('express')
const server = express()
const port = 5000

import { getCustomers } from './src/db/queries'

server.get('/', (req: any, res: any) => {
    getCustomers().then(({ recordset }) => {
        res.json(recordset)
    })
})

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})
