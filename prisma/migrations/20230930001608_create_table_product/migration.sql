-- CreateTable
CREATE TABLE "product_table" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "product_table_pkey" PRIMARY KEY ("id")
);
