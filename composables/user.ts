class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export const loggedUser = () => {
  const user = useState<User>("user", () => ({
    name: "",
    email: "",
  }));

  const userComputed = computed(() => user.value);

  return userComputed;
};
