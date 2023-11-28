//Lấy giá trị mảng sản phẩm từ LocalStorage
const mangdaloc = JSON.parse(localStorage.getItem('filteredProducts'));
function ListSellingProductsss(filterthuonghieu = [], filtergiaban = [], filtercpu = [], filtervga = [], filterssd = []) {
    let s ='';
    for (let i = 0; i < mangdaloc.length; i++) {
        const product = mangdaloc[i];
        var anh = product.img;
        var doi = product.doi;
        var thuonghieu = product.thuonghieu.toUpperCase();
        var phanloai = product.phanloai;
        var name = product.name;
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;

        console.log('filterthuonghieu.length');
        if (filterthuonghieu.length > 0) {
            if (filterthuonghieu.includes(thuonghieu) == false)
                continue;
        }

        if (filtergiaban.length > 0) {
            if (removeCommas(pricecompare) < 10000000 && !filtergiaban.includes('1')) continue;
            if (removeCommas(pricecompare) >= 10000000 && removeCommas(pricecompare) <= 15000000 && !filtergiaban.includes('2')) continue;
            if (removeCommas(pricecompare) > 15000000 && removeCommas(pricecompare) <= 25000000 && !filtergiaban.includes('3')) continue;
            if (removeCommas(pricecompare) > 25000000 && !filtergiaban.includes('4')) continue;
        }

        if (filtercpu.length > 0) {
           if(cpu.includes(filtercpu) == false)
             continue;
        }

        if (filterssd.length > 0) {
            if(ssd.includes(filterssd) == false)
              continue;
         }
         if (filtervga.length > 0) {
            if(vga.includes(filtervga) == false)
              continue;
         }
        if(filterthuonghieu.length > 0 || filtergiaban.length > 0 || filtercpu.length > 0 || filtergiaban.length > 0)
        textss = document.getElementById('filter-result');
        textss.innerHTML = "Laptop";
       
        s+=`<div class="itemproduct" id = "itemproduct">
                <div>
                    <a href="#">
                        <img src="${anh}" class="anh" data-doi="${doi}" style="width: 100%; height: 210px;"/>
                    </a>
                </div>
                <div class="content">
                    <div class="title" title="${product.name}">${name}</div>
                    <div id="cpu"><img src="./sua/css/image/cpu.png" width="9%">
                        <span>&nbsp; ${cpu}</span>
                    </div>
                    <div id="ram"><img src="./css/image/ram.png" width="9%">
                        <span>&nbsp; ${ram}</span>
                    </div>                    
                    <div id="ssd"><img src="./css/image/ssd.png" width="7%">
                        <span>&nbsp; ${ssd}</span>
                    </div>                    
                    <div id="vga"><img src="./css/image/vga-card.png" width="8%">
                        <span>&nbsp; ${vga}</span>
                    </div>                    
                    <div id="price">
                        <span id="price-item" id="price">${pricecompare}₫</span>
                    </div>                    
                </div>
            </div>`;   
    }
    document.getElementById("item-selling-products").innerHTML = s;
    var elements = document.querySelectorAll('.anh');

    elements.forEach(function (element) {
      handleImageHover(element);
    });
    // Sử dụng phân trang cho TÌM KIẾM và LỌC
var thisPageFiltersearch = document.querySelectorAll('.item-selling-products .itemproduct');
var paginationContainerfiltersearch = document.getElementById('pagenumberfiltersearch');
showPage(thisPageFiltersearch, paginationContainerfiltersearch);
}

const urlParams = new URLSearchParams(window.location.search);
const filterTerm = urlParams.get('Filter');

function filteritem() {
    var arrthuonghieu = document.getElementsByClassName("thuonghieu");
    var filterthuonghieu = [];
    for (var i = 0; i < arrthuonghieu.length; i++) {
        if (arrthuonghieu[i].checked) filterthuonghieu.push(arrthuonghieu[i].value);
    }

    var arrgiaban = document.getElementsByClassName("gia");
    var filtergiaban = [];
    for(var i = 0; i< arrgiaban.length; i++){
        if(arrgiaban[i].checked) filtergiaban.push(arrgiaban[i].value);
    }


    var arrcpu = document.getElementsByClassName("cpu");
    var filtercpu = [];
    for(var i=0; i< arrcpu.length; i++){
        if(arrcpu[i].checked) filtercpu.push(arrcpu[i].value);
    }

    var arrvga = document.getElementsByClassName("vga");
    var filtervga = [];
    for(var i=0; i< arrvga.length; i++){
        if(arrvga[i].checked) filtervga.push(arrvga[i].value);
    }

    var arrssd = document.getElementsByClassName("ssd");
    var filterssd = [];
    for(var i=0; i< arrssd.length; i++){
        if(arrssd[i].checked) filterssd.push(arrssd[i].value);
    }

    ListSellingProductsss(filterthuonghieu,filtergiaban, filtercpu, filtervga, filterssd);  

    console.log(filterthuonghieu);
    console.log(filtergiaban);
}
//Hàm bỏ dấu phẩy
function removeCommas(inputString) {
    return inputString.replace(/,/g, '');
    
}


//Mảng giá trị lọc
// Tạo một mảng để lưu trữ thông tin từ các phần tử
//Lấy giá trị mảng sản phẩm từ LocalStorage
/// Lấy dữ liệu từ local storage và chuyển đổi thành đối tượng JavaScript
 brandarray = JSON.parse(localStorage.getItem('brandarray'));
console.log(brandarray);
var listbrandfilter = `<ul id="listthuonghieu-checkbox" class="listcheckbox">`;
// Kiểm tra xem filtertest có tồn tại và có chứa ít nhất một phần tử không
for(var i=0; i< brandarray.length; i++) {
    // Tạo chuỗi HTML cho danh sách các thương hiệu
    console.log(brandarray[i]);
    listbrandfilter += `
        <li>
            <label id="label-item-search">
                <input type="checkbox" onchange="filteritem()" class="thuonghieu" value="${brandarray[i]}">${brandarray[i]}
            </label>
        </li>`;
        listbrandfilter += `</ul>`;

    // Gán chuỗi HTML vào một phần tử có id="listthuonghieu-checkbox"
    document.getElementById('listthuonghieu-checkbox').innerHTML = listbrandfilter;
}
