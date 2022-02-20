import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoWhereUniqueInput } from "../../../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: false
  })
  where!: GrupoWhereUniqueInput;
}
