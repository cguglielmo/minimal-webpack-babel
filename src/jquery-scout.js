import * as $ from 'jquery';

export default class JQueryUtils extends $ {

  /**
   * @param element string. Example = &lt;input&gt;
   * @param cssClass (optional) class attribute
   * @param text (optional) adds a child text-node with given text (no HTML content)
   */
  static makeElement(element, cssClass, text) {
    var myDocument = this.document(true);
    if (myDocument === undefined || element === undefined) {
      return new Error('missing arguments: document, element');
    }
    var $element = $(element, myDocument);
    if (cssClass) {
      $element.addClass(cssClass);
    }
    if (text) {
      $element.text(text);
    }
    return $element;
  }

  static negate(fx) {
    return function() {
      return !fx.apply(this, arguments);
    };
  }
}

$.extend($, {
  negate: JQueryUtils.negate
});
$.extend($.fn, {
  makeElement: JQueryUtils.makeElement
});


if (window.$ !== $) {
  window.$ = $;
}
