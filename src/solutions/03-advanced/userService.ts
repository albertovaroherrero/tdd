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

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const newUser = await this.repository.save({ ...user, id: Date.now() });
    return newUser;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const existingUser = await this.repository.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }

    const updatedUser = await this.repository.save({
      ...existingUser,
      ...updates,
      id
    });
    return updatedUser;
  }

  async deleteUser(id: number): Promise<void> {
    const existingUser = await this.repository.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }

    await this.repository.delete(id);
  }
}
