import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoCreateNestedOneWithoutGrupoInput } from "../inputs/AbonadoCreateNestedOneWithoutGrupoInput";

@TypeGraphQL.InputType("GrupoCreateInput", {
  isAbstract: true
})
export class GrupoCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  activo?: boolean | undefined;

  @TypeGraphQL.Field(_type => AbonadoCreateNestedOneWithoutGrupoInput, {
    nullable: false
  })
  abonado!: AbonadoCreateNestedOneWithoutGrupoInput;
}
