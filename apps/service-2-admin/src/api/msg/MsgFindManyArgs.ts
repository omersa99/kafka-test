import { MsgWhereInput } from "./MsgWhereInput";
import { MsgOrderByInput } from "./MsgOrderByInput";

export type MsgFindManyArgs = {
  where?: MsgWhereInput;
  orderBy?: Array<MsgOrderByInput>;
  skip?: number;
  take?: number;
};
