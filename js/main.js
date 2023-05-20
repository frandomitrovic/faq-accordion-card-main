const items = [...document.querySelectorAll('li.faq__faq-item')];

const clearItem = (itemDetail) => {
    itemDetail.style.maxHeight = null;
}

const activateItem = (itemDetail) => {
    const scrollHeight = itemDetail.scrollHeight;
    itemDetail.style.maxHeight = `${scrollHeight}px`;
}

const handleItemClick = (e) => {
    const clickedItem = e.target.closest('li');
    const itemDetail = clickedItem.querySelector('.faq-item__detail');
    const clickedItemActive = clickedItem.classList.contains('active');
    clickedItem.classList.toggle('active');
    if(clickedItemActive) {
        clearItem(itemDetail);
    } else {
        activateItem(itemDetail);
    }
};

const addListenerToItems = (array, callback) => {
    array.forEach(item => {
        item.addEventListener('click', (e) => {
            callback(e);
        })
    })
};

addListenerToItems(items, handleItemClick);