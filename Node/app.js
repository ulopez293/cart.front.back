
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors({
    origin: '*'
}))

app.get('/products', (req, res) => {
    res.json([
        {
            code: 'PEN',
            name: 'Kalyptio Pen',
            price: 5,
            amount: 0,
            src: 'https://img.freepik.com/vector-gratis/lapiz_24908-54630.jpg?w=2000'
        },
        {
            code: 'TSHIRT',
            name: 'Kalyptio T-Shirt',
            price: 20,
            amount: 0,
            src: 'https://www.cyamoda.com/on/demandware.static/-/Sites-siteCatalog_cya_mx/default/dw564891fe/images/NINOS/3031984_A.jpg'
        },
        {
            code: 'MUG',
            name: 'Kalyptio Coffee Mug',
            price: 7.50,
            amount: 0,
            src: 'data:image/jpeg;base64,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'
        },
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})