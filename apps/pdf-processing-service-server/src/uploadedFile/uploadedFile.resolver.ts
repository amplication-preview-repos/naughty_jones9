import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UploadedFileResolverBase } from "./base/uploadedFile.resolver.base";
import { UploadedFile } from "./base/UploadedFile";
import { UploadedFileService } from "./uploadedFile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UploadedFile)
export class UploadedFileResolver extends UploadedFileResolverBase {
  constructor(
    protected readonly service: UploadedFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
