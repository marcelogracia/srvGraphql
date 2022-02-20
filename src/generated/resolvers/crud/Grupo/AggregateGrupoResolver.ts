import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGrupoArgs } from "./args/AggregateGrupoArgs";
import { Grupo } from "../../../models/Grupo";
import { AggregateGrupo } from "../../outputs/AggregateGrupo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Grupo)
export class AggregateGrupoResolver {
  @TypeGraphQL.Query(_returns => AggregateGrupo, {
    nullable: false
  })
  async aggregateGrupo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGrupoArgs): Promise<AggregateGrupo> {
    return getPrismaFromContext(ctx).grupo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
