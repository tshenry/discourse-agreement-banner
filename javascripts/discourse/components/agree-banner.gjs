import Component from "@glimmer/component";
import DButton from "discourse/components/d-button";
import dIcon from "discourse/helpers/d-icon";
import { action } from "@ember/object";
import { i18n } from "discourse-i18n";
import { on } from "@ember/modifier";
import { service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class AgreeBanner extends Component {
  @service currentUser;
  @service keyValueStore;

  @tracked isHidden = !this.currentUser || this.keyValueStore.get("agreement_banner_hidden");
  @tracked agreeIsChecked = false;

  @action
  onCheck(event) {
    this.agreeIsChecked = event.target.checked;
  }

  @action
  onSubmit() {
    if (this.agreeIsChecked) {
      this.isHidden = true;
      this.keyValueStore.set({ key: "agreement_banner_hidden", value: true });
      document.documentElement.classList.remove("must-agree", "clarify");
    } else {
      let $reminder = document.querySelector(".checkbox-reminder");
      if ($reminder) {
        $reminder.classList.remove("hidden");
      }
    }
  }

  jumpToBanner() {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("clarify");
  }

  <template>
    {{#unless this.isHidden}}
      <div class="agree-banner">
        <div class="container">
          <div class="banner-header">
            <h2>
              {{i18n (themePrefix "agree_banner.heading")}}
            </h2>
          </div>
          <div class="terms">
            {{{settings.agree_banner_terms}}}
          </div>
          <div class="banner-controls">
            <label class="reminder-label">
              <input
                {{on "click" this.onCheck}}
                type="checkbox"
                checked={{this.agreeIsChecked}}
              />
              <span>
                {{i18n (themePrefix "agree_banner.checkbox_label")}}
              </span>
              <div class="checkbox-reminder hidden">
                {{dIcon "left-long"}}
                <span class="checkbox-reminder-text">
                  {{i18n (themePrefix "agree_banner.checkbox_reminder")}}
                </span>
              </div>
            </label>
            <DButton
              class="btn-primary"
              @label={{themePrefix "agree_banner.submit_button"}}
              @action={{this.onSubmit}}
            />
          </div>
        </div>
      </div>
      <div class="overlay" {{on "click" this.jumpToBanner}}></div>
    {{/unless}}
  </template>
}
