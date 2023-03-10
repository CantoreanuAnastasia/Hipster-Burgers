import searchImage from '../images/all-assets/search.svg'
import userImage from '../images/all-assets/user.svg'
import shoppingCartImage from '../images/all-assets/shopping-cart.svg'
import twitterIconImage from '../images/all-assets/twitter.svg'
import facebookIconImage from '../images/all-assets/facebook.svg'
import instagramIconImage from '../images/all-assets/instagram.svg'
import tikTokIconImage from '../images/all-assets/tik-tok.svg'
import promoVideo from '../images/all-assets/promo-video.mp4'

const homepage = function() {
    const content = document.querySelector('#content')

    const homepage = document.createElement('div')
    homepage.id = 'homepage'
    content.appendChild(homepage)

    const navbar = document.createElement('div')
    navbar.id = 'navbar'
    homepage.appendChild(navbar)

// Navigation left side
    const navLeftSide = document.createElement('div')
    navLeftSide.id = 'nav-leftside'
    navbar.appendChild(navLeftSide)

    const logo = document.createElement('p')
    logo.id = 'logo'
    logo.innerText = 'Street 96\' Burgers'
    navLeftSide.appendChild(logo)

    const home = document.createElement('p')
    home.id = 'home'
    home.innerText = 'Home'
    navLeftSide.appendChild(home)

    const menu = document.createElement('p')
    menu.id = 'menu'
    menu.innerText = 'Menu'
    navLeftSide.appendChild(menu)

    const ourStory = document.createElement('p')
    ourStory.id = 'our-story'
    ourStory.innerText = 'Our story'
    navLeftSide.appendChild(ourStory)

    const contact = document.createElement('p')
    contact.id = 'contact'
    contact.innerText = 'Contact'
    navLeftSide.appendChild(contact)

    // Navigation right side
    const search = document.createElement('img')
    search.id = 'search'
    search.src = searchImage
    navLeftSide.appendChild(search)

    const user = document.createElement('img')
    user.id = 'user'
    user.src = userImage
    navLeftSide.appendChild(user)

    const shoppingCart = document.createElement('img')
    shoppingCart.id = 'shopping-cart'
    shoppingCart.src = shoppingCartImage
    navLeftSide.appendChild(shoppingCart)

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

    const logo1 = document.createElement('p')
    logo1.id = 'logo'
    logo1.innerText = 'Street 96\''
    logoContainer.appendChild(logo1)

    const introContainer = document.createElement('div')
    introContainer.id = 'intro-container'
    homepageBody.appendChild(introContainer)

    const intro = document.createElement('p')
    intro.id = 'intro'
    intro.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat ipsa neque temporibus perspiciatis itaque impedit ipsum. Fugit, aperiam culpa libero fuga minus perspiciatis amet nihil quidem excepturi, tempora vitae!'
    introContainer.appendChild(intro)

    const videoLang = document.createElement('div')
    videoLang.id = 'video-language'
    homepageBody.appendChild(videoLang)

    const video = document.createElement('video')
    video.id = 'video'
    video.src = promoVideo
    video.setAttribute('controls', 'controls')
    video.setAttribute('loop', 'loop')
    video.setAttribute('autoplay', 'autoplay')
    videoLang.appendChild(video)

    const engLang = document.createElement('p')
    engLang.id = 'language'
    engLang.innerText= 'EN'
    videoLang.appendChild(engLang)

    const roLang = document.createElement('span')
    roLang.id = 'language'
    roLang.innerText= '| RO'
    videoLang.appendChild(roLang)

}
export default homepage

