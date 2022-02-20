import * as TypeGraphQL from "type-graphql";
import { Abonado } from "../../../models/Abonado";
import { Grupo } from "../../../models/Grupo";
import { AbonadoGrupoArgs } from "./args/AbonadoGrupoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abonado)
export class AbonadoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Grupo], {
    nullable: false
  })
  async grupo(@TypeGraphQL.Root() abonado: Abonado, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AbonadoGrupoArgs): Promise<Grupo[]> {
    return getPrismaFromContext(ctx).abonado.findUnique({
      where: {
        id: abonado.id,
      },
    }).grupo(args);
  }
}
