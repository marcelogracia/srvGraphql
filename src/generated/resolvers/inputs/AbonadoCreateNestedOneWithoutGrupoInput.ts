import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoCreateOrConnectWithoutGrupoInput } from "../inputs/AbonadoCreateOrConnectWithoutGrupoInput";
import { AbonadoCreateWithoutGrupoInput } from "../inputs/AbonadoCreateWithoutGrupoInput";
import { AbonadoWhereUniqueInput } from "../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.InputType("AbonadoCreateNestedOneWithoutGrupoInput", {
  isAbstract: true
})
export class AbonadoCreateNestedOneWithoutGrupoInput {
  @TypeGraphQL.Field(_type => AbonadoCreateWithoutGrupoInput, {
    nullable: true
  })
  create?: AbonadoCreateWithoutGrupoInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoCreateOrConnectWithoutGrupoInput, {
    nullable: true
  })
  connectOrCreate?: AbonadoCreateOrConnectWithoutGrupoInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: true
  })
  connect?: AbonadoWhereUniqueInput | undefined;
}
