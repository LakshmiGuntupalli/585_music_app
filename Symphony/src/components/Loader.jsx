import { loader } from '../assets';

{/* title is the prop*/}
const Loader = ({title}) => (
  <div className="w-full flex justify-center items-cneter flex-col">

    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />

    <h1 className="font-bold text-xl text-white mt-2">{title || "Loading ... "}</h1>

  </div>
);

export default Loader;
