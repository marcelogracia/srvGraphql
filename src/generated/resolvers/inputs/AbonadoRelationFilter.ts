import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbonadoWhereInput } from "../inputs/AbonadoWhereInput";

@TypeGraphQL.InputType("AbonadoRelationFilter", {
  isAbstract: true
})
export class AbonadoRelationFilter {
  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  is?: AbonadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  isNot?: AbonadoWhereInput | undefined;
}
