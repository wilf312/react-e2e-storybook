import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

const Button = (props) => {
  return <button disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
}
export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button disabled={boolean("Disabled", false)} onClick={action('button-click')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
