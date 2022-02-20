import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GrupoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GrupoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GrupoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GrupoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GrupoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GrupoScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  activo?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  abonadoId?: IntWithAggregatesFilter | undefined;
}
