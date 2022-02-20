import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.InputType("EnumEEspecialidadFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEEspecialidadFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => EEspecialidad, {
    nullable: true
  })
  set?: "PSICOLOGIA" | undefined;
}
