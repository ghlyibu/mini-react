import createDOMElement from "./createDOMElement"
import mountElement from "./mountElement"

export default function mountNativeElement(virtualDOM, container) {
     let newElement = createDOMElement(virtualDOM)
     // 将转换的之后的DOM对象放置在页面中
     container.appendChild(newElement)
}