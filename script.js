document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       MOBILE MENU
    ================================= */

    const nav = document.querySelector(".nav-links");
    const navContainer = document.querySelector(".nav-container");

    const menuButton = document.createElement("button");

    menuButton.className = "mobile-menu-button";
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open menu");

    navContainer.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");

        menuButton.innerHTML =
            nav.classList.contains("mobile-open") ? "✕" : "☰";
    });


    /* Close mobile menu after clicking a link */

    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

            menuButton.innerHTML = "☰";

        });

    });


    /* =================================
       SCROLL REVEAL
    ================================= */

    const revealElements = document.querySelectorAll(
        ".scroll-reveal, .scroll-scale"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* =================================
       CARD STAGGER ANIMATION
    ================================= */

    const groups = [
        ".services-grid",
        ".portfolio-grid",
        ".pricing-grid",
        ".process-grid"
    ];

    groups.forEach((groupSelector) => {

        const items = document.querySelectorAll(
            `${groupSelector} > *`
        );

        items.forEach((item, index) => {

            item.style.transitionDelay =
                `${index * 0.1}s`;

        });

    });


    /* =================================
       SMOOTH NAVIGATION
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =================================
       SCROLL PROGRESS
    ================================= */

    const progress = document.querySelector(".scroll-progress span");

    if (progress) {

        window.addEventListener("scroll", () => {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                (scrollTop / documentHeight) * 100;

            progress.style.width =
                `${percentage}%`;

        });

    }


    /* =================================
       HERO MOUSE PARALLAX
    ================================= */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 900) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 12;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 12;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

});