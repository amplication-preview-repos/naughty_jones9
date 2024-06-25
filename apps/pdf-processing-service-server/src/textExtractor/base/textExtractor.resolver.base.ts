/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TextExtractor } from "./TextExtractor";
import { TextExtractorCountArgs } from "./TextExtractorCountArgs";
import { TextExtractorFindManyArgs } from "./TextExtractorFindManyArgs";
import { TextExtractorFindUniqueArgs } from "./TextExtractorFindUniqueArgs";
import { CreateTextExtractorArgs } from "./CreateTextExtractorArgs";
import { UpdateTextExtractorArgs } from "./UpdateTextExtractorArgs";
import { DeleteTextExtractorArgs } from "./DeleteTextExtractorArgs";
import { MachineLearningProcessFindManyArgs } from "../../machineLearningProcess/base/MachineLearningProcessFindManyArgs";
import { MachineLearningProcess } from "../../machineLearningProcess/base/MachineLearningProcess";
import { PdfFile } from "../../pdfFile/base/PdfFile";
import { TextExtractorService } from "../textExtractor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TextExtractor)
export class TextExtractorResolverBase {
  constructor(
    protected readonly service: TextExtractorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "read",
    possession: "any",
  })
  async _textExtractorsMeta(
    @graphql.Args() args: TextExtractorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TextExtractor])
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "read",
    possession: "any",
  })
  async textExtractors(
    @graphql.Args() args: TextExtractorFindManyArgs
  ): Promise<TextExtractor[]> {
    return this.service.textExtractors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TextExtractor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "read",
    possession: "own",
  })
  async textExtractor(
    @graphql.Args() args: TextExtractorFindUniqueArgs
  ): Promise<TextExtractor | null> {
    const result = await this.service.textExtractor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TextExtractor)
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "create",
    possession: "any",
  })
  async createTextExtractor(
    @graphql.Args() args: CreateTextExtractorArgs
  ): Promise<TextExtractor> {
    return await this.service.createTextExtractor({
      ...args,
      data: {
        ...args.data,

        pdfFile: args.data.pdfFile
          ? {
              connect: args.data.pdfFile,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TextExtractor)
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "update",
    possession: "any",
  })
  async updateTextExtractor(
    @graphql.Args() args: UpdateTextExtractorArgs
  ): Promise<TextExtractor | null> {
    try {
      return await this.service.updateTextExtractor({
        ...args,
        data: {
          ...args.data,

          pdfFile: args.data.pdfFile
            ? {
                connect: args.data.pdfFile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TextExtractor)
  @nestAccessControl.UseRoles({
    resource: "TextExtractor",
    action: "delete",
    possession: "any",
  })
  async deleteTextExtractor(
    @graphql.Args() args: DeleteTextExtractorArgs
  ): Promise<TextExtractor | null> {
    try {
      return await this.service.deleteTextExtractor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MachineLearningProcess], {
    name: "machineLearningProcesses",
  })
  @nestAccessControl.UseRoles({
    resource: "MachineLearningProcess",
    action: "read",
    possession: "any",
  })
  async findMachineLearningProcesses(
    @graphql.Parent() parent: TextExtractor,
    @graphql.Args() args: MachineLearningProcessFindManyArgs
  ): Promise<MachineLearningProcess[]> {
    const results = await this.service.findMachineLearningProcesses(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PdfFile, {
    nullable: true,
    name: "pdfFile",
  })
  @nestAccessControl.UseRoles({
    resource: "PdfFile",
    action: "read",
    possession: "any",
  })
  async getPdfFile(
    @graphql.Parent() parent: TextExtractor
  ): Promise<PdfFile | null> {
    const result = await this.service.getPdfFile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}