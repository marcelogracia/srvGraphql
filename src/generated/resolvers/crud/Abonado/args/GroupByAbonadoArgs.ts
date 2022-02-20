import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoOrderByWithAggregationInput } from "../../../inputs/AbonadoOrderByWithAggregationInput";
import { AbonadoScalarWhereWithAggregatesInput } from "../../../inputs/AbonadoScalarWhereWithAggregatesInput";
import { AbonadoWhereInput } from "../../../inputs/AbonadoWhereInput";
import { AbonadoScalarFieldEnum } from "../../../../enums/AbonadoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  where?: AbonadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbonadoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AbonadoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbonadoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "especialidad" | "nombre" | "apellido" | "razonSocial" | "email" | "cuit">;

  @TypeGraphQL.Field(_type => AbonadoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AbonadoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
