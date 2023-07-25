import { SkillProps } from './SkillsCard';

interface RoleProps {
  description: string;
  skills: SkillProps[];
}

const Role = ({ description, skills }: RoleProps) => (
  <div className='justify-center px-8 py-16 flex flex-col-reverse md:flex-row bg-gradient-to-r from-indigo-500 to-indigo-800 xl:px-96 font-medium text-white/70 md:divide-x-2'>
    <div className='h-fit w-fit p-6 bg-white bg-opacity-20 rounded-lg border-2 border-gray-400 whitespace-nowrap mx-8 md:mx-0 shadow-2xl mt-12 md:mt-0 md:mr-8'>
      <p className='text-lg font-extrabold'>Skills demonstrated</p>
      <ul>
        {skills.map(({ name }) => <li className='pl-4'>- {name}</li>)}
      </ul>
    </div>
    <div className='px-8 flex flex-col w-fit'>
      <div className='flex mb-8 text-3xl whitespace-pre-wrap font-semibold'>
        My Role
      </div>
      <p className='flex self-center text-xl whitespace-pre-line leading-relaxed'>{description}</p>
    </div>
  </div>
);

export default Role;