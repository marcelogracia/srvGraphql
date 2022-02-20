import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAbonadoArgs } from "./args/AggregateAbonadoArgs";
import { Abonado } from "../../../models/Abonado";
import { AggregateAbonado } from "../../outputs/AggregateAbonado";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abonado)
export class AggregateAbonadoResolver {
  @TypeGraphQL.Query(_returns => AggregateAbonado, {
    nullable: false
  })
  async aggregateAbonado(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAbonadoArgs): Promise<AggregateAbonado> {
    return getPrismaFromContext(ctx).abonado.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
