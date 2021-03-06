var __decorate = this.__decorate || function (decorators, target, key, value) {
    var kind = typeof (arguments.length == 2 ? value = target : value);
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        switch (kind) {
            case "function": value = decorator(value) || value; break;
            case "number": decorator(target, key, value); break;
            case "undefined": decorator(target, key); break;
            case "object": value = decorator(target, key, value) || value; break;
        }
    }
    return value;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./src/core/annotations/visibility'));
__export(require('./src/core/compiler/interfaces'));
__export(require('./src/core/annotations/template'));
__export(require('./src/core/annotations/annotations'));
__export(require('./src/core/application'));
__export(require('./src/core/application_tokens'));
__export(require('./src/core/annotations/di'));
__export(require('./src/core/compiler/compiler'));
__export(require('angular2/src/render/dom/compiler/template_loader'));
__export(require('./src/core/compiler/private_component_loader'));
__export(require('./src/core/compiler/private_component_location'));
__export(require('./src/core/compiler/view'));
__export(require('./src/core/compiler/view_container'));
__export(require('./src/core/dom/element'));
