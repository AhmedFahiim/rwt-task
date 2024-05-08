import { signOut } from "next-auth/react";

export const onLogout = () => {
  signOut();
};
