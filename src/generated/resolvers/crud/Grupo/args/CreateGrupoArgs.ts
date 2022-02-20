import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoCreateInput } from "../../../inputs/GrupoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoCreateInput, {
    nullable: false
  })
  data!: GrupoCreateInput;
}
