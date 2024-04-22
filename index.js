const express = require('express');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

//UBAH KE LAYERED ARCHITECTURE, taruh dlu smua dpe endpoints - vin
//Tambah endpoint-endpoints
app.get('/', (req, res) => {
  res.send('Halo');
});

app.listen(3000, () => console.log('Server is running on port 3000'));