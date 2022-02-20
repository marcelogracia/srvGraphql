import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateManyAbonadoInput } from "../inputs/GrupoCreateManyAbonadoInput";

@TypeGraphQL.InputType("GrupoCreateManyAbonadoInputEnvelope", {
  isAbstract: true
})
export class GrupoCreateManyAbonadoInputEnvelope {
  @TypeGraphQL.Field(_type => [GrupoCreateManyAbonadoInput], {
    nullable: false
  })
  data!: GrupoCreateManyAbonadoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
