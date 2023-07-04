const SkillsCard = ({ skill }) => {
  return (
    // <a href={skill.link}>
    //   <div className="flex flex-row items-center border-0 rounded-2xl shadow-xl w-60 h-20 bg-white hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    //     <div className="rounded-2xl overflow-hidden">
    //       <img className="w-20 h-20 object-cover" src={skill.image} />
    //     </div>
    //     <div className="pl-2">
    //       <p className="font-semibold">{skill.name}</p>
    //     </div>
    //   </div>
    // </a>
    <a href={skill.link}>
      <div className="flex flex-row items-center border-0 rounded-full shadow-xl w-60 h-12 bg-white hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="rounded-full overflow-hidden">
          <img className="w-12 h-12 object-cover" src={skill.image} />
        </div>
        <div className="pl-2">
          <p className="font-semibold">{skill.name}</p>
        </div>
      </div>
    </a>
  )
}

export default SkillsCard;