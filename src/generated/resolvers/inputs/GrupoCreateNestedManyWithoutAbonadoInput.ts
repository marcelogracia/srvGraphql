import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateManyAbonadoInputEnvelope } from "../inputs/GrupoCreateManyAbonadoInputEnvelope";
import { GrupoCreateOrConnectWithoutAbonadoInput } from "../inputs/GrupoCreateOrConnectWithoutAbonadoInput";
import { GrupoCreateWithoutAbonadoInput } from "../inputs/GrupoCreateWithoutAbonadoInput";
import { GrupoWhereUniqueInput } from "../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.InputType("GrupoCreateNestedManyWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoCreateNestedManyWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => [GrupoCreateWithoutAbonadoInput], {
    nullable: true
  })
  create?: GrupoCreateWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoCreateOrConnectWithoutAbonadoInput], {
    nullable: true
  })
  connectOrCreate?: GrupoCreateOrConnectWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => GrupoCreateManyAbonadoInputEnvelope, {
    nullable: true
  })
  createMany?: GrupoCreateManyAbonadoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereUniqueInput], {
    nullable: true
  })
  connect?: GrupoWhereUniqueInput[] | undefined;
}
