import { DataSource } from 'apollo-datasource';
import { DataSourceConfig, Project } from '../types';

class ProjectAPI extends DataSource {
  store: any;
  context: any;

  constructor({ store }: { store: any }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig) {
    this.context = config.context;
  }

  getProjects = async () => {
    const result = await this.store.project.findMany({
      include: { members: { include: { user: true } } }
    });
    return result.map((project: Project) => {
      return { ...project, projects: project.members.map((assignment) => assignment.project) };
    });
  };
}

export default ProjectAPI;
