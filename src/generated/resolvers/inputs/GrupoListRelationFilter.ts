import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoWhereInput } from "../inputs/GrupoWhereInput";

@TypeGraphQL.InputType("GrupoListRelationFilter", {
  isAbstract: true
})
export class GrupoListRelationFilter {
  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  every?: GrupoWhereInput | undefined;

  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  some?: GrupoWhereInput | undefined;

  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  none?: GrupoWhereInput | undefined;
}
