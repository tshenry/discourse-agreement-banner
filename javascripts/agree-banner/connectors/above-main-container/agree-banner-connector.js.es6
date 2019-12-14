export default {
  shouldRender(args, component) {
    const { currentUser } = component;
    let showAgreementBanner = component.keyValueStore.get(
      "showAgreementBanner"
    );

    if (!currentUser || showAgreementBanner === "no") {
      return false;
    } else {
      return true;
    }
  }
};
