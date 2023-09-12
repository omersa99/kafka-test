import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MsgServiceBase } from "./base/msg.service.base";

@Injectable()
export class MsgService extends MsgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
