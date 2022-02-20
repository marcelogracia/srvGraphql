import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoOrderByWithAggregationInput } from "../../../inputs/GrupoOrderByWithAggregationInput";
import { GrupoScalarWhereWithAggregatesInput } from "../../../inputs/GrupoScalarWhereWithAggregatesInput";
import { GrupoWhereInput } from "../../../inputs/GrupoWhereInput";
import { GrupoScalarFieldEnum } from "../../../../enums/GrupoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  where?: GrupoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GrupoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GrupoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrupoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "nombre" | "activo" | "abonadoId">;

  @TypeGraphQL.Field(_type => GrupoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GrupoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
