import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoScalarWhereInput } from "../inputs/GrupoScalarWhereInput";
import { GrupoUpdateManyMutationInput } from "../inputs/GrupoUpdateManyMutationInput";

@TypeGraphQL.InputType("GrupoUpdateManyWithWhereWithoutAbonadoInput", {
  isAbstract: true
})
export class GrupoUpdateManyWithWhereWithoutAbonadoInput {
  @TypeGraphQL.Field(_type => GrupoScalarWhereInput, {
    nullable: false
  })
  where!: GrupoScalarWhereInput;

  @TypeGraphQL.Field(_type => GrupoUpdateManyMutationInput, {
    nullable: false
  })
  data!: GrupoUpdateManyMutationInput;
}
