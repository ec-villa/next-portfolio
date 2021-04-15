import Layout from '../components/Layout';
import Link from 'next/link';

const ProjectLink = ({title, slug}) => (
    <li>
        <Link as={`/${slug}`} href={`/project?title=${title}`}><a>{title}</a></Link>
    </li>
);

const Projects = () => (
    <Layout title='Projects'>
       <ul>
           <ProjectLink slug='react-project' title='React'/>  
           <ProjectLink slug='angular-project' title='Angular'/> 
           <ProjectLink slug='svelte-project' title='Svelte'/> 
           <ProjectLink slug='next-project' title='Next'/>
           <ProjectLink slug='vue-project' title='Vue'/> 
       </ul>
    </Layout>
);

export default Projects;