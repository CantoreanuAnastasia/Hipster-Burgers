import shareIconImg from '../images/all-assets/share.svg' 
import americanImg from '../images/american.png'
import italianImg from '../images/italian.png'
import blackBurgerImg from '../images/blackburger.png'
import cheeseBurgerImg from '../images/cheeseburger.png'
import slide from './carousel-func'

const createMenu = function () {
    const menuBody = document.createElement('div')
    menuBody.id = 'menu-body'
    homepage.appendChild(menuBody)

    const leftNav = document.createElement('div')
    leftNav.id = 'left-nav'
    menuBody.appendChild(leftNav)
    
    // 'cont' stands for container
    const leftArrowCont = document.createElement('div')
    leftArrowCont.id = 'leftarrow-cont'
    leftNav.appendChild(leftArrowCont)

    const priceCont = document.createElement('div')
    priceCont.id = 'price-cont'
    leftNav.appendChild(priceCont)

    const price = document.createElement('div')
    price.id = 'price'
    price.innerText = '11.59€'
    priceCont.appendChild(price)

    const shareCont = document.createElement('div')
    shareCont.id = 'share-cont'
    leftNav.appendChild(shareCont)

    const share = document.createElement('p')
    share.id = 'share'
    share.innerText = 'Share'
    shareCont.appendChild(share)

    const shareIcon = document.createElement('img')
    shareIcon.id = 'share-icon'
    shareIcon.src = shareIconImg
    shareCont.appendChild(shareIcon)

// this will make our burger slider menu
    const carousel = document.createElement('div')
    carousel.className = 'carousel'
    carousel.toggleAttribute('data-carousel')
    menuBody.appendChild(carousel)

    const leftArrow = document.createElement('button')
    leftArrow.id = 'left-arrow'
    leftArrow.innerText = '◀'
    leftArrow.setAttribute('data-carousel-button', 'prev')
    leftArrow.className ='carousel-button prev'
    leftArrowCont.appendChild(leftArrow)

    const ul = document.createElement('ul')
    ul.setAttribute('data', 'data-slides')
    carousel.appendChild(ul)

    const li1 = document.createElement('li')
    li1.className = 'slide'
    li1.toggleAttribute('data-active')
    ul.appendChild(li1)

    const american = document.createElement('img')
    american.src = americanImg
    li1.appendChild(american)

    const li2 = document.createElement('li')
    li2.className = 'slide'
    ul.appendChild(li2)

    const italian = document.createElement('img')
    italian.src = italianImg
    li2.appendChild(italian)

    const li3 = document.createElement('li')
    li3.className = 'slide'
    ul.appendChild(li3)

    const blackBurger = document.createElement('img')
    blackBurger.src = blackBurgerImg
    li3.appendChild(blackBurger)

    const li4 = document.createElement('li')
    li4.className = 'slide'
    ul.appendChild(li4)

    const cheeseBurger = document.createElement('img')
    cheeseBurger.src = cheeseBurgerImg
    li4.appendChild(cheeseBurger)

    const rightNav = document.createElement('div')
    rightNav.id = 'right-nav'
    menuBody.appendChild(rightNav)

    const descriptionCont = document.createElement('div')
    descriptionCont.id = 'description-container'
    rightNav.appendChild(descriptionCont)

    const descriptionTitle = document.createElement('p')
    descriptionTitle.innerText = 'Our signature burger'
    descriptionTitle.id = 'description-title'
    descriptionCont.appendChild(descriptionTitle)

    const description = document.createElement('p')
    description.id = 'description'
    description.innerText = 'Sink your teeth into a juicy, mouthwatering masterpiece - the burger! With its sizzling patty, melted cheese, and crisp toppings, this classic American dish is the ultimate comfort food. Whether you like it simple or piled high with extras, one thing\'s for sure: every bite of a burger is a flavor explosion that will leave you wanting more.'
    descriptionCont.appendChild(description)

    const rightArrowCont = document.createElement('div')
    rightArrowCont.id = 'rightarrow-cont'
    rightNav.appendChild(rightArrowCont)

    const rightArrow = document.createElement('button')
    rightArrow.id = 'right-arrow'
    rightArrow.className ='carousel-button next'
    rightArrow.innerText = '▶'
    rightArrow.setAttribute('data-carousel-button', 'next')
    rightArrowCont.appendChild(rightArrow)

    const addToCart = document.createElement('button')
    addToCart.id = 'add-to-cart'
    addToCart.innerText = 'ADD TO CART 🛒'
    rightNav.appendChild(addToCart)

    slide()
}

export default createMenu