// see https://github.com/discourse/discourse-user-notes/blob/1ef308e4ff7bb67b1659ba2c03fdc3d911dd24cf/assets/javascripts/discourse-user-notes/connectors/user-profile-controls/show-notes-on-profile.js.es6
export default {
  shouldRender(args, component) {
    const { currentUser } = component;
    let showAgreementBanner = component.keyValueStore.get(
      "showAgreementBanner"
    );
    if (!currentUser || showAgreementBanner == "false") {
      return false;
    } else {
      return true;
    }
  }
};
