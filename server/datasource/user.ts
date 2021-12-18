import { DataSource } from 'apollo-datasource';
import { DataSourceConfig, User } from '../types';

class UserAPI extends DataSource {
  store: any;
  context: any;

  constructor({ store }: { store: any }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig) {
    this.context = config.context;
  }

  getUsers = async () => {
    const result = await this.store.user.findMany({
      include: { projects: { include: { project: true } } }
    });
    return result.map((user: User) => {
      return { ...user, projects: user.projects.map((assignment) => assignment.project) };
    });
  };
  findOrCreateUser = async ({ email }: { email: string }) => {
    const user = await this.store.user.findUnique({
      where: {
        email: email
      }
    });
    if (user) {
      return user;
    }
    return await this.store.user.create({
      data: {
        email: email
      }
    });
  };
}

export default UserAPI;
