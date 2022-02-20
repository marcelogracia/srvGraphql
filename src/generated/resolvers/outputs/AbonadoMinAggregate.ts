import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.ObjectType("AbonadoMinAggregate", {
  isAbstract: true
})
export class AbonadoMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => EEspecialidad, {
    nullable: true
  })
  especialidad!: "PSICOLOGIA" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nombre!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apellido!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razonSocial!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cuit!: string | null;
}
