import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoWhereInput } from "../../../inputs/GrupoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  where?: GrupoWhereInput | undefined;
}
