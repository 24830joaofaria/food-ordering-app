export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-300 hover:scale-125 hover:shadow-black/25 transition-all " >
        
        <div className="text-center">
            <img src="/pizza.png" className="h-auto w-auto max-h-24 block mx-auto" alt="pizza"></img>
        </div>

        {/* <img src="/pizza.png" alt="Pizza" /> */}
        <h4 className="font-semibold my-3 text-sm"> Pepperoni pizza</h4>
        <p className="text-gray-500 text-sm"> lorem ipsum merda merda ipsum lorem</p>
        <button className="bg-primary text-white rounded-full px-8 py-2 mt-3"> Add to cart $12</button>
    </div>

    );
}