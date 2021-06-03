let list = document.getElementById("list")

fetch("https://api.unsplash.com/photos/?client_id=RWkwC5JciiFNTijBDx8baPVA7WFCStf8J-eVqtYq-TI&lang=az")
    .then(response => response.json())

.then(veri => {
    console.log(veri);
    veri.forEach(element => {
        // list.innerHTML += `<img src="${element.urls.regular}">`;
        list.innerHTML += ` <div class="photo">
                <div class="main-picture">
                    <img src="${element.urls.regular}" alt="">
                </div>
                 <div class="about">
                    <div class="about-picture">
                        <div class="username">
                            <h1>${element.user.name}</h1>
                        </div>
                        <h5>Like: ${element.likes}</h5>
                    </div>
                    <p>${element.alt_description}</p>
                </div>
            </div>`;
    });
})