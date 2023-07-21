export interface SkillProps {
  name: string;
  image: string;
  link: string;
}
const SkillsCard = ({ skill }: { skill: SkillProps}) => {

  return (
    <div className="flex flex-col items-center">
      <img className="w-12 h-12 object-cover rounded-full" src={skill.image} />
      <p className="font-bold">{skill.name}</p>
    </div>
  )};

export default SkillsCard;