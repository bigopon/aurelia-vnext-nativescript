import { Node } from './Node';
import { Document } from './Document';

// interface DocumentType // https://dom.spec.whatwg.org/#documenttype
export class DocumentType extends Node {
  constructor(ownerDocument: Document) {
    super(ownerDocument);
    this.nodeType = Node.DOCUMENT_TYPE_NODE;
    this.name = 'html';
  }

  toString(): string {
    return '<!DOCTYPE ' + this.name + '>';
  }
}
