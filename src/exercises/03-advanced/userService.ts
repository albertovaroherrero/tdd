
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
}

export class UserService {
  constructor(private repository: UserRepository) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}