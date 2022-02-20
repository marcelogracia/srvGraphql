import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoRelationFilter } from "../inputs/AbonadoRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GrupoWhereInput", {
  isAbstract: true
})
export class GrupoWhereInput {
  @TypeGraphQL.Field(_type => [GrupoWhereInput], {
    nullable: true
  })
  AND?: GrupoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereInput], {
    nullable: true
  })
  OR?: GrupoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereInput], {
    nullable: true
  })
  NOT?: GrupoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  activo?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => AbonadoRelationFilter, {
    nullable: true
  })
  abonado?: AbonadoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  abonadoId?: IntFilter | undefined;
}
