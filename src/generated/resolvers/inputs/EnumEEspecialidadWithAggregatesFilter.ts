import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEEspecialidadFilter } from "../inputs/NestedEnumEEspecialidadFilter";
import { NestedEnumEEspecialidadWithAggregatesFilter } from "../inputs/NestedEnumEEspecialidadWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.InputType("EnumEEspecialidadWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEEspecialidadWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEEspecialidadWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEEspecialidadWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEEspecialidadFilter, {
    nullable: true
  })
  _min?: NestedEnumEEspecialidadFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEEspecialidadFilter, {
    nullable: true
  })
  _max?: NestedEnumEEspecialidadFilter | undefined;
}
