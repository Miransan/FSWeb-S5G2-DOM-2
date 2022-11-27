import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
// * [ ] `drag / drop`

// Kodlar buraya gelecek!


document.querySelector("h1").addEventListener("click", function (e) {
    alert("Bana tıkladın!")
});


const h1YeniRenk = document.querySelector('h1');
h1YeniRenk.addEventListener("mouseenter", (a) => {
    a.target.style.color = 'purple';
    setTimeout(() => {
        a.target.style.color = "";
    }, 500);
}, false);


// const farkliTiklama = document.querySelector ('.main-navigation.nav')
// farkliTiklama.addEventListener("mouseover", altkey);
// farkliTiklama.onmouseover = function(){myScript};


const tumResimler = document.querySelectorAll('img');
tumResimler.forEach((resim) => {
    resim.addEventListener('mouseover', (event) => {
        resim.style.filter = 'grayscale(100%)';
    })
}
)


