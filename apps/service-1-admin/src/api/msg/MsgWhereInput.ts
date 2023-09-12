import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MsgWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
