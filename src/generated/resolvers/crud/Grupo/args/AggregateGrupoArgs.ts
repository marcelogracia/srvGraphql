import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrupoOrderByWithRelationInput } from "../../../inputs/GrupoOrderByWithRelationInput";
import { GrupoWhereInput } from "../../../inputs/GrupoWhereInput";
import { GrupoWhereUniqueInput } from "../../../inputs/GrupoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGrupoArgs {
  @TypeGraphQL.Field(_type => GrupoWhereInput, {
    nullable: true
  })
  where?: GrupoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GrupoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GrupoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GrupoWhereUniqueInput, {
    nullable: true
  })
  cursor?: GrupoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
