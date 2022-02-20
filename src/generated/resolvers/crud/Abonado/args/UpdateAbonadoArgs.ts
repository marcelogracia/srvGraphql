import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoUpdateInput } from "../../../inputs/AbonadoUpdateInput";
import { AbonadoWhereUniqueInput } from "../../../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoUpdateInput, {
    nullable: false
  })
  data!: AbonadoUpdateInput;

  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: false
  })
  where!: AbonadoWhereUniqueInput;
}
