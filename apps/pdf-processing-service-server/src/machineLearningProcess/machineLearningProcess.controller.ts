import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MachineLearningProcessService } from "./machineLearningProcess.service";
import { MachineLearningProcessControllerBase } from "./base/machineLearningProcess.controller.base";

@swagger.ApiTags("machineLearningProcesses")
@common.Controller("machineLearningProcesses")
export class MachineLearningProcessController extends MachineLearningProcessControllerBase {
  constructor(
    protected readonly service: MachineLearningProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
