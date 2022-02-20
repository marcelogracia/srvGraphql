import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoAvgOrderByAggregateInput } from "../inputs/AbonadoAvgOrderByAggregateInput";
import { AbonadoCountOrderByAggregateInput } from "../inputs/AbonadoCountOrderByAggregateInput";
import { AbonadoMaxOrderByAggregateInput } from "../inputs/AbonadoMaxOrderByAggregateInput";
import { AbonadoMinOrderByAggregateInput } from "../inputs/AbonadoMinOrderByAggregateInput";
import { AbonadoSumOrderByAggregateInput } from "../inputs/AbonadoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AbonadoOrderByWithAggregationInput", {
  isAbstract: true
})
export class AbonadoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  especialidad?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  apellido?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  razonSocial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cuit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AbonadoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AbonadoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AbonadoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AbonadoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AbonadoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AbonadoSumOrderByAggregateInput | undefined;
}
