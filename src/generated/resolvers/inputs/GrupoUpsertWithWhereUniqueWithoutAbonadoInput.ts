import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateWithoutAbonadoInput } from "../inputs/GrupoCreateWithoutAbonadoInput";
import { GrupoUpdateWithoutAbonadoInput } from "../inputs/GrupoUpdateWithoutAbonadoInput";
import { GrupoWhereUniqueInput } from "../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.InputType("GrupoUpsertWithWhereUniqueWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoUpsertWithWhereUniqueWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrupoUpdateWithoutAbonadoInput, {
    nullable: false
  })
  update!: GrupoUpdateWithoutAbonadoInput;

  @TypeGraphQL.Field(_type => GrupoCreateWithoutAbonadoInput, {
    nullable: false
  })
  create!: GrupoCreateWithoutAbonadoInput;
}
