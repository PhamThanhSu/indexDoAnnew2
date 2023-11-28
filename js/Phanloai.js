//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonStringphanloai = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArrayphanloai = JSON.parse(storedJsonStringphanloai);

function ListSellingProductphanloai(category, targetElementId) {
    var s = '';
    for (var i = 0; i <storedArrayphanloai.length; i++) {
        var product = storedArrayphanloai[i];
        if (!(product.phanloai === category)) {
            continue;
            }
            s +=`<div class="itemproduct" id = "itemproduct">
                            <div>
                                <a href="#">
                                    <img src="${product.img}" class="anh" data-doi="${product.doi}" style="width: 100%; height: 210px;"/>
                                </a>
                            </div>
                            <div class="content">
                                <div class="title" title="${product.name}">${product.name}</div>
                                <div id="cpu"><img src="./sua/css/image/cpu.png" width="9%">
                                    <span>&nbsp; ${product.cpu}</span>
                                </div>
                                <div id="ram"><img src="./css/image/ram.png" width="9%">
                                    <span>&nbsp; ${product.ram}</span>
                                </div>
                                <div id="ssd"><img src="./css/image/ssd.png" width="7%">
                                    <span>&nbsp; ${product.ssd}</span>
                                </div>
                                <div id="vga"><img src="./css/image/vga-card.png" width="8%">
                                    <span>&nbsp; ${product.vga}</span>
                                </div>
                                <div id="price">
                                    <span id="price-item" id="price">${product.pricecompare}₫</span>
                                </div>
                            </div>
                        </div>`; 
                        
    }
    document.getElementById(targetElementId).innerHTML = s;
    var elements = document.querySelectorAll('.anh');

    elements.forEach(function (element) {
      handleImageHover(element);
    });
  }
 /*  function updatePrices() {
    for (var i = 0; i < saleElements.length; i++) {
        var originalPrice = parseFloat(priceElements[i].textContent.replace(/[^0-9.-]+/g, ""));
        var discountPercentage = parseFloat(saleElements[i].textContent.replace(/[^0-9.-]+/g, ""));
        var discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

        salePriceElements[i].textContent = formatWithCommas(discountedPrice);
        priceElements[i].textContent = formatWithCommas(originalPrice);
    }
}  */

  function handleImageHover(element) {
    var initialImagePath = element.src;
    var hoverImagePath = element.dataset.doi;
  
    element.addEventListener('mouseover', function () {
      // Change the image source when the element is hovered over
      element.src = hoverImagePath;
    });
  
    element.addEventListener('mouseout', function () {
      // Reset the image source when the mouse leaves the element
      element.src = initialImagePath;
    });
  }

  ListSellingProductphanloai('gaming', 'list-gaming');
  ListSellingProductphanloai('doanhnhan', 'list-doanhnhan');
  ListSellingProductphanloai('dohoa', 'list-dohoa');