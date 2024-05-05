const express = require('express');
const morgan = require('morgan');
const app = express();
const barangController = require('./barang/barang.controller')
const jenisController = require('./jenis_barang/jenis_barang.controller');
const karyawanController = require('./karyawan/karyawan.controller')
const memberController = require('./member/member.controller')
const merkController = require('./merk/merk.controller')
const pembelianController = require('./pembelian/pembelian.controller')
const supplierController = require('./supplier/supplier.controller')

app.use(express.json());

const hostname = '127.0.0.1'
const port = 3000

app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//7 endpoint barang, jenis_barang, karyawan, member, merk, pembelian, supplier

app.use('/barang', barangController) //works
app.use('/jenis_barang', jenisController) //works
app.use('/karyawan', karyawanController) //works
app.use('/member', memberController) //works
app.use('/merk', merkController) //works
app.use('/pembelian', pembelianController) //works
app.use('/supplier', supplierController) //works


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
