export interface IProject {
  id: string;
  name: string;
  description: string;
  notes: string;
  documents: File[] | undefined;
}

export class Project implements IProject {
  id = "";
  name = "";
  description = "";
  notes = "";
  documents = undefined;

  constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}

export const useProjects = () => {
  const _projects = useState<Project[]>(() => []);
  const projects = computed(() => _projects.value);

  const addProject = (project: Project) => {
    _projects.value.push(project);
  };

  const removeProject = (project: Project) => {
    _projects.value = _projects.value.filter((p) => p !== project);
  };

  const updateProject = (project: Project, updatedProject: Project) => {
    const index = _projects.value.findIndex((p) => p === project);
    _projects.value[index] = updatedProject;
  };

  const findProject = (id: string) => {
    return _projects.value.find((p) => p.id === id);
  };

  return {
    _projects,
    projects,
    addProject,
    removeProject,
    updateProject,
    findProject,
  };
};
