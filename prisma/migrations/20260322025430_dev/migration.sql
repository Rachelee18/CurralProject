-- CreateTable
CREATE TABLE "Vaca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "criado_em" DATE NOT NULL,

    CONSTRAINT "Vaca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curral" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "criado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordenha" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "periodo_manha" TEXT NOT NULL,
    "periodo_tarde" TEXT NOT NULL,
    "criado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curral_origem_id" INTEGER NOT NULL,
    "curral_destino_id" INTEGER NOT NULL,

    CONSTRAINT "Ordenha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leite" (
    "id" SERIAL NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "coleta_data" DATE NOT NULL,
    "criado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vaca_id" INTEGER NOT NULL,
    "ordenha_id" INTEGER NOT NULL,

    CONSTRAINT "Leite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ordenha" ADD CONSTRAINT "Ordenha_curral_origem_id_fkey" FOREIGN KEY ("curral_origem_id") REFERENCES "Curral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordenha" ADD CONSTRAINT "Ordenha_curral_destino_id_fkey" FOREIGN KEY ("curral_destino_id") REFERENCES "Curral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leite" ADD CONSTRAINT "Leite_vaca_id_fkey" FOREIGN KEY ("vaca_id") REFERENCES "Vaca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leite" ADD CONSTRAINT "Leite_ordenha_id_fkey" FOREIGN KEY ("ordenha_id") REFERENCES "Ordenha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
