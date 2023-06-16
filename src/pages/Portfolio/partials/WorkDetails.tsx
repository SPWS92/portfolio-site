const WorkDetails = ({ role }) => (
  <div className="flex flex-col space-y-1 justify-between py-5 space-y-3">
    <div>
      <p className='font-bold text-lg'>{role.product}</p>
      <p className='font-semibold'>{role.company}</p>
    </div>
    <p>{role.description}</p>
    <p>Technologies used: <span className='font-semibold italic'>{role.skills.join(', ')}</span></p>
  </div>
);

export default WorkDetails;