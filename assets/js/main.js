//shop menu variables
const shopBtn = document.querySelector('#js-shop');
const shopBody = document.querySelector('#js-shop-body');
const shopCategories = document.querySelectorAll('.js-shop-category');
const shopSubcategories = document.querySelectorAll('.js-shop-subcategory');
const initialShopBodyHeight = shopBody.clientHeight;

// events for shop menu
function btnEvent() {
    this.btn.addEventListener('mouseover', () => {
        this.body.style.height = this.initialBodyHeight + 'px';
    });
}

function categoriesEvent() {
    this.categories.forEach((category, index) => {
        category.addEventListener('mousemove', () => {
            if (this.initialBodyHeight < this.subcategories[index].clientHeight)
                this.body.style.height = this.subcategories[index].clientHeight + 'px';
            else this.subcategories[index].style.height = this.initialBodyHeight + 'px';
        });
    });
}

//define shop menu
const shopMenu = {
    btn: shopBtn,
    body: shopBody,
    initialBodyHeight: initialShopBodyHeight,
    categories: shopCategories,
    subcategories: shopSubcategories,
    btnEvent,
    categoriesEvent,
};

// event listeners for shop dropdown menu
shopMenu.btnEvent();
shopMenu.categoriesEvent();
