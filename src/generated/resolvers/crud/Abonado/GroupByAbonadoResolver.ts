import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAbonadoArgs } from "./args/GroupByAbonadoArgs";
import { Abonado } from "../../../models/Abonado";
import { AbonadoGroupBy } from "../../outputs/AbonadoGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abonado)
export class GroupByAbonadoResolver {
  @TypeGraphQL.Query(_returns => [AbonadoGroupBy], {
    nullable: false
  })
  async groupByAbonado(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAbonadoArgs): Promise<AbonadoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).abonado.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
