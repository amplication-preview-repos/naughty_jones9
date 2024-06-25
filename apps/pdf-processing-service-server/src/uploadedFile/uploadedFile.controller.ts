import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UploadedFileService } from "./uploadedFile.service";
import { UploadedFileControllerBase } from "./base/uploadedFile.controller.base";

@swagger.ApiTags("uploadedFiles")
@common.Controller("uploadedFiles")
export class UploadedFileController extends UploadedFileControllerBase {
  constructor(
    protected readonly service: UploadedFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
