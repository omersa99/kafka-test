import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MsgModuleBase } from "./base/msg.module.base";
import { MsgService } from "./msg.service";
import { MsgController } from "./msg.controller";
import { MsgResolver } from "./msg.resolver";

@Module({
  imports: [MsgModuleBase, forwardRef(() => AuthModule)],
  controllers: [MsgController],
  providers: [MsgService, MsgResolver],
  exports: [MsgService],
})
export class MsgModule {}
