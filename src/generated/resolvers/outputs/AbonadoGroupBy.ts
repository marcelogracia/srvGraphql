import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoAvgAggregate } from "../outputs/AbonadoAvgAggregate";
import { AbonadoCountAggregate } from "../outputs/AbonadoCountAggregate";
import { AbonadoMaxAggregate } from "../outputs/AbonadoMaxAggregate";
import { AbonadoMinAggregate } from "../outputs/AbonadoMinAggregate";
import { AbonadoSumAggregate } from "../outputs/AbonadoSumAggregate";
import { EEspecialidad } from "../../enums/EEspecialidad";

@TypeGraphQL.ObjectType("AbonadoGroupBy", {
  isAbstract: true
})
export class AbonadoGroupBy {
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
  razonSocial!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cuit!: string;

  @TypeGraphQL.Field(_type => AbonadoCountAggregate, {
    nullable: true
  })
  _count!: AbonadoCountAggregate | null;

  @TypeGraphQL.Field(_type => AbonadoAvgAggregate, {
    nullable: true
  })
  _avg!: AbonadoAvgAggregate | null;

  @TypeGraphQL.Field(_type => AbonadoSumAggregate, {
    nullable: true
  })
  _sum!: AbonadoSumAggregate | null;

  @TypeGraphQL.Field(_type => AbonadoMinAggregate, {
    nullable: true
  })
  _min!: AbonadoMinAggregate | null;

  @TypeGraphQL.Field(_type => AbonadoMaxAggregate, {
    nullable: true
  })
  _max!: AbonadoMaxAggregate | null;
}
