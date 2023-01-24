import { Args, Query, Mutation } from '@nestjs/graphql';

import { UsersService } from './noCodeDb.service';

import { AddProjectInput } from './dto/AddProjectInput';
import { NoCodeDbOutput } from './dto/noCodeBackendOutput';
import { AddTableInput } from './dto/addTableInput';
import { AddColInput } from './dto/addColInput';
import { GetRowInput } from './dto/getRowInput';
import { GetViewsCountInput } from './dto/getViewCountInput';
import { AddRowInput } from './dto/addRowInput';
import { PatchRowInput } from './dto/patchRowInput';
import { DeleteRowInput } from './dto/deleteRowInput';
import { PatchColInput } from './dto/patchColInput';
import { AddViewInput } from './dto/addViewInput';
import { PermessionOutPut } from './dto/permessionOutPut';
import { CanPrimaryKeyOutput } from './dto/canPrimaryKey';
import { GetHookInput } from './dto/getHookInput';
import { AddHookInput } from './dto/addHookInput';
import { UpdateHookInput } from './dto/updateHookInput';
import { AddSortInput } from './dto/addSortInput';
import { AddFiltreInput } from './dto/addFiltreInput';
import { GetSoloRowInput } from './dto/getSoloRowInput';
import { GetRowListInput } from './dto/getRowListInput';
import { AddCategorieInput } from './dto/addCategorieInput';
import { GetNesetedRowListInput } from './dto/getNestedRowListInput';

export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => NoCodeDbOutput, { name: 'getProjects' })
  getProjects() {
    return UsersService.getProjects();
    //
  }
  @Mutation(() => NoCodeDbOutput)
  addProject(@Args('addProjectInput') addProjectInput: AddProjectInput) {
    return UsersService.addProject(addProjectInput);
  }
  @Query(() => NoCodeDbOutput)
  getProject(@Args('projectId', { type: () => String }) projectId: string) {
    return UsersService.getProject(projectId);
  }
  @Query(() => NoCodeDbOutput)
  getTables(@Args('projectId', { type: () => String }) projectId: string) {
    return UsersService.getTables(projectId);
    //
  }
  @Mutation(() => NoCodeDbOutput)
  addTable(@Args('addTableInput') addTableInput: AddTableInput) {
    return UsersService.addTable(addTableInput);
  }
  @Query(() => NoCodeDbOutput)
  getTable(@Args('tableId', { type: () => String }) tableId: string) {
    return UsersService.getTable(tableId);
  }
  @Mutation(() => NoCodeDbOutput)
  addColumn(@Args('addColInput') addColInput: AddColInput) {
    return UsersService.addColumn(addColInput);
  }
  @Query(() => NoCodeDbOutput)
  getViews(@Args('tableId', { type: () => String }) tableId: string) {
    return UsersService.getViews(tableId);
  }
  @Query(() => NoCodeDbOutput)
  getRows(@Args('getRowsInput') getRowsInput: GetRowInput) {
    return UsersService.getRows(getRowsInput);
  }
  @Query(() => NoCodeDbOutput)
  getRowsCount(
    @Args('getViewsCountInput') getViewsCountInput: GetViewsCountInput,
  ) {
    return UsersService.getRowsCount(getViewsCountInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addRow(@Args('addRowinput') addRowinput: AddRowInput) {
    return UsersService.addRow(addRowinput);
  }
  @Mutation(() => NoCodeDbOutput)
  patchRow(@Args('patchRowinput') patchRowinput: PatchRowInput) {
    return UsersService.patchRow(patchRowinput);
  }
  @Query(() => NoCodeDbOutput)
  deleteRow(@Args('deleteRowInput') deleteRowInput: DeleteRowInput) {
    return UsersService.deleteRow(deleteRowInput);
  }
  @Query(() => NoCodeDbOutput)
  getColumns(@Args('viewId', { type: () => String }) viewId: string) {
    return UsersService.getColumns(viewId);
  }
  @Query(() => NoCodeDbOutput)
  deleteColumn(@Args('colId', { type: () => String }) colId: string) {
    return UsersService.deleteCol(colId);
  }
  @Mutation(() => NoCodeDbOutput)
  patchColumn(@Args('patchColInput') patchColInput: PatchColInput) {
    return UsersService.patchCol(patchColInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addView(@Args('addViewInput') addViewInput: AddViewInput) {
    return UsersService.addView(addViewInput);
  }
  @Mutation(() => PermessionOutPut)
  canPrimaryKey(@Args('getRowsInput') getRowsInput: CanPrimaryKeyOutput) {
    return UsersService.canPrimaryKey(getRowsInput);
  }
  @Mutation(() => PermessionOutPut)
  canBeNull(@Args('getRowsInput') getRowsInput: CanPrimaryKeyOutput) {
    return UsersService.canBeNull(getRowsInput);
  }
  @Query(() => NoCodeDbOutput)
  getHooks(@Args('getHookInput') getHookInput: GetHookInput) {
    return UsersService.getHooks(getHookInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addHook(@Args('addHookinput') addHookinput: AddHookInput) {
    return UsersService.addHook(addHookinput);
  }
  @Mutation(() => NoCodeDbOutput)
  deleteHook(@Args('hookId', { type: () => String }) hookId: string) {
    return UsersService.deleteHook(hookId);
  }
  @Mutation(() => NoCodeDbOutput)
  patchHook(@Args('updateHookInput') updateHookInput: UpdateHookInput) {
    return UsersService.updateHook(updateHookInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addSort(@Args('addSortInput') addSortInput: AddSortInput) {
    return UsersService.addSort(addSortInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addFiltre(@Args('addFiltre') addFiltre: AddFiltreInput) {
    return UsersService.addSort(addFiltre);
  }
  @Query(() => NoCodeDbOutput)
  getRow(@Args('getRowInput') getRowInput: GetSoloRowInput) {
    return UsersService.getRow(getRowInput);
  }
  @Query(() => NoCodeDbOutput)
  getRowListInput(@Args('getRowInput') getRowListInput: GetRowListInput) {
    return UsersService.getRowList(getRowListInput);
  }
  @Mutation(() => NoCodeDbOutput)
  addcategorie(
    @Args('addCategorieInput') addCategorieInput: AddCategorieInput,
  ) {
    return UsersService.addcategorie(addCategorieInput);
  }
  @Query(() => NoCodeDbOutput)
  getNesetedRowList(
    @Args('getNesetedRowListInput')
    getNesetedRowListInput: GetNesetedRowListInput,
  ) {
    return UsersService.getNesetedRowList(getNesetedRowListInput);
  }
}
