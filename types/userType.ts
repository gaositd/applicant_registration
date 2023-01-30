export interface UserType {
  id: string;
  nombre: string;
  mail: string;
  matricula: string;
  isDeleted: boolean;
  role: RoleType;
}

export type RoleType = "admin" | "secretaria" | "prospecto";
