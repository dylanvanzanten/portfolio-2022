/* JS solution since needed on iOS https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/ */

let scrollY = 0;

const toggleScrollLock = (isLocked) => {
  const siteNav = document.body.querySelector("[data-site-nav]");
  const siteNavToggle = document.body.querySelector("[data-site-nav-toggle]");

  if (isLocked) {
    scrollY = window.pageYOffset;
    document.body.style.right = "0px";
    document.body.style.left = "0px";
    document.body.style.overflowY = "hidden";
    document.body.dataset.hasScrollLock = true;

    if (!siteNav || !siteNavToggle) {
      return;
    }
    siteNav.style.transform = `translate(-100%, ${scrollY}px)`;
    siteNavToggle.style.transform = `translateY(${scrollY}px)`;
  } else {
    document.body.style.overflowY = "";
    document.body.style.top = "";
    document.body.style.right = "";
    document.body.style.left = "";

    document.querySelector("html").setAttribute("data-scroll-hijacking", true);
    window.scroll(0, scrollY);
    document
      .querySelector("html")
      .removeAttribute("data-scroll-hijacking", true);
    document.body.dataset.hasScrollLock = false;

    if (!siteNav || !siteNavToggle) {
      return;
    }
    siteNav.style.transform = "";
    siteNavToggle.style.transform = "";
  }
};

export default toggleScrollLock;
