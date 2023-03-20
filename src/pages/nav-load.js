import searchImage from '../images/all-assets/search.svg'
import userImage from '../images/all-assets/user.svg'
import shoppingCartImage from '../images/all-assets/shopping-cart.svg'

const navLoad = function() {
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
    const navRightSide = document.createElement('div')
    navRightSide.id = 'nav-rightside'
    navbar.appendChild(navRightSide)
    
    const search = document.createElement('img')
    search.id = 'search'
    search.src = searchImage
    navRightSide.appendChild(search)
    
    const user = document.createElement('img')
    user.id = 'user'
    user.src = userImage
    navRightSide.appendChild(user)
    
    const shoppingCart = document.createElement('img')
    shoppingCart.id = 'shopping-cart'
    shoppingCart.src = shoppingCartImage
    navRightSide.appendChild(shoppingCart)

    const langContainer = document.createElement('div')
    langContainer.id = 'language-container'
    navRightSide.appendChild(langContainer)    

    const engLang = document.createElement('p')
    engLang.id = 'language-en'
    engLang.innerText= 'EN'
    langContainer.appendChild(engLang)

    const barLang = document.createElement('p')
    barLang.id = 'language-bar'
    barLang.innerText= '|'
    langContainer.appendChild(barLang)

    const roLang = document.createElement('p')
    roLang.id = 'language-ro'
    roLang.innerText= 'RO'
    langContainer.appendChild(roLang)
}

export default navLoad