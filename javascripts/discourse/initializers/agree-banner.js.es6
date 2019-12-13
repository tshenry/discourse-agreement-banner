import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "agree-banner",
  initialize(container) {
    withPluginApi("0.8", api => {
      let currentUser = api.getCurrentUser();
      let store = container.lookup("key-value-store:main");

      if (currentUser && !store.get("showAgreementBanner")) {
        document.querySelector("html").classList.add("must-agree");
      }
    });
  }
};
