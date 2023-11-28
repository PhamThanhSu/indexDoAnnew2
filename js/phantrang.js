// Hàm phân trang chung
function loadItem(listName) {
    let list = listName;
    let beginGet = limit * (page - 1);
    let endGet = limit * page - 1;

    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    listPage(listName);
}

// Hàm tạo các trang chung
function listPage(listName) {
    let list = listName.length;
    let count = Math.ceil(list / limit);
    let pageNumberId = `pagenumber-${listName}`;
    
    document.getElementById(pageNumberId).innerHTML = '';

    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;

        if (i === thisPage[listName]) {
            newPage.classList.add('active');
        }

        newPage.setAttribute('onclick', `changePage${listName}(${i})`);
        document.getElementById(pageNumberId).appendChild(newPage);
    }
}


thisPageGaming = document.querySelectorAll('.list1-gaming .itemproduct'), 
thisPageDoanhnhan = document.querySelectorAll('.list1-doanhnhan .itemproduct'), 
thisPageDohoa = document.querySelectorAll('.list1-dohoa .itemproduct');
// Gọi hàm phân trang ban đầu cho từng danh sách
loadItem(thisPageGaming);

loadItem(thisPageDoanhnhan);

loadItem(thisPageDohoa);
