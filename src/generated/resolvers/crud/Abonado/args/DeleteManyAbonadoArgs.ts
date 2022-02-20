import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoWhereInput } from "../../../inputs/AbonadoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  where?: AbonadoWhereInput | undefined;
}
