import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoCreateNestedManyWithoutAbonadoInput } from "../inputs/GrupoCreateNestedManyWithoutAbonadoInput";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.InputType("AbonadoCreateInput", {
  isAbstract: true
})
export class AbonadoCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => EEspecialidad, {
    nullable: true
  })
  especialidad?: "PSICOLOGIA" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apellido!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razonSocial?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cuit!: string;

  @TypeGraphQL.Field(_type => GrupoCreateNestedManyWithoutAbonadoInput, {
    nullable: true
  })
  grupo?: GrupoCreateNestedManyWithoutAbonadoInput | undefined;
}
