import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};
