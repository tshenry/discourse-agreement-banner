import Component from "@ember/component";

export default Component.extend({
  click() {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("clarify");
    return false;
  }
});
