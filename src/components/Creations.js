import ImageList from "./ImageList";
function OurCreations() {
    return <div className="mx-4 pt-20 md:mx-40 md:pt-20 md:mt-32" id="products" role="article">
        <div className="flex justify-center md:justify-between pb-10">
            <h3 className="text-5xl uppercase">Our creations</h3>
            <button className="hidden md:inline border-2 border-black px-10 text-xl font-bold tracking-widest hover:bg-black hover:text-white">SEE ALL</button>
        </div>
        <div className="">
            <ImageList />
            <div className="md:hidden text-center my-10">
                <button className="border-2 border-black px-12  py-2 text-xl font-bold tracking-widest hover:bg-black hover:text-white">SEE ALL</button>
            </div></div>
    </div>
}
export default OurCreations;