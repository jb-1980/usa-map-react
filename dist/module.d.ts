type ClickHandler<E = SVGPathElement | SVGCircleElement, R = any> = (
  e: React.MouseEvent<E, MouseEvent>
) => R
type GetClickHandler = (stateKey: string) => ClickHandler
type CustomizeObj = {
  fill?: string
  clickHandler?: ClickHandler
}
interface Customize {
  [key: string]: CustomizeObj
}
