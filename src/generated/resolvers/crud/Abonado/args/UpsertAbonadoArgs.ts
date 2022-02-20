import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoCreateInput } from "../../../inputs/AbonadoCreateInput";
import { AbonadoUpdateInput } from "../../../inputs/AbonadoUpdateInput";
import { AbonadoWhereUniqueInput } from "../../../inputs/AbonadoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: false
  })
  where!: AbonadoWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbonadoCreateInput, {
    nullable: false
  })
  create!: AbonadoCreateInput;

  @TypeGraphQL.Field(_type => AbonadoUpdateInput, {
    nullable: false
  })
  update!: AbonadoUpdateInput;
}
