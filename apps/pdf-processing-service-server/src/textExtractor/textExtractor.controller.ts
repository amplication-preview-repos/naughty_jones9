import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TextExtractorService } from "./textExtractor.service";
import { TextExtractorControllerBase } from "./base/textExtractor.controller.base";

@swagger.ApiTags("textExtractors")
@common.Controller("textExtractors")
export class TextExtractorController extends TextExtractorControllerBase {
  constructor(
    protected readonly service: TextExtractorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
