Package.describe({
    name: "jalik:prestashop",
    version: "0.1.0",
    author: "karl.stein.pro@gmail.com",
    summary: "PrestaShop REST API Client",
    homepage: "https://github.com/jalik/jalik-prestashop",
    git: "https://github.com/jalik/jalik-prestashop.git",
    documentation: "README.md",
    license: "MIT"
});

Package.onUse(function (api) {
    api.versionsFrom("1.4.2.3");
    api.use("ecmascript");
    api.use("http");
    api.use("underscore");
    api.mainModule("prestashop.js");
});
