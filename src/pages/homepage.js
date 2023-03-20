import twitterIconImage from '../images/all-assets/twitter.svg'
import facebookIconImage from '../images/all-assets/facebook.svg'
import instagramIconImage from '../images/all-assets/instagram.svg'
import tikTokIconImage from '../images/all-assets/tik-tok.svg'
import promoVideo from '../images/all-assets/promo-video.mp4'
import locationImage from '../images/all-assets/location.png'
import arrowImage from '../images/all-assets/arrow.svg'

const createHomepage = function() {
    //Homepage body
    
    const homepageBody = document.createElement('div')
    homepageBody.id = 'homepage-body'
    homepage.appendChild(homepageBody)

    const socialMedia = document.createElement('div')
    socialMedia.id = 'socialmedia'
    homepageBody.appendChild(socialMedia)

    const twitterIcon = document.createElement('img')
    twitterIcon.id = 'twitter-icon'
    twitterIcon.src = twitterIconImage
    socialMedia.appendChild(twitterIcon)

    const facebookIcon = document.createElement('img')
    facebookIcon.id = 'facebook-icon'
    facebookIcon.src = facebookIconImage
    socialMedia.appendChild(facebookIcon)

    const instagramIcon = document.createElement('img')
    instagramIcon.id = 'instagram-icon'
    instagramIcon.src = instagramIconImage
    socialMedia.appendChild(instagramIcon)

    const tikTokIcon = document.createElement('img')
    tikTokIcon.id = 'tiktok-icon'
    tikTokIcon.src = tikTokIconImage
    socialMedia.appendChild(tikTokIcon)

    const logoContainer = document.createElement('div')
    logoContainer.id = 'logo-container'
    homepageBody.appendChild(logoContainer)

    const introContainer = document.createElement('div')
    introContainer.id = 'intro-container'
    homepageBody.appendChild(introContainer)

    const h1 = document.createElement('h1')
    h1.innerText ='Welcome to our brand new burger restaurant!'
    introContainer.appendChild(h1)

    const intro = document.createElement('p')
    intro.id = 'intro'
    intro.innerText = 'We are thrilled to have you here and can\'t wait to serve you some of the best burgers in town. Our menu is packed with delicious options, from classic burgers and loaded fries to vegetarian and gluten-free options. We take pride in using only the freshest ingredients in our dishes, so you can enjoy a truly mouth-watering experience. Come on in and make yourself at home - we\'re excited to have you join our burger-loving community!'
    introContainer.appendChild(intro)

    const arrow = document.createElement('img')
    arrow.id = 'arrow'
    arrow.src = arrowImage
    introContainer.appendChild(arrow)

    const discountContainer = document.createElement('div')
    discountContainer.id = 'discount-container'
    introContainer.appendChild(discountContainer) 

    const limited = document.createElement('p')
    limited.id = 'limited'
    limited.innerText = '🔥Limited time offer!🔥'
    discountContainer.appendChild(limited)

    const code = document.createElement('p')
    code.id = 'code'
    code.innerText = '#JUSTOPENED70'
    discountContainer.appendChild(code)

    const discountInfo = document.createElement('p')
    discountInfo .id = 'discount-info'
    discountInfo.innerText = 'Add this code to your shopping-cart before your first purchase for 70% discount on every burger.🤤'
    discountContainer.appendChild(discountInfo)

    const videoContainer = document.createElement('div')
    videoContainer.id = 'video-container'
    homepageBody.appendChild(videoContainer)

    const video = document.createElement('video')
    video.id = 'video'
    video.volume = 0.1
    video.src = promoVideo
    video.setAttribute('controls', 'controls')
    video.setAttribute('muted', 'muted')
    video.setAttribute('loop', 'loop')
    video.setAttribute('autoplay', 'autoplay')
    videoContainer.appendChild(video)

    const location = document.createElement('img')
    location.id = 'location'
    location.src = locationImage
    videoContainer.appendChild(location)
}

export default createHomepage

