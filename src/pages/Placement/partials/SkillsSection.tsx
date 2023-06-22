import SkillsCard from "./SkillsCard";

const SkillsSection = ({ skills }) => {
  if (!skills) {
    return null;
  }
  
  return (
    <div className="min-h-96 justify-center py-8">
      {/* <p>Technologies & Skills used</p> */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:px-48">
        {skills.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection;