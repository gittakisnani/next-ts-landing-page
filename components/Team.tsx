import Image from "next/image"
import { CardProps } from "../types/types"
import { BsFacebook, BsTwitter, BsGithub } from './Icons'
import { Fade } from 'react-awesome-reveal'
const Team = ({person} : {person: CardProps}) => {
  const { name, job, desc, img} = person
  return (
    <div className="flex flex-col group">
      <Fade direction="up" triggerOnce>
      <div className="flex-grow overflow-hidden relative">
        <div className="bg-primary p-3 md:p-4 flex justify-center items-center gap-2 absolute right-0 left-0 bottom-[-150px] group-hover:bottom-0 text-white z-[1000] duration-200 ease-out">
          <span title="Facebook"><BsFacebook /></span>
          <span title="Twitter"><BsTwitter /></span>
          <span title="Github"><BsGithub /></span>
        </div>
        <div className="team__person">
        <Image src={img} alt={name}/>
        </div>
      </div>
      <div className="bg-white p-2 md:p-4">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="text-primary my-2 font-semibold">{job}</p>
        <p className="text-slate-400 font-light leading-6">{desc}</p>
      </div>
      </Fade>
    </div>
  )
}

export default Team