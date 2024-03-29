export interface UserType {
  id: string;
  nombre: string;
  mail: string;
  matricula: string;
  isDeleted: boolean;
  role: RoleType;
  status: "completed" | "pending" | "dueued";
}

export type RoleType = "admin" | "secretaria" | "prospecto";
