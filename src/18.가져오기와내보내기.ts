import { getFullName, User } from "./user";

const heropy: User = {
  firstName: "helopy",
  lastName: "park",
  age: 85,
  isValid: true,
};

const fullName = getFullName(heropy);
