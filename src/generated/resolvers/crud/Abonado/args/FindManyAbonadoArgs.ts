import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbonadoOrderByWithRelationInput } from "../../../inputs/AbonadoOrderByWithRelationInput";
import { AbonadoWhereInput } from "../../../inputs/AbonadoWhereInput";
import { AbonadoWhereUniqueInput } from "../../../inputs/AbonadoWhereUniqueInput";
import { AbonadoScalarFieldEnum } from "../../../../enums/AbonadoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAbonadoArgs {
  @TypeGraphQL.Field(_type => AbonadoWhereInput, {
    nullable: true
  })
  where?: AbonadoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbonadoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AbonadoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbonadoWhereUniqueInput, {
    nullable: true
  })
  cursor?: AbonadoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AbonadoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "especialidad" | "nombre" | "apellido" | "razonSocial" | "email" | "cuit"> | undefined;
}
