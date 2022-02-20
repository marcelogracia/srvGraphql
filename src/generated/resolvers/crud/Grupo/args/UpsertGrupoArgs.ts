import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoCreateInput } from "../../../inputs/GrupoCreateInput";
import { GrupoUpdateInput } from "../../../inputs/GrupoUpdateInput";
import { GrupoWhereUniqueInput } from "../../../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrupoCreateInput, {
    nullable: false
  })
  create!: GrupoCreateInput;

  @TypeGraphQL.Field(_type => GrupoUpdateInput, {
    nullable: false
  })
  update!: GrupoUpdateInput;
}
