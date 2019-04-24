import React from 'react'
import Icon from 'src/components/Icons'
import styled from 'styled-components'
import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass'

import Text from 'src/components/Text'
import theme from 'src/themes/styled.theme'

export const BaseButton = styled(RebassButton)`
  min-height: ${props => props.theme.buttons.height};
  border-radius: ${props => props.theme.radii[1] + 'px'};
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  word-break: keep-all;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`
export const Label = styled(Text)`
  color: inherit;
`

// extend to allow any default button props (e.g. onClick) to also be passed
export interface IBtnProps extends React.ButtonHTMLAttributes<HTMLElement> {
  icon?: string
  disabled?: boolean
}

type BtnProps = IBtnProps & RebassButtonProps

export const Button = (props: BtnProps) => (
  <BaseButton {...props}>
    {props.icon && <Icon glyph={props.icon} />}
    <Label caps regular pl={'5px'}>
      {props.children}
    </Label>
  </BaseButton>
)

Button.defaultProps = {
  className: 'button',
  variant: 'primary',
  theme,
}
