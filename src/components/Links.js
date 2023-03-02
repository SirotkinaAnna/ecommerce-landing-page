import LinkShow from "./LinkShow";
function Links({ myClass, onClose }) {
    return <div className={myClass}>
        <div className="md:grid md:grid-cols-5  md:gap-6">
            <LinkShow src="#about" onClose={onClose} >About</LinkShow>
            <LinkShow src="#about" onClose={onClose}>Careers</LinkShow>
            <LinkShow src="#products" onClose={onClose} >Events</LinkShow>
            <LinkShow src="#products" onClose={onClose}>Products</LinkShow>
            <LinkShow src="#contacts" onClose={onClose} >Support</LinkShow>

        </div>
    </div>
}
export default Links;