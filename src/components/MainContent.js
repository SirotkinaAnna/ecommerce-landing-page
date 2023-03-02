import mainImage from '../images/desktop/image-interactive.jpg'
function MainContent() {
    return <div role="document" className='pt-20 mx-4 md:mx-40 md:pt-40  md:relative' id="about">
        <div className=''>
            <img src={mainImage} alt="" />
        </div>
        <div className='text-center md:text-start pt-10 md:absolute bottom-0 right-0 md:w-1/2 bg-white md:pl-20 md:pt-20'>
            <h2 className='text-4xl md:text-5xl uppercase pb-10'>The leader in interactive VR</h2>
            <p className='font-semibold text-gray-500 text-lg'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
    </div>
}
export default MainContent;