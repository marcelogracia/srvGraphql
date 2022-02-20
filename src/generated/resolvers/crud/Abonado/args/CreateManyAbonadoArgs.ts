import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoCreateManyInput } from "../../../inputs/AbonadoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAbonadoArgs {
  @TypeGraphQL.Field(_type => [AbonadoCreateManyInput], {
    nullable: false
  })
  data!: AbonadoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
