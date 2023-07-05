const KeyRoles = ({ description }) => {
  
  return (
    <div className="justify-center pt-24 flex flex-col">
      <div className="flex justify-center mb-8 text-3xl whitespace-pre-wrap font-semibold">
        My Role
      </div>
      <p className="md:w-2/3 p-8 flex justify-center self-center text-center text-xl whitespace-pre-line leading-relaxed">{description}</p>
    </div>
  )
}

export default KeyRoles;