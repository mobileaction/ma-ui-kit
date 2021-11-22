import 'loki/configure-vue';
import '../css/root.css';
import '../css/system.css';

import {addParameters, configure} from '@storybook/vue'

const req = require.context('../src', true, /.stories.[jt]s$/);

const cssReq = require.context('!!raw-loader!../design-system', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map(filename => ({ filename, content: cssReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
    }
  }
} as any);
addParameters({
  options: {
    showPanel: true,
    panelPosition: "bottom",
  },
  docs: {
    inlineStories: true,
  },
} as any);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// configure(loadStories, module);
