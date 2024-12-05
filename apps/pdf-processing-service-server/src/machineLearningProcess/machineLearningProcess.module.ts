import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MachineLearningProcessModuleBase } from "./base/machineLearningProcess.module.base";
import { MachineLearningProcessService } from "./machineLearningProcess.service";
import { MachineLearningProcessController } from "./machineLearningProcess.controller";
import { MachineLearningProcessResolver } from "./machineLearningProcess.resolver";

@Module({
  imports: [MachineLearningProcessModuleBase, forwardRef(() => AuthModule)],
  controllers: [MachineLearningProcessController],
  providers: [MachineLearningProcessService, MachineLearningProcessResolver],
  exports: [MachineLearningProcessService],
})
export class MachineLearningProcessModule {}
