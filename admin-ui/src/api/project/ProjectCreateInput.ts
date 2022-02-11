import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  name: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};
