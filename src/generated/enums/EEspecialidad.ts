import * as TypeGraphQL from "type-graphql";

export enum EEspecialidad {
  PSICOLOGIA = "PSICOLOGIA"
}
TypeGraphQL.registerEnumType(EEspecialidad, {
  name: "EEspecialidad",
  description: undefined,
});
