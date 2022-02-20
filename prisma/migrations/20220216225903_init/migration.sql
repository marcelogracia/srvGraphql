-- CreateEnum
CREATE TYPE "EEspecialidad" AS ENUM ('PSICOLOGIA');

-- CreateEnum
CREATE TYPE "EEstadoEvento" AS ENUM ('PENDIENTE', 'COMPLETADO');

-- CreateEnum
CREATE TYPE "EFrecuenciaEvento" AS ENUM ('DIARIO', 'SEMANAL', 'QUINCENAL', 'MENSUAL', 'ANUAL');

-- CreateEnum
CREATE TYPE "ETipoRespuesta" AS ENUM ('MULTIPLECHOICE', 'NUMERICA', 'STRING', 'BOOLEAN', 'CHECKBOX', 'ARRAY');

-- CreateTable
CREATE TABLE "Abonado" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "especialidad" "EEspecialidad" NOT NULL DEFAULT E'PSICOLOGIA',
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "razonSocial" TEXT,
    "email" TEXT NOT NULL,
    "cuit" VARCHAR(11) NOT NULL,

    CONSTRAINT "Abonado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "abonadoId" INTEGER NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObraSocial" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ObraSocial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dni" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "obraSocialId" INTEGER,
    "abonadoId" INTEGER NOT NULL,
    "grupoId" INTEGER,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tratamiento" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "objetivo" TEXT NOT NULL,
    "observaciones" TEXT,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "grupoId" INTEGER,
    "personaId" INTEGER,

    CONSTRAINT "Tratamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sesion" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "objetivo" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "tratamientoId" INTEGER NOT NULL,

    CONSTRAINT "Sesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ejercicio" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "comentario" TEXT NOT NULL,
    "puntaje" DOUBLE PRECISION NOT NULL,
    "etiqueta" TEXT NOT NULL,
    "recurso" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "trabajoAplicadoId" INTEGER NOT NULL,
    "sesionId" INTEGER NOT NULL,

    CONSTRAINT "Ejercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrabajoAplicado" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "etiqueta" TEXT[],
    "recurso" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,

    CONSTRAINT "TrabajoAplicado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoEvento" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "TipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "estado" "EEstadoEvento" NOT NULL,
    "observacion" TEXT,
    "frecuencia" "EFrecuenciaEvento" NOT NULL,
    "personaId" INTEGER,
    "grupoId" INTEGER,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaEncuenta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "CategoriaEncuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategoriaEncuenta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoriaEncuentaId" INTEGER NOT NULL,

    CONSTRAINT "SubCategoriaEncuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encuesta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "publica" BOOLEAN NOT NULL DEFAULT false,
    "categoriaEncuentaId" INTEGER NOT NULL,
    "subCategoriaEncuentaId" INTEGER,

    CONSTRAINT "Encuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formulario" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoRepuesta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tipo" "ETipoRespuesta" NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "TipoRepuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "enunciado" TEXT NOT NULL,
    "justificacion" TEXT NOT NULL,
    "tipoRepuestaId" INTEGER NOT NULL,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "valor" TEXT NOT NULL,
    "justificacion" TEXT NOT NULL,
    "opcionCorrecta" BOOLEAN NOT NULL,
    "preguntaId" INTEGER,
    "tipoRepuestaId" INTEGER NOT NULL,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relevamiento" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tratamientoId" INTEGER,
    "grupoId" INTEGER,
    "personaId" INTEGER,
    "abonadoId" INTEGER NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3),
    "link" TEXT NOT NULL,
    "encuestaId" INTEGER NOT NULL,

    CONSTRAINT "Relevamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "relevamientoId" INTEGER NOT NULL,
    "enunciado" TEXT NOT NULL,
    "tipoRespuesta" TEXT NOT NULL,
    "justificacion" TEXT NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroDetalle" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "valor" TEXT NOT NULL,
    "tipoRepuestaId" INTEGER NOT NULL,
    "registroId" INTEGER NOT NULL,

    CONSTRAINT "RegistroDetalle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EncuestaToFormulario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FormularioToPregunta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Abonado_email_key" ON "Abonado"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_dni_key" ON "Persona"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_email_key" ON "Persona"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_celular_key" ON "Persona"("celular");

-- CreateIndex
CREATE UNIQUE INDEX "TipoRepuesta_tipo_key" ON "TipoRepuesta"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "_EncuestaToFormulario_AB_unique" ON "_EncuestaToFormulario"("A", "B");

-- CreateIndex
CREATE INDEX "_EncuestaToFormulario_B_index" ON "_EncuestaToFormulario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormularioToPregunta_AB_unique" ON "_FormularioToPregunta"("A", "B");

-- CreateIndex
CREATE INDEX "_FormularioToPregunta_B_index" ON "_FormularioToPregunta"("B");

-- AddForeignKey
ALTER TABLE "Grupo" ADD CONSTRAINT "Grupo_abonadoId_fkey" FOREIGN KEY ("abonadoId") REFERENCES "Abonado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_abonadoId_fkey" FOREIGN KEY ("abonadoId") REFERENCES "Abonado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_obraSocialId_fkey" FOREIGN KEY ("obraSocialId") REFERENCES "ObraSocial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tratamiento" ADD CONSTRAINT "Tratamiento_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tratamiento" ADD CONSTRAINT "Tratamiento_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sesion" ADD CONSTRAINT "Sesion_tratamientoId_fkey" FOREIGN KEY ("tratamientoId") REFERENCES "Tratamiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_sesionId_fkey" FOREIGN KEY ("sesionId") REFERENCES "Sesion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategoriaEncuenta" ADD CONSTRAINT "SubCategoriaEncuenta_categoriaEncuentaId_fkey" FOREIGN KEY ("categoriaEncuentaId") REFERENCES "CategoriaEncuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encuesta" ADD CONSTRAINT "Encuesta_categoriaEncuentaId_fkey" FOREIGN KEY ("categoriaEncuentaId") REFERENCES "CategoriaEncuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encuesta" ADD CONSTRAINT "Encuesta_subCategoriaEncuentaId_fkey" FOREIGN KEY ("subCategoriaEncuentaId") REFERENCES "SubCategoriaEncuenta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pregunta" ADD CONSTRAINT "Pregunta_tipoRepuestaId_fkey" FOREIGN KEY ("tipoRepuestaId") REFERENCES "TipoRepuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_tipoRepuestaId_fkey" FOREIGN KEY ("tipoRepuestaId") REFERENCES "TipoRepuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevamiento" ADD CONSTRAINT "Relevamiento_abonadoId_fkey" FOREIGN KEY ("abonadoId") REFERENCES "Abonado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevamiento" ADD CONSTRAINT "Relevamiento_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevamiento" ADD CONSTRAINT "Relevamiento_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevamiento" ADD CONSTRAINT "Relevamiento_tratamientoId_fkey" FOREIGN KEY ("tratamientoId") REFERENCES "Tratamiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevamiento" ADD CONSTRAINT "Relevamiento_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "Encuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_relevamientoId_fkey" FOREIGN KEY ("relevamientoId") REFERENCES "Relevamiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDetalle" ADD CONSTRAINT "RegistroDetalle_tipoRepuestaId_fkey" FOREIGN KEY ("tipoRepuestaId") REFERENCES "TipoRepuesta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDetalle" ADD CONSTRAINT "RegistroDetalle_registroId_fkey" FOREIGN KEY ("registroId") REFERENCES "Registro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncuestaToFormulario" ADD FOREIGN KEY ("A") REFERENCES "Encuesta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncuestaToFormulario" ADD FOREIGN KEY ("B") REFERENCES "Formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormularioToPregunta" ADD FOREIGN KEY ("A") REFERENCES "Formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormularioToPregunta" ADD FOREIGN KEY ("B") REFERENCES "Pregunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
