import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.InputType("NestedEnumEEspecialidadFilter", {
  isAbstract: true
})
export class NestedEnumEEspecialidadFilter {
  @TypeGraphQL.Field(_type => EEspecialidad, {
    nullable: true
  })
  equals?: "PSICOLOGIA" | undefined;

  @TypeGraphQL.Field(_type => [EEspecialidad], {
    nullable: true
  })
  in?: "PSICOLOGIA"[] | undefined;

  @TypeGraphQL.Field(_type => [EEspecialidad], {
    nullable: true
  })
  notIn?: "PSICOLOGIA"[] | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEEspecialidadFilter, {
    nullable: true
  })
  not?: NestedEnumEEspecialidadFilter | undefined;
}
