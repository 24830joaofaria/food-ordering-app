import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionsHeaders from "./SectionHeaders";

export default function HomeMenu(){
    return(
        <>
            <section className="">
                <div>
                   <div className="absolute h-full left-0 -right-0 w-full justify-start -z-10">
                     <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
                   </div>
                   <div className="absolute -top[100px] right-0 -z-10">
                     <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
                   </div>
                </div>

                <div className="text-center mb-4">
                    <SectionsHeaders 
                    subHeader = {' Check out'}
                    mainHeader = {' Menu'} />
                    
                </div>
                <div className="grid grid-cols-3 gap-4 ml-2 mr-2">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </section>
        </>

    );
}