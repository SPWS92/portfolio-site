interface RoleProps {
  description: string;
}

const Role = ({ description }: RoleProps) => (
  <div className="justify-center py-8 flex flex-col">
    <div className="flex justify-center mb-8 text-3xl whitespace-pre-wrap font-semibold">
        My Role
    </div>
    <p className="md:w-2/3 px-8 flex justify-center self-center text-center text-xl whitespace-pre-line leading-relaxed">{description}</p>
  </div>
);

export default Role;