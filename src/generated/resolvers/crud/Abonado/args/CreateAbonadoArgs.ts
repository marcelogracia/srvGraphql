import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoCreateInput } from "../../../inputs/AbonadoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoCreateInput, {
    nullable: false
  })
  data!: AbonadoCreateInput;
}
