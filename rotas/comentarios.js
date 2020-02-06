const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'tu que lute',
        autor: 'Allllannnnn'
    })

})

module.exports = router