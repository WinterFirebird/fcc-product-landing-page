window.onload = function() {

    const header = document.querySelector("#header");

    const links = document.querySelectorAll("#header #nav-bar a");


    /**
     * function for preventing the second section from going behind the first second by giving it a margin (the first section is fixed, so it's out of flow)
     */
    const adjustTheHeroMargin = () => {
        let headerHeight = header.offsetHeight;
        let heroMargin = headerHeight + 20;
        document.querySelector("#hero").style.marginTop = `${heroMargin}px`;
    }

    adjustTheHeroMargin();

    window.addEventListener("resize", function() { 
        adjustTheHeroMargin();
    })

    const scrollToSection = (link) => {

        let target = link.getAttribute("href");
        let targetElement = document.querySelector(target);
        
        /**
         * the y coordinate of the element relative to the viewport
         */ 
        let yRelToViewport = targetElement.getBoundingClientRect().top;

        /**
         * the amount by which viewport is scrolled in its turn
         */
        let viewportScrollTop = document.documentElement.scrollTop

        /**
         * the height of the header
         */
        let headerHeight = header.offsetHeight;

        let scrollByY = yRelToViewport + viewportScrollTop - headerHeight;

        document.querySelector("html").scrollTo({
            left: 0,
            top: scrollByY,
            behavior: "smooth"
        })

    }

    links.forEach(link => {
        link.addEventListener("click", function(event){
            /*prevent the default scrolling*/
            event.preventDefault();
            scrollToSection(this)
        })
    })

    
}