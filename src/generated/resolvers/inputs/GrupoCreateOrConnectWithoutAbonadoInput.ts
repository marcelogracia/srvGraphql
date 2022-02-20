import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateWithoutAbonadoInput } from "../inputs/GrupoCreateWithoutAbonadoInput";
import { GrupoWhereUniqueInput } from "../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.InputType("GrupoCreateOrConnectWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoCreateOrConnectWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrupoCreateWithoutAbonadoInput, {
    nullable: false
  })
  create!: GrupoCreateWithoutAbonadoInput;
}
