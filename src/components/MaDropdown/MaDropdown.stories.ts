import { withKnobs } from '@storybook/addon-knobs';
import MaDropdown from './MaDropdown.vue';

export default {
    title: 'MaDropdown',
    decorators: [withKnobs],
    parameters: {
        component: MaDropdown,
    },
};

export const Trigger = () => ({
    components: { MaDropdown },
    data() {
        return {
            menuItems: [
                { key: 1, title: 'Item1' },
                { key: 22, title: 'Item2' },
                { key: 333, title: 'Item3', checked: true },
            ],
            tooltip: { content: 'this is a tooltip', placement: 'top' },
            menuItemButton: { icon: 'plus', name: 'Add New Group' },
            buttonGroup: [
                { icon: 'trash', tooltip: 'Delete' },
            ],
        };
    },
    template:
        `
      <div class="m-2">
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['click']"
          content="Click Me"
          type="button"
          icon="book"
          :tooltip="tooltip"
          :menu-item-button="menuItemButton"
          :button-group="buttonGroup"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['click']"
          content="Click Me"
          type="button"
          icon="book"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['hover']"
          content="hover me"
          type="text"
          icon=""
          icon-size="large"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['hover, click']"
          content="hover and click me"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['contextmenu']"
          content="right click on here"
          type="text"
      >
      </ma-dropdown>
      </div>
      `,
});

Trigger.storyName = 'Trigger';
