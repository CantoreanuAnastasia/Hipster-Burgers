import ownerImage from '../images/all-assets/owner.png'
import burgerGirl1Image from '../images/all-assets/burger-girl2.png'
import burgerGirl2Image from '../images/all-assets/burger-girl.png'

const createOurStory = function() {

    const ourStoryBody =  document.createElement('div')
    ourStoryBody.id = 'our-story-body'
    homepage.appendChild(ourStoryBody)

    const textContainer = document.createElement('div')
    textContainer.id = 'text-container'
    ourStoryBody.appendChild(textContainer)

    const text = document.createElement('p')
    text.id = 'text'
    text.innerText = 'Our Story'
    textContainer.appendChild(text)

    const textContainer2 = document.createElement('div')
    textContainer2.id = 'text-container2'
    ourStoryBody.appendChild(textContainer2)

    const text2Title = document.createElement('p')
    text2Title.id = 'text2-title'
    text2Title.innerText = 'Hi there!'
    textContainer2.appendChild(text2Title)

    const text2 = document.createElement('p')
    text2.id = 'text2'
    text2.innerText = 'My name is Stefano. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere urna nec. Enim ut tellus elementum sagittis vitae et. Quis varius quam quisque id. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Nisi porta lorem mollis aliquam. Commodo viverra maecenas accumsan lacus vel. In nibh mauris cursus mattis molestie a iaculis at. Sed faucibus turpis in eu mi. Ipsum faucibus vitae aliquet nec. Id nibh tortor id aliquet lectus proin nibh nisl. Nunc aliquet bibendum enim facilisis gravida neque. Enim facilisis gravida neque convallis. Non quam lacus suspendisse faucibus interdum posuere. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Elit at imperdiet dui accumsan sit. Cursus turpis massa tincidunt dui ut ornare. Malesuada fames ac turpis egestas integer eget. Tincidunt praesent semper feugiat nibh sed. Aenean vel elit scelerisque mauris pellentesque. Eu facilisis sed odio morbi quis commodo odio aenean sed. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Senectus et netus et malesuada fames ac turpis. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sed nisi lacus sed viverra tellus in hac. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsum suspendisse ultrices gravida dictum. Vulputate dignissim suspendisse in est ante in nibh. Sed felis eget velit aliquet sagittis id consectetur purus ut. Erat velit scelerisque in dictum non consectetur a erat nam. Arcu non odio euismod lacinia at quis risus. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Volutpat consequat mauris nunc congue nisi.'
    textContainer2.appendChild(text2)

    const sideImgCont = document.createElement('div')
    sideImgCont.id = 'sideimg-cont'
    ourStoryBody.appendChild(sideImgCont)

    const owner = document.createElement('img')
    owner.id = 'owner'
    owner.src = ownerImage
    sideImgCont.appendChild(owner)

    const burgerGirl1 = document.createElement('img')
    burgerGirl1.id = 'burger-girl2'
    burgerGirl1.src = burgerGirl1Image
    sideImgCont.appendChild(burgerGirl1)

    const burgerGirl2 = document.createElement('img')
    burgerGirl2.id = 'burger-girl'
    burgerGirl2.src = burgerGirl2Image
    textContainer.appendChild(burgerGirl2)


}

export default createOurStory