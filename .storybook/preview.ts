/**
 * This file extends the preview of stories and allows adding global parameters, decorators, etc.
 * For more information see: https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */
import 'loki/configure-vue';
import '../css/root.css';
import '../css/system.css';

const tokenContext = require.context( // get context for design system files
    '!!raw-loader!../design-system',
    true,
    /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(filename => ({
  filename: filename,
  content: tokenContext(filename).default
}));

/** an object of global parameters:
 *  https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
  designToken: {
    files: tokenFiles,
  },
  options: {
    showPanel: true,
    panelPosition: "bottom",
  },
  docs: {
    inlineStories: true,
  },
};
