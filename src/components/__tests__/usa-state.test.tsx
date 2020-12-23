import React from "react"
import { render, screen } from "@testing-library/react"
import { USAState } from "../USA-state"
import { DATA } from "../data"
import userEvent from "@testing-library/user-event"

test("renders state path", () => {
  let states = Object.values(DATA)
  let state = states[Math.floor(Math.random() * states.length)]
  render(
    <svg>
      <USAState
        state={state.abbreviation}
        dimensions={state.dimensions}
        fill="#fff"
        onClickState={(e) => {}}
        stateName={state.name}
      />
    </svg>
  )
  expect(screen.getByText(state.name)).toBeInTheDocument()
})

test("renders state path and clicks", () => {
  let onClick = jest.fn()
  let states = Object.values(DATA)
  let state = states[Math.floor(Math.random() * states.length)]

  render(
    <svg>
      <USAState
        state={state.abbreviation}
        dimensions={state.dimensions}
        fill="#fff"
        onClickState={(e) => onClick(e.currentTarget.dataset.name)}
        stateName={state.name}
      />
    </svg>
  )
  userEvent.click(screen.getByText(state.name))
  expect(onClick).toHaveBeenCalledWith(state.abbreviation)
})
