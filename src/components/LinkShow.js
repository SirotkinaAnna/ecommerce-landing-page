function LinkShow({ src, children, onClose }) {
    const myLink = 'mt-2 w-6 border-b-2 border-white  mx-auto onhover'


    return <div className="md:text-center md:items-center pb-4">
        <a href={src} className='mx-auto myLink' onClick={onClose}>{children}</a>
        {!onClose && <div className={myLink}></div>}
    </div>
}
export default LinkShow;