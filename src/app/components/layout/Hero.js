import Image from "next/image";
import Right from "../icons/Right";


export default function Hero(){
    return(
    <section className="hero mt-4">
        <div className="py-8">
            <h1 className="text-4xl font-semibold "> Everything is better when you have Johny's <span className="text-primary ">Pizza</span></h1>
            <p className="my-6 text-gray-500 text-sm"> Johny's sauce is the secret to a well made pizza. We focus on the minimums to make the maximums worth the wait.</p>    
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase items-center flex gap-2 px-8 py-2 text-white rounded-full ">
                     Order Now 
                     <Right/>
                </button>
                <button className="flex gap-2 py-2 px-4 text-gray-1000 font-semibold">
                     Learn More 
                     <Right/>
                </button>
            </div>
        </div>

        <div className="relative">
            <Image src={'/pizza.png'} alt={"pizza"} layout="fill" objectFit="contain"></Image>
        </div>
    </section>
    );
}