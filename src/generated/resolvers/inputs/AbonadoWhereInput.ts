import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEEspecialidadFilter } from "../inputs/EnumEEspecialidadFilter";
import { GrupoListRelationFilter } from "../inputs/GrupoListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AbonadoWhereInput", {
  isAbstract: true
})
export class AbonadoWhereInput {
  @TypeGraphQL.Field(_type => [AbonadoWhereInput], {
    nullable: true
  })
  AND?: AbonadoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbonadoWhereInput], {
    nullable: true
  })
  OR?: AbonadoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbonadoWhereInput], {
    nullable: true
  })
  NOT?: AbonadoWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumEEspecialidadFilter, {
    nullable: true
  })
  especialidad?: EnumEEspecialidadFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  apellido?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  razonSocial?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cuit?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GrupoListRelationFilter, {
    nullable: true
  })
  grupo?: GrupoListRelationFilter | undefined;
}
