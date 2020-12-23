import React from "react"

type USAStateProps = {
  state: string
  dimensions: string
  fill: string
  onClickState: ClickHandler
  stateName: string
  hideStateTitle?: boolean
}
export const USAState = ({
  state,
  dimensions,
  fill,
  onClickState,
  stateName,
  hideStateTitle,
}: USAStateProps) => {
  return (
    <path
      d={dimensions}
      fill={fill}
      data-name={state}
      className={`${state} state`}
      onClick={onClickState}
    >
      {hideStateTitle ? null : <title>{stateName}</title>}
    </path>
  )
}
