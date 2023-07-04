import SkillsCard from "./SkillsCard";

const SkillsSection = ({ skills }) => {
  if (!skills) {
    return null;
  }
  
  return (
    <div className="justify-center pt-24 pb-16 flex flex-col">
      <p className="flex justify-center mb-16 text-3xl whitespace-pre-wrap font-semibold">Skills demonstrated</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:px-48">
        {skills.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection;