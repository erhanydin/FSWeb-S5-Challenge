import axios from 'axios';

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const cardHeadline = document.createElement("div");
  cardHeadline.classList.add("headline");
  cardHeadline.textContent = makale.anabaslik;
  divCard.appendChild(cardHeadline);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("author");
  divCard.appendChild(cardAuthor);

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("img-container");
  cardAuthor.appendChild(cardImgContainer);

  const cardImg = document.createElement("img");
  cardImg.src = makale.yazarFoto;
  cardImgContainer.appendChild(cardImg);

  const cardAuthorName = document.createElement("span");
  cardAuthorName.textContent = `${makale.yazarAdi} tarafından`;
  cardAuthor.appendChild(cardAuthorName);

  cardAuthor.addEventListener("click", (event) => {
    console.log(makale.anabaslik);
  });

  return divCard;

}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get("http://localhost:5001/api/makaleler")
  .then(function(response) {
  
    
    const divSelector = document.querySelector(secici);

    for(let i in response.data.makaleler) {
      response.data.makaleler[i].forEach(makale => {
        divSelector.appendChild(Card(makale));
      })
    }


  });
}

export { Card, cardEkleyici }
