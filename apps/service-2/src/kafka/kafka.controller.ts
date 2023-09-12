import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";
import { Controller } from "@nestjs/common";

@Controller("kafka-controller")
export class KafkaController {
  @EventPattern("new.msg")
  async onNewMsg(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}
}
