import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateManyAbonadoInputEnvelope } from "../inputs/GrupoCreateManyAbonadoInputEnvelope";
import { GrupoCreateOrConnectWithoutAbonadoInput } from "../inputs/GrupoCreateOrConnectWithoutAbonadoInput";
import { GrupoCreateWithoutAbonadoInput } from "../inputs/GrupoCreateWithoutAbonadoInput";
import { GrupoScalarWhereInput } from "../inputs/GrupoScalarWhereInput";
import { GrupoUpdateManyWithWhereWithoutAbonadoInput } from "../inputs/GrupoUpdateManyWithWhereWithoutAbonadoInput";
import { GrupoUpdateWithWhereUniqueWithoutAbonadoInput } from "../inputs/GrupoUpdateWithWhereUniqueWithoutAbonadoInput";
import { GrupoUpsertWithWhereUniqueWithoutAbonadoInput } from "../inputs/GrupoUpsertWithWhereUniqueWithoutAbonadoInput";
import { GrupoWhereUniqueInput } from "../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.InputType("GrupoUpdateManyWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoUpdateManyWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => [GrupoCreateWithoutAbonadoInput], {
    nullable: true
  })
  create?: GrupoCreateWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoCreateOrConnectWithoutAbonadoInput], {
    nullable: true
  })
  connectOrCreate?: GrupoCreateOrConnectWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoUpsertWithWhereUniqueWithoutAbonadoInput], {
    nullable: true
  })
  upsert?: GrupoUpsertWithWhereUniqueWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => GrupoCreateManyAbonadoInputEnvelope, {
    nullable: true
  })
  createMany?: GrupoCreateManyAbonadoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereUniqueInput], {
    nullable: true
  })
  set?: GrupoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GrupoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereUniqueInput], {
    nullable: true
  })
  delete?: GrupoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoWhereUniqueInput], {
    nullable: true
  })
  connect?: GrupoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoUpdateWithWhereUniqueWithoutAbonadoInput], {
    nullable: true
  })
  update?: GrupoUpdateWithWhereUniqueWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoUpdateManyWithWhereWithoutAbonadoInput], {
    nullable: true
  })
  updateMany?: GrupoUpdateManyWithWhereWithoutAbonadoInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GrupoScalarWhereInput[] | undefined;
}
