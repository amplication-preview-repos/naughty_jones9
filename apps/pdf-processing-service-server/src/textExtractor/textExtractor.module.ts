import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TextExtractorModuleBase } from "./base/textExtractor.module.base";
import { TextExtractorService } from "./textExtractor.service";
import { TextExtractorController } from "./textExtractor.controller";
import { TextExtractorResolver } from "./textExtractor.resolver";

@Module({
  imports: [TextExtractorModuleBase, forwardRef(() => AuthModule)],
  controllers: [TextExtractorController],
  providers: [TextExtractorService, TextExtractorResolver],
  exports: [TextExtractorService],
})
export class TextExtractorModule {}
