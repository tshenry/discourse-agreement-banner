//import showModal from "discourse/lib/show-modal";
export default Ember.Component.extend({
  actions: {
    agree() {
      if (this.canContinue) {
        document.querySelector(".agree-banner-connector").remove();
        document
          .querySelector("html")
          .classList.remove("must-agree", "clarify");
        this.keyValueStore.set({ key: "showAgreementBanner", value: "false" });
      } else {
        document.querySelector(".checkbox-reminder").classList.remove("hidden");
      }
    }
  }
});
