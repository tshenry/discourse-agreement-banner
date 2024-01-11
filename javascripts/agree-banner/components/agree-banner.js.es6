import Component from "@ember/component";

export default Component.extend({
  canContinue: null,
  actions: {
    agree() {
      if (this.canContinue) {
        this.element.remove();
        document.documentElement.classList.remove("must-agree", "clarify");
        this.keyValueStore.set({ key: "showAgreementBanner", value: "no" });
      } else {
        let $reminder = this.element.querySelector(".checkbox-reminder");
        if ($reminder) {
          $reminder.classList.remove("hidden");
        }
      }
    }
  }
});
