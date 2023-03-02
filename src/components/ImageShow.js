function ImageShow({ source, label }) {
    return <div className="relative" key={source}>
        <div className=""><img src={source} alt="" className="w-full myImg" /></div>
        <div className="myDiv cursor-pointer absolute inset-0 z-10  h-full  hover:bg-white/50 text-white">

        </div>
        <div className="w-1/2 md:w-2/3 myText cursor-pointer absolute bottom-0 text-3xl m-7 text-white z-20 hover:text-black">{label}</div>

    </div>
}
export default ImageShow;