import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoCreateOrConnectWithoutGrupoInput } from "../inputs/AbonadoCreateOrConnectWithoutGrupoInput";
import { AbonadoCreateWithoutGrupoInput } from "../inputs/AbonadoCreateWithoutGrupoInput";
import { AbonadoUpdateWithoutGrupoInput } from "../inputs/AbonadoUpdateWithoutGrupoInput";
import { AbonadoUpsertWithoutGrupoInput } from "../inputs/AbonadoUpsertWithoutGrupoInput";
import { AbonadoWhereUniqueInput } from "../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.InputType("AbonadoUpdateOneRequiredWithoutGrupoInput", {
  isAbstract: true
})
export class AbonadoUpdateOneRequiredWithoutGrupoInput {
  @TypeGraphQL.Field(_type => AbonadoCreateWithoutGrupoInput, {
    nullable: true
  })
  create?: AbonadoCreateWithoutGrupoInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoCreateOrConnectWithoutGrupoInput, {
    nullable: true
  })
  connectOrCreate?: AbonadoCreateOrConnectWithoutGrupoInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoUpsertWithoutGrupoInput, {
    nullable: true
  })
  upsert?: AbonadoUpsertWithoutGrupoInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: true
  })
  connect?: AbonadoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoUpdateWithoutGrupoInput, {
    nullable: true
  })
  update?: AbonadoUpdateWithoutGrupoInput | undefined;
}
