import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoUpdateWithoutAbonadoInput } from "../inputs/GrupoUpdateWithoutAbonadoInput";
import { GrupoWhereUniqueInput } from "../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.InputType("GrupoUpdateWithWhereUniqueWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoUpdateWithWhereUniqueWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrupoUpdateWithoutAbonadoInput, {
    nullable: false
  })
  data!: GrupoUpdateWithoutAbonadoInput;
}
