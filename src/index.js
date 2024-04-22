const express = require('express');
const morgan = require('morgan');
const app = express();
const barangController = require('./barang/barang.controller');

app.use(express.json());

const hostname = '127.0.0.1'
const port = 3000

app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/barang', barangController)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


//UBAH KE LAYERED ARCHITECTURE, taruh dlu smua dpe endpoints - vin
//Tambah endpoint-endpoints
//tambah endpoint buat get all barang

//tambah endpoint buat get barang by id

//tambah endpoint buat get 

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'resource tidak ditemukan'
  })
})

const errorHandling = (err, req, res, next) => {
  res.status(500).json({
      status : "error",
      message : "terjadi kesalahan pada server"
  })
}
app.use(errorHandling)
