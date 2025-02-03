import { UserService, User, UserRepository } from './userService';

describe('UserService', () => {
  let userService: UserService;
  let mockRepository: jest.Mocked<UserRepository>;

  const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };

  beforeEach(() => {
    mockRepository = {
      findById: jest.fn(),
      save: jest.fn(),
      delete: jest.fn()
    };
    userService = new UserService(mockRepository);
  });

  describe('getUserById', () => {
    it('should return user when found', async () => {
      mockRepository.findById.mockResolvedValue(mockUser);
      const user = await userService.getUserById(1);
      expect(user).toEqual(mockUser);
      expect(mockRepository.findById).toHaveBeenCalledWith(1);
    });

    it('should throw error when user not found', async () => {
      mockRepository.findById.mockResolvedValue(null);
      await expect(userService.getUserById(1)).rejects.toThrow('User not found');
    });
  });

  describe('createUser', () => {
    it('should create new user successfully', async () => {
      const newUser = { name: 'Jane Doe', email: 'jane@example.com' };
      mockRepository.save.mockResolvedValue({ ...newUser, id: 2 });

      const createdUser = await userService.createUser(newUser);
      expect(createdUser).toHaveProperty('id', 2);
      expect(mockRepository.save).toHaveBeenCalledWith(expect.objectContaining(newUser));
    });
  });

  describe('updateUser', () => {
    it('should update existing user', async () => {
      const updates = { name: 'John Updated' };
      mockRepository.findById.mockResolvedValue(mockUser);
      mockRepository.save.mockResolvedValue({ ...mockUser, ...updates });

      const updatedUser = await userService.updateUser(1, updates);
      expect(updatedUser.name).toBe('John Updated');
      expect(mockRepository.save).toHaveBeenCalledWith(expect.objectContaining(updates));
    });

    it('should throw error when updating non-existent user', async () => {
      mockRepository.findById.mockResolvedValue(null);
      await expect(userService.updateUser(1, { name: 'Test' })).rejects.toThrow('User not found');
    });
  });

  describe('deleteUser', () => {
    it('should delete existing user', async () => {
      mockRepository.findById.mockResolvedValue(mockUser);
      mockRepository.delete.mockResolvedValue(true);

      await userService.deleteUser(1);
      expect(mockRepository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw error when deleting non-existent user', async () => {
      mockRepository.findById.mockResolvedValue(null);
      await expect(userService.deleteUser(1)).rejects.toThrow('User not found');
    });
  });
});
