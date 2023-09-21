// JavaScript for the portfolio item animation effect
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = [
        {
            image: "portfolio-item1.jpg",
            title: "Arcade Game - 'Kvitter'",
            description: "Experience this unique bird dating and dancing simulator, where you become the bird and groove to the beat. Winner of Best Presentation and Best in Show at GGC Show Awards.",
        },
        {
            image: "portfolio-item2.jpg",
            title: "Video Game Soundtrack - 'Epic Quest'",
            description: "Embark on an epic journey with the immersive soundtrack of 'Epic Quest.'",
        },
        {
            image: "portfolio-item3.jpg",
            title: "Interactive Installation - 'Soundscapes'",
            description: "Explore the sensory world of 'Soundscapes,' an interactive installation that combines art and technology to immerse you in a sonic wonderland.",
        },
        {
            image: "portfolio-item4.jpg",
            title: "Short Film Score - 'Whispers in the Dark'",
            description: "Feel the suspense and emotion in the haunting score of 'Whispers in the Dark,' a short film that takes you on a journey through the unknown.",
        },
    ];

    const portfolioContainer = document.querySelector(".portfolio-items");

    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item", "hidden");
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioContainer.appendChild(portfolioItem);

        // Add animation class to items as you scroll down
        setTimeout(() => {
            portfolioItem.classList.add("animate");
        }, 300 * index);
    });
});
