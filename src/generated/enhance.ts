import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Abonado: crudResolvers.AbonadoCrudResolver,
  Grupo: crudResolvers.GrupoCrudResolver
};
const actionResolversMap = {
  Abonado: {
    abonado: actionResolvers.FindUniqueAbonadoResolver,
    findFirstAbonado: actionResolvers.FindFirstAbonadoResolver,
    abonados: actionResolvers.FindManyAbonadoResolver,
    createAbonado: actionResolvers.CreateAbonadoResolver,
    createManyAbonado: actionResolvers.CreateManyAbonadoResolver,
    deleteAbonado: actionResolvers.DeleteAbonadoResolver,
    updateAbonado: actionResolvers.UpdateAbonadoResolver,
    deleteManyAbonado: actionResolvers.DeleteManyAbonadoResolver,
    updateManyAbonado: actionResolvers.UpdateManyAbonadoResolver,
    upsertAbonado: actionResolvers.UpsertAbonadoResolver,
    aggregateAbonado: actionResolvers.AggregateAbonadoResolver,
    groupByAbonado: actionResolvers.GroupByAbonadoResolver
  },
  Grupo: {
    grupo: actionResolvers.FindUniqueGrupoResolver,
    findFirstGrupo: actionResolvers.FindFirstGrupoResolver,
    grupos: actionResolvers.FindManyGrupoResolver,
    createGrupo: actionResolvers.CreateGrupoResolver,
    createManyGrupo: actionResolvers.CreateManyGrupoResolver,
    deleteGrupo: actionResolvers.DeleteGrupoResolver,
    updateGrupo: actionResolvers.UpdateGrupoResolver,
    deleteManyGrupo: actionResolvers.DeleteManyGrupoResolver,
    updateManyGrupo: actionResolvers.UpdateManyGrupoResolver,
    upsertGrupo: actionResolvers.UpsertGrupoResolver,
    aggregateGrupo: actionResolvers.AggregateGrupoResolver,
    groupByGrupo: actionResolvers.GroupByGrupoResolver
  }
};
const crudResolversInfo = {
  Abonado: ["abonado", "findFirstAbonado", "abonados", "createAbonado", "createManyAbonado", "deleteAbonado", "updateAbonado", "deleteManyAbonado", "updateManyAbonado", "upsertAbonado", "aggregateAbonado", "groupByAbonado"],
  Grupo: ["grupo", "findFirstGrupo", "grupos", "createGrupo", "createManyGrupo", "deleteGrupo", "updateGrupo", "deleteManyGrupo", "updateManyGrupo", "upsertGrupo", "aggregateGrupo", "groupByGrupo"]
};
const argsInfo = {
  FindUniqueAbonadoArgs: ["where"],
  FindFirstAbonadoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAbonadoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAbonadoArgs: ["data"],
  CreateManyAbonadoArgs: ["data", "skipDuplicates"],
  DeleteAbonadoArgs: ["where"],
  UpdateAbonadoArgs: ["data", "where"],
  DeleteManyAbonadoArgs: ["where"],
  UpdateManyAbonadoArgs: ["data", "where"],
  UpsertAbonadoArgs: ["where", "create", "update"],
  AggregateAbonadoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAbonadoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueGrupoArgs: ["where"],
  FindFirstGrupoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGrupoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateGrupoArgs: ["data"],
  CreateManyGrupoArgs: ["data", "skipDuplicates"],
  DeleteGrupoArgs: ["where"],
  UpdateGrupoArgs: ["data", "where"],
  DeleteManyGrupoArgs: ["where"],
  UpdateManyGrupoArgs: ["data", "where"],
  UpsertGrupoArgs: ["where", "create", "update"],
  AggregateGrupoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByGrupoArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Abonado: relationResolvers.AbonadoRelationsResolver,
  Grupo: relationResolvers.GrupoRelationsResolver
};
const relationResolversInfo = {
  Abonado: ["grupo"],
  Grupo: ["abonado"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Abonado: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  Grupo: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAbonado: ["_count", "_avg", "_sum", "_min", "_max"],
  AbonadoGroupBy: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGrupo: ["_count", "_avg", "_sum", "_min", "_max"],
  GrupoGroupBy: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AbonadoCount: ["grupo"],
  AbonadoCountAggregate: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "_all"],
  AbonadoAvgAggregate: ["id"],
  AbonadoSumAggregate: ["id"],
  AbonadoMinAggregate: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoMaxAggregate: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  GrupoCountAggregate: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId", "_all"],
  GrupoAvgAggregate: ["id", "abonadoId"],
  GrupoSumAggregate: ["id", "abonadoId"],
  GrupoMinAggregate: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  GrupoMaxAggregate: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AbonadoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "grupo"],
  AbonadoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "grupo"],
  AbonadoWhereUniqueInput: ["id", "email"],
  AbonadoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "_count", "_avg", "_max", "_min", "_sum"],
  AbonadoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  GrupoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "nombre", "activo", "abonado", "abonadoId"],
  GrupoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonado", "abonadoId"],
  GrupoWhereUniqueInput: ["id"],
  GrupoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId", "_count", "_avg", "_max", "_min", "_sum"],
  GrupoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  AbonadoCreateInput: ["createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "grupo"],
  AbonadoUpdateInput: ["createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit", "grupo"],
  AbonadoCreateManyInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoUpdateManyMutationInput: ["createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  GrupoCreateInput: ["createdAt", "updatedAt", "nombre", "activo", "abonado"],
  GrupoUpdateInput: ["createdAt", "updatedAt", "nombre", "activo", "abonado"],
  GrupoCreateManyInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  GrupoUpdateManyMutationInput: ["createdAt", "updatedAt", "nombre", "activo"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumEEspecialidadFilter: ["equals", "in", "notIn", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  GrupoListRelationFilter: ["every", "some", "none"],
  GrupoOrderByRelationAggregateInput: ["_count"],
  AbonadoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoAvgOrderByAggregateInput: ["id"],
  AbonadoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumEEspecialidadWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  AbonadoRelationFilter: ["is", "isNot"],
  GrupoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  GrupoAvgOrderByAggregateInput: ["id", "abonadoId"],
  GrupoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  GrupoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  GrupoSumOrderByAggregateInput: ["id", "abonadoId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  GrupoCreateNestedManyWithoutAbonadoInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumEEspecialidadFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  GrupoUpdateManyWithoutAbonadoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  AbonadoCreateNestedOneWithoutGrupoInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  AbonadoUpdateOneRequiredWithoutGrupoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumEEspecialidadFilter: ["equals", "in", "notIn", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumEEspecialidadWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  GrupoCreateWithoutAbonadoInput: ["createdAt", "updatedAt", "nombre", "activo"],
  GrupoCreateOrConnectWithoutAbonadoInput: ["where", "create"],
  GrupoCreateManyAbonadoInputEnvelope: ["data", "skipDuplicates"],
  GrupoUpsertWithWhereUniqueWithoutAbonadoInput: ["where", "update", "create"],
  GrupoUpdateWithWhereUniqueWithoutAbonadoInput: ["where", "data"],
  GrupoUpdateManyWithWhereWithoutAbonadoInput: ["where", "data"],
  GrupoScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "nombre", "activo", "abonadoId"],
  AbonadoCreateWithoutGrupoInput: ["createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  AbonadoCreateOrConnectWithoutGrupoInput: ["where", "create"],
  AbonadoUpsertWithoutGrupoInput: ["update", "create"],
  AbonadoUpdateWithoutGrupoInput: ["createdAt", "updatedAt", "especialidad", "nombre", "apellido", "razonSocial", "email", "cuit"],
  GrupoCreateManyAbonadoInput: ["id", "createdAt", "updatedAt", "nombre", "activo"],
  GrupoUpdateWithoutAbonadoInput: ["createdAt", "updatedAt", "nombre", "activo"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

