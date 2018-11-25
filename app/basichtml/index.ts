import * as utils from './src/utils';
import { CustomElementRegistry } from './src/CustomElementRegistry';
import { Document } from './src/Document';
import { HTMLElement } from './src/HTMLElement';
import { HTMLUnknownElement } from './src/HTMLUnknownElement';

export { Attr } from './src/Attr';
export { CharacterData } from './src/CharacterData';
export { Comment } from './src/Comment';
export { CustomEvent } from './src/CustomEvent';
export { Document };
export { DocumentFragment } from './src/DocumentFragment';
export { DocumentType } from './src/DocumentType';
export { DOMStringMap } from './src/DOMStringMap';
export { DOMTokenList } from './src/DOMTokenList';
export { Element } from './src/Element';
export { Event, EventInitDict } from './src/Event';
export { EventTarget } from './src/EventTarget';
export { HTMLElement } from './src/HTMLElement';
export { HTMLTemplateElement } from './src/HTMLTemplateElement';
export { HTMLUnknownElement } from './src/HTMLUnknownElement';
export { HTMLHtmlElement } from './src/HTMLHtmlElement';
export { Node } from './src/Node';
export { Text } from './src/Text';

export interface IWindow {
  window: this;
  document: Document;
  customElements: CustomElementRegistry;
  HTMLUnknownElement: typeof HTMLUnknownElement;
  HTMLElement: typeof HTMLElement;
}

export interface IBasicHTMLInitOptions {
  window?: IWindow;
  customElements?: CustomElementRegistry;
}

export function init(options: IBasicHTMLInitOptions = {}) {
  const window: IWindow = options.window ||
    (typeof self === 'undefined' ? global : self) as any;
  window.customElements = options.customElements ||
    new CustomElementRegistry();
  window.document = new Document(window.customElements);
  window.window = window;
  window.HTMLElement = HTMLElement;
  window.HTMLUnknownElement = HTMLUnknownElement;
  // if (options.selector) {
  //   const $ = options.selector.$;
  //   const selector = options.selector.module ?
  //     options.selector.module(window) :
  //     require(options.selector.name);
  //   utils.querySelectorAll = function querySelectorAll(css) {
  //     return $(selector, this, css);
  //   };
  // }
  return window;
}
