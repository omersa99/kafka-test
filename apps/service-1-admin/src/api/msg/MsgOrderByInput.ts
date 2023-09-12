import { SortOrder } from "../../util/SortOrder";

export type MsgOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
