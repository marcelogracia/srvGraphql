import * as TypeGraphQL from "type-graphql";

export enum GrupoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  nombre = "nombre",
  activo = "activo",
  abonadoId = "abonadoId"
}
TypeGraphQL.registerEnumType(GrupoScalarFieldEnum, {
  name: "GrupoScalarFieldEnum",
  description: undefined,
});
