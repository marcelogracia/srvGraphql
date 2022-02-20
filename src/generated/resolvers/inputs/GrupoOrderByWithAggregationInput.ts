import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrupoAvgOrderByAggregateInput } from "../inputs/GrupoAvgOrderByAggregateInput";
import { GrupoCountOrderByAggregateInput } from "../inputs/GrupoCountOrderByAggregateInput";
import { GrupoMaxOrderByAggregateInput } from "../inputs/GrupoMaxOrderByAggregateInput";
import { GrupoMinOrderByAggregateInput } from "../inputs/GrupoMinOrderByAggregateInput";
import { GrupoSumOrderByAggregateInput } from "../inputs/GrupoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GrupoOrderByWithAggregationInput", {
  isAbstract: true
})
export class GrupoOrderByWithAggregationInput {
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
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  abonadoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GrupoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GrupoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrupoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GrupoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrupoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GrupoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrupoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GrupoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrupoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GrupoSumOrderByAggregateInput | undefined;
}
