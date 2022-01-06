let procastinator = document.getElementById("procastinator");

procastinator.addEventListener("click", async () => {

    const web = ['https://www.reddit.com/r/aww/',
                'https://www.horoscope.com/us/index.aspx',
                'https://slickdeals.net/',
                'https://minesweeperonline.com/',
                'https://www.tiktok.com/en/',
                'https://www.amazon.com/',
                'http://wikiroulette.co/',
                'https://agar.io/',
                "youLose1.html",
                "youLose2.html"
    ]
    window.open(web[Math.floor(Math.random() * 10)]);
    
});

