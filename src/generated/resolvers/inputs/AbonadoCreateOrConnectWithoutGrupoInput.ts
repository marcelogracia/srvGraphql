import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoCreateWithoutGrupoInput } from "../inputs/AbonadoCreateWithoutGrupoInput";
import { AbonadoWhereUniqueInput } from "../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.InputType("AbonadoCreateOrConnectWithoutGrupoInput", {
  isAbstract: true
})
export class AbonadoCreateOrConnectWithoutGrupoInput {
  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: false
  })
  where!: AbonadoWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbonadoCreateWithoutGrupoInput, {
    nullable: false
  })
  create!: AbonadoCreateWithoutGrupoInput;
}
