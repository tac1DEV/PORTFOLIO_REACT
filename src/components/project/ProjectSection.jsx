import { SectionWrapper } from '../atom/SectionWrapper';
import { Project } from './Project';
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader/Loader';
import { useFetch } from '../../hooks/useFetch';


export const ProjectSection = () => {
  const {status, data: projects, error} = useFetch(getListOfUrlRepositoriesUrl("tacosougrecDEV"));
  if(status === "pending" || status === "idle"){
    return <Loader/>
  }

  if(error){
    return <p>Error !</p>
  }

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {projects?.map(repository =>{
          return <Project key={repository.name} {...repository}/>
        })}
      </div>
    </SectionWrapper>
  );
};
