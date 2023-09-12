import { Msg as TMsg } from "../api/msg/Msg";

export const MSG_TITLE_FIELD = "text";

export const MsgTitle = (record: TMsg): string => {
  return record.text || String(record.id);
};
