const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')

router.get('/postagens', (req, res) => {

    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=qrs14797;PWD=t9lq0c8kt0v-bzx8;PORT=50000;PROTOCOL=TCPIP", (err, conn)=> {
        if(err){
            return console.log(err)
        }

        conn.query('select 1 from sysibm.sysdummy1', (err, data) => {
            if(err){
                console.log({erro: err})
            }else{
                console.log({dados: data})
            }
        })

        conn.close()

    })
 
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, uma princesa',
        autor: 'Paolinha gameplays'
    })

})

module.exports = router
