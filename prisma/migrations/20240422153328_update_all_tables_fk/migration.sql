-- CreateTable
CREATE TABLE "barang" (
    "id_barang" SERIAL NOT NULL,
    "kode_jenis" INTEGER NOT NULL,
    "kode_merk" INTEGER NOT NULL,
    "kode_supplier" INTEGER NOT NULL,
    "nama_barang" VARCHAR(255) NOT NULL,
    "harga_barang" INTEGER NOT NULL,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id_barang")
);

-- CreateTable
CREATE TABLE "jenis_barang" (
    "id_jenis" SERIAL NOT NULL,
    "nama_jenis" VARCHAR NOT NULL,

    CONSTRAINT "jenis_barang_pkey" PRIMARY KEY ("id_jenis")
);

-- CreateTable
CREATE TABLE "karyawan" (
    "id_karyawan" SERIAL NOT NULL,
    "nama_karyawan" VARCHAR(255) NOT NULL,
    "alamat_karyawan" VARCHAR(255) NOT NULL,

    CONSTRAINT "karyawan_pkey" PRIMARY KEY ("id_karyawan")
);

-- CreateTable
CREATE TABLE "member" (
    "id_member" SERIAL NOT NULL,
    "nama_member" VARCHAR(255) NOT NULL,
    "alamat_member" VARCHAR(255) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id_member")
);

-- CreateTable
CREATE TABLE "merk" (
    "id_merk" SERIAL NOT NULL,
    "nama_merk" VARCHAR(255) NOT NULL,

    CONSTRAINT "merk_pkey" PRIMARY KEY ("id_merk")
);

-- CreateTable
CREATE TABLE "pembelian" (
    "kode_pembelian" SERIAL NOT NULL,
    "kode_barang" INTEGER NOT NULL,
    "kode_pegawai" INTEGER NOT NULL,
    "total_pembelian" INTEGER NOT NULL,
    "tgl_pembelian" DATE NOT NULL,
    "kode_member" INTEGER NOT NULL,

    CONSTRAINT "pembelian_pkey" PRIMARY KEY ("kode_pembelian")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id_supplier" SERIAL NOT NULL,
    "nama_supplier" VARCHAR NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id_supplier")
);

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "kode_jenis_fk" FOREIGN KEY ("kode_jenis") REFERENCES "jenis_barang"("id_jenis") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "kode_merk_fk" FOREIGN KEY ("kode_merk") REFERENCES "merk"("id_merk") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "kode_supplier" FOREIGN KEY ("kode_supplier") REFERENCES "supplier"("id_supplier") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pembelian" ADD CONSTRAINT "kode_barang_fk" FOREIGN KEY ("kode_barang") REFERENCES "barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pembelian" ADD CONSTRAINT "kode_member_fk" FOREIGN KEY ("kode_member") REFERENCES "member"("id_member") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pembelian" ADD CONSTRAINT "kode_pegawai_fk" FOREIGN KEY ("kode_pegawai") REFERENCES "karyawan"("id_karyawan") ON DELETE NO ACTION ON UPDATE NO ACTION;
