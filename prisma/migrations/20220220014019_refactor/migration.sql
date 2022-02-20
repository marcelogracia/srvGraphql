/*
  Warnings:

  - You are about to drop the `CategoriaEncuenta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ejercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Encuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Evento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Formulario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ObraSocial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pregunta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Registro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegistroDetalle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Relevamiento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sesion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategoriaEncuenta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoEvento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoRepuesta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrabajoAplicado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tratamiento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EncuestaToFormulario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FormularioToPregunta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ejercicio" DROP CONSTRAINT "Ejercicio_sesionId_fkey";

-- DropForeignKey
ALTER TABLE "Encuesta" DROP CONSTRAINT "Encuesta_categoriaEncuentaId_fkey";

-- DropForeignKey
ALTER TABLE "Encuesta" DROP CONSTRAINT "Encuesta_subCategoriaEncuentaId_fkey";

-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_abonadoId_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_obraSocialId_fkey";

-- DropForeignKey
ALTER TABLE "Pregunta" DROP CONSTRAINT "Pregunta_tipoRepuestaId_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_relevamientoId_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDetalle" DROP CONSTRAINT "RegistroDetalle_registroId_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDetalle" DROP CONSTRAINT "RegistroDetalle_tipoRepuestaId_fkey";

-- DropForeignKey
ALTER TABLE "Relevamiento" DROP CONSTRAINT "Relevamiento_abonadoId_fkey";

-- DropForeignKey
ALTER TABLE "Relevamiento" DROP CONSTRAINT "Relevamiento_encuestaId_fkey";

-- DropForeignKey
ALTER TABLE "Relevamiento" DROP CONSTRAINT "Relevamiento_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Relevamiento" DROP CONSTRAINT "Relevamiento_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Relevamiento" DROP CONSTRAINT "Relevamiento_tratamientoId_fkey";

-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_preguntaId_fkey";

-- DropForeignKey
ALTER TABLE "Respuesta" DROP CONSTRAINT "Respuesta_tipoRepuestaId_fkey";

-- DropForeignKey
ALTER TABLE "Sesion" DROP CONSTRAINT "Sesion_tratamientoId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategoriaEncuenta" DROP CONSTRAINT "SubCategoriaEncuenta_categoriaEncuentaId_fkey";

-- DropForeignKey
ALTER TABLE "Tratamiento" DROP CONSTRAINT "Tratamiento_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Tratamiento" DROP CONSTRAINT "Tratamiento_personaId_fkey";

-- DropForeignKey
ALTER TABLE "_EncuestaToFormulario" DROP CONSTRAINT "_EncuestaToFormulario_A_fkey";

-- DropForeignKey
ALTER TABLE "_EncuestaToFormulario" DROP CONSTRAINT "_EncuestaToFormulario_B_fkey";

-- DropForeignKey
ALTER TABLE "_FormularioToPregunta" DROP CONSTRAINT "_FormularioToPregunta_A_fkey";

-- DropForeignKey
ALTER TABLE "_FormularioToPregunta" DROP CONSTRAINT "_FormularioToPregunta_B_fkey";

-- DropTable
DROP TABLE "CategoriaEncuenta";

-- DropTable
DROP TABLE "Ejercicio";

-- DropTable
DROP TABLE "Encuesta";

-- DropTable
DROP TABLE "Evento";

-- DropTable
DROP TABLE "Formulario";

-- DropTable
DROP TABLE "ObraSocial";

-- DropTable
DROP TABLE "Persona";

-- DropTable
DROP TABLE "Pregunta";

-- DropTable
DROP TABLE "Registro";

-- DropTable
DROP TABLE "RegistroDetalle";

-- DropTable
DROP TABLE "Relevamiento";

-- DropTable
DROP TABLE "Respuesta";

-- DropTable
DROP TABLE "Sesion";

-- DropTable
DROP TABLE "SubCategoriaEncuenta";

-- DropTable
DROP TABLE "TipoEvento";

-- DropTable
DROP TABLE "TipoRepuesta";

-- DropTable
DROP TABLE "TrabajoAplicado";

-- DropTable
DROP TABLE "Tratamiento";

-- DropTable
DROP TABLE "_EncuestaToFormulario";

-- DropTable
DROP TABLE "_FormularioToPregunta";

-- DropEnum
DROP TYPE "EEstadoEvento";

-- DropEnum
DROP TYPE "EFrecuenciaEvento";

-- DropEnum
DROP TYPE "ETipoRespuesta";
