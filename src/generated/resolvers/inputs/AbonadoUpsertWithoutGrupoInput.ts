import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoCreateWithoutGrupoInput } from "../inputs/AbonadoCreateWithoutGrupoInput";
import { AbonadoUpdateWithoutGrupoInput } from "../inputs/AbonadoUpdateWithoutGrupoInput";

@TypeGraphQL.InputType("AbonadoUpsertWithoutGrupoInput", {
  isAbstract: true
})
export class AbonadoUpsertWithoutGrupoInput {
  @TypeGraphQL.Field(_type => AbonadoUpdateWithoutGrupoInput, {
    nullable: false
  })
  update!: AbonadoUpdateWithoutGrupoInput;

  @TypeGraphQL.Field(_type => AbonadoCreateWithoutGrupoInput, {
    nullable: false
  })
  create!: AbonadoCreateWithoutGrupoInput;
}
