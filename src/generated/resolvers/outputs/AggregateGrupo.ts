import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoAvgAggregate } from "../outputs/GrupoAvgAggregate";
import { GrupoCountAggregate } from "../outputs/GrupoCountAggregate";
import { GrupoMaxAggregate } from "../outputs/GrupoMaxAggregate";
import { GrupoMinAggregate } from "../outputs/GrupoMinAggregate";
import { GrupoSumAggregate } from "../outputs/GrupoSumAggregate";

@TypeGraphQL.ObjectType("AggregateGrupo", {
  isAbstract: true
})
export class AggregateGrupo {
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
