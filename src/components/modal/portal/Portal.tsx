import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");
type PortalProps = {
  children: React.ReactNode;
};
export default class Portal extends Component<PortalProps> {
  el: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
    this.el.classList.add("portal_container");
  }
  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
