import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoAvgAggregate } from "../outputs/AbonadoAvgAggregate";
import { AbonadoCountAggregate } from "../outputs/AbonadoCountAggregate";
import { AbonadoMaxAggregate } from "../outputs/AbonadoMaxAggregate";
import { AbonadoMinAggregate } from "../outputs/AbonadoMinAggregate";
import { AbonadoSumAggregate } from "../outputs/AbonadoSumAggregate";

@TypeGraphQL.ObjectType("AggregateAbonado", {
  isAbstract: true
})
export class AggregateAbonado {
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
