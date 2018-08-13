define([
    "knockout",
    path + "header/header.viewmodel",
    path + "header/header.template",
    path + "logo/logo.viewmodel",
    path + "logo/logo.template",
    path + "purchaseCart/purchaseCart.viewmodel",
    path + "purchaseCart/purchaseCart.template"
], (ko, viewModel, template) => {

    ko.components.register("header-template", {
        template,
        viewModel
    });

});