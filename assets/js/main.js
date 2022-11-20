//shop, services, deals menu variables
const shopBtn = document.querySelector('#js-shop');
const shopBody = document.querySelector('#js-shop-body');
const shopCategories = document.querySelectorAll('.js-shop-category');
const shopSubcategories = document.querySelectorAll('.js-shop-subcategory');
const initialShopBodyHeight = shopBody.clientHeight;

const servicesBtn = document.querySelector('#js-services');
const servicesBody = document.querySelector('#js-services-body');
const servicesCategories = document.querySelectorAll('.js-services-category');
const servicesSubcategories = document.querySelectorAll('.js-services-subcategory');
const initialServicesBodyHeight = servicesBody.clientHeight;

const dealsBtn = document.querySelector('#js-deals');
const dealsBody = document.querySelector('#js-deals-body');
const dealsCategories = document.querySelectorAll('.js-deals-category');
const dealsSubcategories = document.querySelectorAll('.js-deals-subcategory');
const initialDealsBodyHeight = dealsBody.clientHeight;

// events for shop, services menu
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

//define shop, services, deals menu
const shopMenu = {
    btn: shopBtn,
    body: shopBody,
    initialBodyHeight: initialShopBodyHeight,
    categories: shopCategories,
    subcategories: shopSubcategories,
    btnEvent,
    categoriesEvent,
};

const servicesMenu = {
    btn: servicesBtn,
    body: servicesBody,
    initialBodyHeight: initialServicesBodyHeight,
    categories: servicesCategories,
    subcategories: servicesSubcategories,
    btnEvent,
    categoriesEvent,
};

const dealsMenu = {
    btn: dealsBtn,
    body: dealsBody,
    initialBodyHeight: initialDealsBodyHeight,
    categories: dealsCategories,
    subcategories: dealsSubcategories,
    btnEvent,
    categoriesEvent,
};

// event listeners for shop dropdown menu
shopMenu.btnEvent();
shopMenu.categoriesEvent();
servicesMenu.btnEvent();
servicesMenu.categoriesEvent();
dealsMenu.btnEvent();
dealsMenu.categoriesEvent();
