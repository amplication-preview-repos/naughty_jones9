import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PdfFileResolverBase } from "./base/pdfFile.resolver.base";
import { PdfFile } from "./base/PdfFile";
import { PdfFileService } from "./pdfFile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PdfFile)
export class PdfFileResolver extends PdfFileResolverBase {
  constructor(
    protected readonly service: PdfFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
