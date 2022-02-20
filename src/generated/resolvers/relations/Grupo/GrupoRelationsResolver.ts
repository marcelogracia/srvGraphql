import * as TypeGraphQL from "type-graphql";
import { Abonado } from "../../../models/Abonado";
import { Grupo } from "../../../models/Grupo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Grupo)
export class GrupoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Abonado, {
    nullable: false
  })
  async abonado(@TypeGraphQL.Root() grupo: Grupo, @TypeGraphQL.Ctx() ctx: any): Promise<Abonado> {
    return getPrismaFromContext(ctx).grupo.findUnique({
      where: {
        id: grupo.id,
      },
    }).abonado({});
  }
}
