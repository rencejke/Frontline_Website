const faqsNav = document.querySelectorAll(".faqs__nav__link");
const faqsContent = document.querySelectorAll(".faqs2__item");
faqsNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaqs();
    faq.classList.add("active");
    
    const activeContent = document.querySelector(`#${faq.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveFaqs() {
    faqsNav.forEach((faq) => {
    faq.classList.remove("active");
  });
};

function removeActiveContent() {
  faqsContent.forEach((content) => {
    content.classList.remove("active");
  });
};


const burgir = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__action");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    menu.classList.toggle("open");
});
  
const links = document.querySelectorAll(".faqs__questions"); //.faqs__item h4
links.forEach((link) => {   
link.addEventListener("click", () => {
link.querySelector("i").classList.toggle("open");
link.nextElementSibling.classList.toggle("open");
});
});


