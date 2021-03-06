import {ABSTRACT,
  CONST,
  Type} from 'angular2/src/facade/lang';
export class Template {
  constructor({url,
    inline,
    directives,
    formatters,
    source,
    locale,
    device}) {
    this.url = url;
    this.inline = inline;
    this.directives = directives;
    this.formatters = formatters;
    this.source = source;
    this.locale = locale;
    this.device = device;
  }
}
Object.defineProperty(Template, "annotations", {get: function() {
    return [new CONST()];
  }});
//# sourceMappingURL=template.js.map

//# sourceMappingURL=./template.map