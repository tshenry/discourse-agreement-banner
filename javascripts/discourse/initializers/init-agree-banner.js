import { apiInitializer } from "discourse/lib/api";
import AgreeBanner from "../components/agree-banner";

export default apiInitializer("1.14.0", (api) => {
  const currentUser = api.getCurrentUser();
  const store = api.container.lookup("service:key-value-store");

  if (currentUser && !store.get("agreement_banner_hidden")) {
    document.documentElement.classList.add("must-agree");
    api.renderInOutlet("above-main-container", AgreeBanner);
  }
});
