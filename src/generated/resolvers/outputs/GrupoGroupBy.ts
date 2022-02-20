import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoAvgAggregate } from "../outputs/GrupoAvgAggregate";
import { GrupoCountAggregate } from "../outputs/GrupoCountAggregate";
import { GrupoMaxAggregate } from "../outputs/GrupoMaxAggregate";
import { GrupoMinAggregate } from "../outputs/GrupoMinAggregate";
import { GrupoSumAggregate } from "../outputs/GrupoSumAggregate";

@TypeGraphQL.ObjectType("GrupoGroupBy", {
  isAbstract: true
})
export class GrupoGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  abonadoId!: number;

  @TypeGraphQL.Field(_type => GrupoCountAggregate, {
    nullable: true
  })
  _count!: GrupoCountAggregate | null;

  @TypeGraphQL.Field(_type => GrupoAvgAggregate, {
    nullable: true
  })
  _avg!: GrupoAvgAggregate | null;

  @TypeGraphQL.Field(_type => GrupoSumAggregate, {
    nullable: true
  })
  _sum!: GrupoSumAggregate | null;

  @TypeGraphQL.Field(_type => GrupoMinAggregate, {
    nullable: true
  })
  _min!: GrupoMinAggregate | null;

  @TypeGraphQL.Field(_type => GrupoMaxAggregate, {
    nullable: true
  })
  _max!: GrupoMaxAggregate | null;
}
