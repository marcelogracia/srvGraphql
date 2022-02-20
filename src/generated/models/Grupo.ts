import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Abonado } from "../models/Abonado";

@TypeGraphQL.ObjectType("Grupo", {
  isAbstract: true
})
export class Grupo {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  activo!: boolean;

  abonado?: Abonado;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  abonadoId!: number;
}
