import ko from "knockout";

ko.components.register("ko-button", {
  viewMode: (params?: any) => {
    this.label = params.label;
  },
  template: `
    <button class="button-outlined h6" data-bind="text: label"></button>
  `
});
