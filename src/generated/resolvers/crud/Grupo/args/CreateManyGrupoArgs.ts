import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoCreateManyInput } from "../../../inputs/GrupoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGrupoArgs {
  @TypeGraphQL.Field(_type => [GrupoCreateManyInput], {
    nullable: false
  })
  data!: GrupoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
