import pageLoad from './nav-load';
import createHomepage from './homepage';

const firstLoad = function() {
    pageLoad()
    createHomepage()
}

export default firstLoad