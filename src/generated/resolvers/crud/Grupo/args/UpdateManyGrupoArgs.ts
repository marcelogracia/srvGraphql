import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoUpdateManyMutationInput } from "../../../inputs/GrupoUpdateManyMutationInput";
import { GrupoWhereInput } from "../../../inputs/GrupoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoUpdateManyMutationInput, {
    nullable: false
  })
  data!: GrupoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  where?: GrupoWhereInput | undefined;
}
