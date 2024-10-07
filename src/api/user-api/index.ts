import UserApiImp from "./UserApiImp";

export const UserApiInstanse = new UserApiImp();
export type { User, UserDTO, MessageResponse } from "./core/types";
