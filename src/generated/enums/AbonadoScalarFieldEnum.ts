import * as TypeGraphQL from "type-graphql";

export enum AbonadoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  especialidad = "especialidad",
  nombre = "nombre",
  apellido = "apellido",
  razonSocial = "razonSocial",
  email = "email",
  cuit = "cuit"
}
TypeGraphQL.registerEnumType(AbonadoScalarFieldEnum, {
  name: "AbonadoScalarFieldEnum",
  description: undefined,
});
