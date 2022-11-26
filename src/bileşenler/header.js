const Header = (baslik, tarih, yazi) => {

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = tarih;
  headerDiv.append(spanDate);

  const h1Baslik = document.createElement("h1");
  h1Baslik.textContent = baslik;
  headerDiv.appendChild(h1Baslik);

  const spanTemp = document.createElement("span");
  spanTemp.textContent = yazi;
  spanTemp.classList.add("temp");
  headerDiv.appendChild(spanTemp);

  return headerDiv;


  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {

  const headerSelector = document.querySelector(secici);

  const myHeader = Header("Teknoloji Zamanı", "11 Kasım 2022", "Sağdaki yazı");
  headerSelector.appendChild(myHeader);

  return headerSelector;


  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
}


export { Header, headerEkleyici }
