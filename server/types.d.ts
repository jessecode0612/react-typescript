import UserAPI from './datasource/user';
import ProjectAPI from './datasource/project';
import LaunchAPI from './datasource/launch';

export interface DataSourceConfig<TContext = any> {
  context: TContext;
  cache: KeyValueCache;
}

export interface DataSources<TContext> {
  [name: string]: DataSource<TContext>;
}

export interface dataSources {
  userAPI: UserAPI;
  projectAPI: ProjectAPI;
  launchAPI: LaunchAPI;
}

export interface ProjectAssignment {
  projectId: number;
  userId: string;
  user: User;
  project: Project;
}

export interface User {
  id: string;
  name: string;
  email: string;
  projects: ProjectAssignment[];
}

export interface Project {
  id: number;
  name: string;
  status: string;
  members: ProjectAssignment[];
}

interface LaunchType {
  flight_number: string | number;
  launch_date_unix: string | number;
  launch_site?: {
    site_name: string;
  };
  mission_name: string;
  links: {
    mission_patch_small: string;
    mission_patch: string;
  };
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
}
