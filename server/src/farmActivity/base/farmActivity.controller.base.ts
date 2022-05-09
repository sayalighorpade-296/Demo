/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FarmActivityService } from "../farmActivity.service";
import { FarmActivityCreateInput } from "./FarmActivityCreateInput";
import { FarmActivityWhereInput } from "./FarmActivityWhereInput";
import { FarmActivityWhereUniqueInput } from "./FarmActivityWhereUniqueInput";
import { FarmActivityFindManyArgs } from "./FarmActivityFindManyArgs";
import { FarmActivityUpdateInput } from "./FarmActivityUpdateInput";
import { FarmActivity } from "./FarmActivity";
@swagger.ApiBearerAuth()
export class FarmActivityControllerBase {
  constructor(
    protected readonly service: FarmActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FarmActivity })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FarmActivityCreateInput
  ): Promise<FarmActivity> {
    return await this.service.create({
      data: {
        ...data,

        farm: data.farm
          ? {
              connect: data.farm,
            }
          : undefined,
      },
      select: {
        activityDate: true,
        createdAt: true,
        description: true,

        farm: {
          select: {
            id: true,
          },
        },

        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FarmActivity] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FarmActivityFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<FarmActivity[]> {
    const args = plainToClass(FarmActivityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        activityDate: true,
        createdAt: true,
        description: true,

        farm: {
          select: {
            id: true,
          },
        },

        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FarmActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FarmActivityWhereUniqueInput
  ): Promise<FarmActivity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        activityDate: true,
        createdAt: true,
        description: true,

        farm: {
          select: {
            id: true,
          },
        },

        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FarmActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FarmActivityWhereUniqueInput,
    @common.Body() data: FarmActivityUpdateInput
  ): Promise<FarmActivity | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          farm: data.farm
            ? {
                connect: data.farm,
              }
            : undefined,
        },
        select: {
          activityDate: true,
          createdAt: true,
          description: true,

          farm: {
            select: {
              id: true,
            },
          },

          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FarmActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FarmActivityWhereUniqueInput
  ): Promise<FarmActivity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          activityDate: true,
          createdAt: true,
          description: true,

          farm: {
            select: {
              id: true,
            },
          },

          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
