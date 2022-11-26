import axios from 'axios';

const Tablar = (konu) => {

  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");

  for(let i = 0; i < konu.length; i++){
    const divTabs = document.createElement("div");
    divTabs.classList.add("tab");
    divTabs.textContent = konu[i];
    divTopics.appendChild(divTabs);
  }

  return divTopics;

  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get("http://localhost:5001/api/konular")
  .then(function(response) {
    const tablar = Tablar(response.data.konular);
    
    const divSelector = document.querySelector(secici);

    divSelector.appendChild(tablar);
  })
;


}

export { Tablar, tabEkleyici }
