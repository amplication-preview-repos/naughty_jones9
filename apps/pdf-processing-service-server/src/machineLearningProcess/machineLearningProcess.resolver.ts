import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MachineLearningProcessResolverBase } from "./base/machineLearningProcess.resolver.base";
import { MachineLearningProcess } from "./base/MachineLearningProcess";
import { MachineLearningProcessService } from "./machineLearningProcess.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MachineLearningProcess)
export class MachineLearningProcessResolver extends MachineLearningProcessResolverBase {
  constructor(
    protected readonly service: MachineLearningProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
