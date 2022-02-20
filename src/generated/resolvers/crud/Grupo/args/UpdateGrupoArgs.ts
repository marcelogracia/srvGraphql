import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoUpdateInput } from "../../../inputs/GrupoUpdateInput";
import { GrupoWhereUniqueInput } from "../../../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoUpdateInput, {
    nullable: false
  })
  data!: GrupoUpdateInput;

  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;
}
