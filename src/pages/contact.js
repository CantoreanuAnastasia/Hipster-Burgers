const createContact = function () {

    const contactBody = document.createElement('div')
    contactBody.id = 'contact-body'
    homepage.appendChild(contactBody)

    const mapContainer = document.createElement('div')
    mapContainer.id = 'map-container'
    contactBody.appendChild(mapContainer)

    const map = document.createElement('iframe')
    map.src = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14073.138609020001!2d27.59746834425276!3d47.15847780394914!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1679345523428!5m2!1sro!2sro'
    map.style.width = '60em'
    map.style.height = '100%'
    map.style.border = '0'
    map.toggleAttribute('allowfullscreen')
    map.setAttribute('loading', 'lazy')
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
    contactBody.appendChild(map)
    
    const contactContainer = document.createElement('div')
    contactContainer.id = 'contact-container'
    contactBody.appendChild(contactContainer)

    const contactTextTitle = document.createElement('h1')
    contactTextTitle.id = 'contact-text-title'
    contactTextTitle.innerText = 'CONTACT'
    contactContainer.appendChild(contactTextTitle)

    const contactText1 = document.createElement('h3')
    contactText1.id = 'contact-text1'
    contactText1.innerText = 'streetburgers96@gmail.com'
    contactContainer.appendChild(contactText1)

    const contactText2 = document.createElement('h3')
    contactText2.id = 'contact-text2'
    contactText2.innerText = '0320-000-XXX'
    contactContainer.appendChild(contactText2)

    const contactText3 = document.createElement('h3')
    contactText3.id = 'contact-text3'
    contactText3.innerText = '0745453XXX'
    contactContainer.appendChild(contactText3)
}

export default createContact