import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TextExtractorResolverBase } from "./base/textExtractor.resolver.base";
import { TextExtractor } from "./base/TextExtractor";
import { TextExtractorService } from "./textExtractor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TextExtractor)
export class TextExtractorResolver extends TextExtractorResolverBase {
  constructor(
    protected readonly service: TextExtractorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
