export default function SectionsHeaders({subHeader, mainHeader}){
    return(
        <>
        <h3 className="uppercase text-gray-600 font-semibold leading-3">
            {subHeader}
        </h3>
        <h2 className="text-primary font-bold text-4xl italic mt-1"> 
            {mainHeader}
        </h2>        
        </>
    );
}