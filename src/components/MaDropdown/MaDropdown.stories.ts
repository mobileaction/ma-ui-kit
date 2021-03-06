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
                { key: 1, title: 'Item1', description: 'test', image: 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/33/93/f9/3393f926-c05c-ab64-8655-6728f8f5fbe5/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/60x60.png' },
                { key: 22, title: 'Item2',  buttonGroup: [
                    { icon: 'trash', tooltip: 'Delete' },
                    { icon: 'key', tooltip: 'Key' },
                ] },
                { key: 333, title: 'Item3', checked: true },
            ],
            iconClass: 'green',
            tooltip: { content: 'this is a tooltip', placement: 'top' },
            menuItemButton: { icon: 'plus', name: 'Add New Group' },
            data: [
                { code: 'test1', name: 'test 1' },
                { code: 'test2', name: 'test 2' },
                { code: 'test3', name: 'test 3' },
            ],
        };
    },
    template:
        `
      <div class="m-2">
      <ma-dropdown
          class="m-2"
          content="Click Me"
          :menu-items="menuItems"
          selected-image="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/33/93/f9/3393f926-c05c-ab64-8655-6728f8f5fbe5/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/60x60.png"
          :menu-item-button="menuItemButton"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          content="Click Me"
          button-variant="info"
          :menu-item-button="menuItemButton"
      >
        <template #externalMenuItems>
          <div slot="overlay">
            <div
                v-for="(item) in data"
                :key="item.code"
            >
              <span class="mr-2"> {{ item.name }}</span>
            </div>
          </div>
        </template>
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          content="Click Me"
          icon="book"
          icon-color="green"
          :auto-content-change="false"
      >
      </ma-dropdown>
      <ma-dropdown
          class="m-2"
          :menu-items="menuItems"
          :trigger="['hover']"
          content="hover me"
          type="text"
          icon-size="large"
          :tooltip="tooltip"
          :menu-item-button="menuItemButton"
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
