import ReactDOM from "react-dom";
import { useEffect } from "react";
import { GoX } from "react-icons/go";
import Links from "./Links";

function Modal({ onClose }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    const myClass = "grid grid-row text-white text-2xl gap-4 uppercase menu ";
    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-black " ></div>
            <div className="fixed inset-0">
                <div className="h-full m-8">
                    <div className='flex text-white justify-between text-3xl pb-6'><h1 className='font-bold '>loopstudios</h1>
                        <button onClick={onClose} className=''><GoX /></button>
                    </div>

                    <div className='grid h-2/3 content-center'>
                        <Links myClass={myClass} onClose={onClose} />
                    </div>

                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')

    )


}
export default Modal;