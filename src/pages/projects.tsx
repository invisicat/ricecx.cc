import Layout from '@/components/layout/Layout';
import { Project, UserProjects } from '@/lib/projects';
import { THREE_MONTHS } from '@/utils/HumanReadable';

const ProjectPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl p-3">💭 Projects</h1>
      <div className="grid grid-flow-row space-y-4">
        {UserProjects.map(c => (
          <Projects key={c.name} {...c} />
        ))}
      </div>
    </Layout>
  );
};

const Projects: React.FC<Project> = props => {
  const {
    name,
    type,
    times: { started, lastUpdated },
    description,
    link
  } = props;
  const startedAt = `${started.toLocaleString('default', {
    month: 'long'
  })} ${started.getFullYear()}`;

  // if not updated in 3 months, consider it deceased
  let updatedAt;
  if (lastUpdated) {
    const updateDiff = new Date().getTime() - lastUpdated.getTime();

    if (updateDiff > THREE_MONTHS) {
      updatedAt = `${lastUpdated.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
      })}`;
    } else {
      updatedAt = 'Present';
    }
  } else {
    updatedAt = 'Never';
  }
  return (
    <div className="border-2 rounded-md flex flex-row justify-start">
      <div className="flex flex-col border-r-2 p-4 flex-nowrap">
        <h1 className="text-4xl whitespace-nowrap">{name}</h1>
        <h1 className="text-xl whitespace-nowrap">{type}</h1>
        <h1 className="whitespace-nowrap">
          {startedAt} - {updatedAt}
        </h1>
      </div>
      <h1 className="place-self-center p-3 flex-grow-0 text-xl">
        {description}
      </h1>
    </div>
  );
};

export default ProjectPage;
