import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MachineLearningProcessServiceBase } from "./base/machineLearningProcess.service.base";

@Injectable()
export class MachineLearningProcessService extends MachineLearningProcessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
