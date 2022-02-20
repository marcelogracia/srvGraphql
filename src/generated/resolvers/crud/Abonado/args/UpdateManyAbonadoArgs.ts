import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoUpdateManyMutationInput } from "../../../inputs/AbonadoUpdateManyMutationInput";
import { AbonadoWhereInput } from "../../../inputs/AbonadoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoUpdateManyMutationInput, {
    nullable: false
  })
  data!: AbonadoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  where?: AbonadoWhereInput | undefined;
}
