import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoWhereUniqueInput } from "../../../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: false
  })
  where!: AbonadoWhereUniqueInput;
}
