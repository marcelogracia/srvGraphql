import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Grupo } from "../models/Grupo";
import { EEspecialidad } from "../enums/EEspecialidad";
import { AbonadoCount } from "../resolvers/outputs/AbonadoCount";

@TypeGraphQL.ObjectType("Abonado", {
  isAbstract: true
})
export class Abonado {
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

  @TypeGraphQL.Field(_type => EEspecialidad, {
    nullable: false
  })
  especialidad!: "PSICOLOGIA";

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
  razonSocial?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cuit!: string;

  grupo?: Grupo[];

  @TypeGraphQL.Field(_type => AbonadoCount, {
    nullable: true
  })
  _count?: AbonadoCount | null;
}
