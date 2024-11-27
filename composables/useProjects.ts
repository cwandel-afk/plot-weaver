import { projectsTable } from "~/server/database/schema";

export interface IProject {
  id: string;
  name: string;
  description: string;
  notes: string | null;
  documents: File[] | null;
}

export class Project implements IProject {
  id = "";
  name = "";
  description = "";
  notes: string | null = null;
  documents: File[] | null = null;

  constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}

export const useProjects = () => {
  const _projects = useState<Project[]>(() => []);
  const projects = computed(() => _projects.value);

  const db = useNeonDatabase();

  const addProject = async (project: Project) => {
    const insertedProject = await db
      .insert(projectsTable)
      .values({
        ...project,
        documents: project.documents ? JSON.stringify(project.documents) : null,
      })
      .returning()
      .then(() => {
        _projects.value.push(project);
      })
      .catch((err) => {
        console.error(`[ useProjects ] Error adding project: ${err}`);
      });
    return insertedProject;
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

  const getProjects = async () => {
    const allProjects = await db
      .select()
      .from(projectsTable)
      .then((rows) =>
        rows.map(
          (row) =>
            new Project({
              ...row,
              documents: row.documents ? JSON.parse(row.documents) : null,
            })
        )
      );
    return allProjects;
  };

  return {
    _projects,
    projects,
    addProject,
    getProjects,
    removeProject,
    updateProject,
    findProject,
  };
};
