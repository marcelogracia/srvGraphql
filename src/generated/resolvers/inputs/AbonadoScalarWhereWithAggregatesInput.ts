import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEEspecialidadWithAggregatesFilter } from "../inputs/EnumEEspecialidadWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AbonadoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AbonadoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AbonadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AbonadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbonadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AbonadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbonadoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AbonadoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEEspecialidadWithAggregatesFilter, {
    nullable: true
  })
  especialidad?: EnumEEspecialidadWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  apellido?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  razonSocial?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  cuit?: StringWithAggregatesFilter | undefined;
}
