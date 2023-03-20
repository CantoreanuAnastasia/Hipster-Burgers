import './styles/reset.css'
import './styles/root.css'
import './styles/homepage.css'
import './styles/menu.css'
import './styles/our-story.css'
import createHomepage from './pages/homepage.js';
import createMenu from './pages/menu.js';
import firstLoad from './pages/firstLoad';
import render from './pages/render';
import createOurStory from './pages/our-story.js';


firstLoad()

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const ourStoryButton = document.querySelector('#our-story')
const contactButton = document.querySelector('#contact')

menuButton.addEventListener('click', function() {
    render()
    createMenu()
})

homeButton.addEventListener('click', function(){
    render()
    createHomepage()
})

ourStoryButton.addEventListener('click', function(){
    render()
    createOurStory()
})