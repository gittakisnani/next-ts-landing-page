const options: IntersectionObserverInit = {
    threshold: 0.6
}

const handleNavLinks = (id: string) => {
    const navLinks = document.querySelectorAll('.navBar__link');
    navLinks.forEach(navL => {
        if(id) {
            navL.classList.remove('text-primary');
            (navL as HTMLAnchorElement).href.includes(id) && navL.classList.add('text-primary');
            if(id === 'home') navLinks[0].classList.add('text-primary')
        }
    })
}

const observer = () => new IntersectionObserver( entries => {
    entries.forEach(entry => {
        handleNavLinks(entry.target.id)
    })
}, options) as IntersectionObserver 

export default observer