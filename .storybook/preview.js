import React from "react";
import Center from "../src/components/Center/Center";
import { ThemeProvider } from "styled-components";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={{}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Center>
          <Story />
        </Center>
      </ThemeProvider>
    ),
    // (Story, context) => withConsole()(Story)(context),
    withKnobs,
  ],
};

export default preview;
