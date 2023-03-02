import ImageShow from "./ImageShow";
import firstImg from '../images/desktop/image-deep-earth.jpg'
import secondImg from '../images/desktop/image-night-arcade.jpg'
import thirdImg from '../images/desktop/image-soccer-team.jpg'
import fourthImg from '../images/desktop/image-grid.jpg'
import fifthImg from '../images/desktop/image-from-above.jpg'
import sixthImg from '../images/desktop/image-pocket-borealis.jpg'
import seventhImg from '../images/desktop/image-curiosity.jpg'
import eithImg from '../images/desktop/image-fisheye.jpg'
import firstImgMobile from '../images/mobile/image-deep-earth.jpg'
import secondImgMobile from '../images/mobile/image-night-arcade.jpg'
import thirdImgMobile from '../images/mobile/image-soccer-team.jpg'
import fourthImgMobile from '../images/mobile/image-grid.jpg'
import fifthImgMobile from '../images/mobile/image-from-above.jpg'
import sixthImgMobile from '../images/mobile/image-pocket-borealis.jpg'
import seventhImgMobile from '../images/mobile/image-curiosity.jpg'
import eithImgMobile from '../images/mobile/image-fisheye.jpg'
function ImageList() {

    const imgLst = [{
        name: firstImg,
        label: 'DEEP EARTH',
        mb: firstImgMobile
    },
    {
        name: secondImg,
        label: "NIGHT ARCADE",
        mb: secondImgMobile
    },
    {
        name: thirdImg,
        label: 'SOCCER TEAM VR',
        mb: thirdImgMobile
    },
    {
        name: fourthImg,
        label: 'THE GRID',
        mb: fourthImgMobile
    },
    {
        name: fifthImg,
        label: 'FROM UP ABOVE VR',
        mb: fifthImgMobile
    },
    {
        name: sixthImg,
        label: 'POCKET BOREALIS',
        mb: sixthImgMobile
    },
    {
        name: seventhImg,
        label: 'THE CURIOSITY',
        mb: seventhImgMobile
    },
    {
        name: eithImg,
        label: 'MAKE IT FISHEYE',
        mb: eithImgMobile
    }
    ]
    const renderedImg = imgLst.map((img) => {
        return <ImageShow source={img.name} label={img.label} />
    })
    const renderedImgSmall = imgLst.map((img) => {
        return <ImageShow source={img.mb} label={img.label} />
    })
    return <div><div className="hidden md:grid md:grid-col md:grid-cols-4 gap-6 md:mt-20">
        {renderedImg}
    </div>
        <div className="flex flex-col md:hidden gap-6">{renderedImgSmall}</div>
    </div>
}
export default ImageList;