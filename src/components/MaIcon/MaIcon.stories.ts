import MaIcon from './MaIcon.vue';

export default {
    title: 'MaIcon',

    parameters: {
        component:
        MaIcon,
    },
};

export const Sizes = () => ({
    components: { MaIcon },
    template: `
      <div>
      <div class="m-2">
        <ma-icon icon="spinner" size="xs"/>
        <ma-icon icon="spinner" spin/>
        <ma-icon icon="spinner" size="2x"/>
        <ma-icon icon="spinner" size="3x"/>
        <ma-icon icon="spinner" size="5x"/>
        <ma-icon icon="spinner" size="7x"/>
      </div>
      </div>
    `,
});
Sizes.storyName = 'sizes';

export const Icons = () => ({
    components: { MaIcon },
    methods: {
        copyIcon(iconName) {
            const copyText = '<ma-icon icon="' + iconName + '" />';
            navigator.clipboard.writeText(copyText).then(() => {
                alert('Copied : ' + copyText);
            })
                .catch((ex) => {
                    console.log('Failed to copy' + ex);
                });
        },
    },
    template: `
      <div class="m-2">
        <div class="grid grid-cols-5 gap-8 text-center text-sm mt-1">
        
        <div @click="copyIcon('plus')" class="cursor-pointer">
          <ma-icon icon="plus"/>
          <div> plus</div>
        </div>

        <div @click="copyIcon('info-circle')" class="cursor-pointer">
          <ma-icon icon="info-circle"/>
          <div> info circle</div>
        </div>

        <div @click="copyIcon('download')" class="cursor-pointer">
          <ma-icon icon="download"/>
          <div> download</div>
        </div>

        <div @click="copyIcon('question-circle')" class="cursor-pointer">
          <ma-icon icon="question-circle"/>
          <div> question circle</div>
        </div>

        <div @click="copyIcon('check-circle')" class="cursor-pointer">
          <ma-icon icon="check-circle"/>
          <div> check circle</div>
        </div>
        
        <div @click="copyIcon('plus-circle')" class="cursor-pointer">
          <ma-icon icon="plus-circle"/>
          <div> plus circle</div>
        </div>

        <div @click="copyIcon('check')" class="cursor-pointer">
          <ma-icon icon="check"/>
          <div> check</div>
        </div>

        <div @click="copyIcon('envelope')" class="cursor-pointer">
          <ma-icon icon="envelope"/>
          <div> envelope</div>
        </div>

        <div @click="copyIcon('user')" class="cursor-pointer">
          <ma-icon icon="user"/>
          <div> user</div>
        </div>

        <div @click="copyIcon('info')" class="cursor-pointer">
          <ma-icon icon="info"/>
          <div> info</div>
        </div>


        <div @click="copyIcon('trash-alt')" class="cursor-pointer">
          <ma-icon icon="trash-alt"/>
          <div> trash alt</div>
        </div>

        <div @click="copyIcon('spinner')" class="cursor-pointer">
          <ma-icon icon="spinner"/>
          <div> spinner</div>
        </div>

        <div @click="copyIcon('sync')" class="cursor-pointer">
          <ma-icon icon="sync"/>
          <div> sync</div>
        </div>

        <div @click="copyIcon('eye')" class="cursor-pointer">
          <ma-icon icon="eye"/>
          <div> eye</div>
        </div>

        <div @click="copyIcon('eye-slash')" class="cursor-pointer">
          <ma-icon icon="eye-slash"/>
          <div> eye-slash</div>
        </div>

        <div @click="copyIcon('copy')" class="cursor-pointer">
          <ma-icon icon="copy"/>
          <div> copy</div>
        </div>

        <div @click="copyIcon('chart-line')" class="cursor-pointer">
          <ma-icon icon="chart-line"/>
          <div> chart-line</div>
        </div>

        <div @click="copyIcon('bell')" class="cursor-pointer">
          <ma-icon icon="bell"/>
          <div> bell</div>
        </div>

        <div @click="copyIcon('bell-slash')" class="cursor-pointer">
          <ma-icon icon="bell-slash"/>
          <div> bell slash</div>
        </div>

        <div @click="copyIcon('lock')" class="cursor-pointer">
          <ma-icon icon="lock"/>
          <div> lock</div>
        </div>

        <div @click="copyIcon('comment')" class="cursor-pointer">
          <ma-icon icon="comment"/>
          <div> comment</div>
        </div>

        <div @click="copyIcon('align-left')" class="cursor-pointer">
          <ma-icon icon="align-left"/>
          <div> align left</div>
        </div>

        <div @click="copyIcon('angle-down')" class="cursor-pointer">
          <ma-icon icon="angle-down"/>
          <div> angle down</div>
        </div>

        <div @click="copyIcon('angle-right')" class="cursor-pointer">
          <ma-icon icon="angle-right"/>
          <div> angle right</div>
        </div>

        <div @click="copyIcon('angle-left')" class="cursor-pointer">
          <ma-icon icon="angle-left"/>
          <div> angle left</div>
        </div>

        <div @click="copyIcon('arrow-left')" class="cursor-pointer">
          <ma-icon icon="arrow-left"/>
          <div> arrow left</div>
        </div>

        <div @click="copyIcon('arrow-right')" class="cursor-pointer">
          <ma-icon icon="arrow-right"/>
          <div> arrow right</div>
        </div>

        <div @click="copyIcon('arrow-up')" class="cursor-pointer">
          <ma-icon icon="arrow-up"/>
          <div> arrow up</div>
        </div>

        <div @click="copyIcon('arrow-down')" class="cursor-pointer">
          <ma-icon icon="arrow-down"/>
          <div> arrow down</div>
        </div>

        <div @click="copyIcon('arrows-alt-h')" class="cursor-pointer">
          <ma-icon icon="arrows-alt-h"/>
          <div> arrows-alt-h</div>
        </div>

        <div @click="copyIcon('ad')" class="cursor-pointer">
          <ma-icon icon="ad"/>
          <div> ad</div>
        </div>

        <div @click="copyIcon('ad')" class="cursor-pointer">
          <ma-icon icon="ad"/>
          <div> ad</div>
        </div>

        <div @click="copyIcon('ban')" class="cursor-pointer">
          <ma-icon icon="ban"/>
          <div> ban</div>
        </div>

        <div @click="copyIcon('bookmark')" class="cursor-pointer">
          <ma-icon icon="bookmark"/>
          <div> bookmark </div>
        </div>

        <div @click="copyIcon('briefcase')" class="cursor-pointer">
          <ma-icon icon="briefcase"/>
          <div> briefcase </div>
        </div>

        <div @click="copyIcon('bullhorn')" class="cursor-pointer">
          <ma-icon icon="bullhorn"/>
          <div> bullhorn </div>
        </div>

        <div @click="copyIcon('caret-down')" class="cursor-pointer">
          <ma-icon icon="caret-down"/>
          <div> caret-down </div>
        </div>

        <div @click="copyIcon('caret-left')" class="cursor-pointer">
          <ma-icon icon="caret-left"/>
          <div> caret left </div>
        </div>

        <div @click="copyIcon('caret-right')" class="cursor-pointer">
          <ma-icon icon="caret-right"/>
          <div> caret right</div>
        </div>

        <div @click="copyIcon('caret-up')" class="cursor-pointer">
          <ma-icon icon="caret-up"/>
          <div> caret up </div>
        </div>

        <div @click="copyIcon('chart-bar')" class="cursor-pointer">
          <ma-icon icon="chart-bar"/>
          <div> chart bar </div>
        </div>

        <div @click="copyIcon('check-square')" class="cursor-pointer">
          <ma-icon icon="check-square"/>
          <div> check square </div>
        </div>

        <div @click="copyIcon('chevron-up')" class="cursor-pointer">
          <ma-icon icon="chevron-up"/>
          <div> chevron up </div>
        </div>

        <div @click="copyIcon('chevron-down')" class="cursor-pointer">
          <ma-icon icon="chevron-down"/>
          <div> chevron down </div>
        </div>

        <div @click="copyIcon('chevron-right')" class="cursor-pointer">
          <ma-icon icon="chevron-right"/>
          <div> chevron right</div>
        </div>

        <div @click="copyIcon('chevron-left')" class="cursor-pointer">
          <ma-icon icon="chevron-left"/>
          <div> chevron left </div>
        </div>

        <div @click="copyIcon('circle')" class="cursor-pointer">
          <ma-icon icon="circle"/>
          <div> circle </div>
        </div>

        <div @click="copyIcon('credit-card')" class="cursor-pointer">
          <ma-icon icon="credit-card"/>
          <div> credit card </div>
        </div>

        <div @click="copyIcon('cog')" class="cursor-pointer">
          <ma-icon icon="cog"/>
          <div> cog </div>
        </div>

        <div @click="copyIcon('cogs')" class="cursor-pointer">
          <ma-icon icon="cogs"/>
          <div> cogs </div>
        </div>

        <div @click="copyIcon('compress-alt')" class="cursor-pointer">
          <ma-icon icon="compress-alt"/>
          <div> compress alt</div>
        </div>

        <div @click="copyIcon('caret-up')" class="cursor-pointer">
          <ma-icon icon="caret-up"/>
          <div> caret up </div>
        </div>
        
        <div @click="copyIcon('crosshairs')" class="cursor-pointer">
          <ma-icon icon="crosshairs"/>
          <div> crosshairs </div>
        </div>

        <div @click="copyIcon('database')" class="cursor-pointer">
          <ma-icon icon="database"/>
          <div> database </div>
        </div>

        <div @click="copyIcon('dot-circle')" class="cursor-pointer">
          <ma-icon icon="dot-circle"/>
          <div> dot circle </div>
        </div>

        <div @click="copyIcon('edit')" class="cursor-pointer">
          <ma-icon icon="edit"/>
          <div> edit </div>
        </div>

        <div @click="copyIcon('ellipsis-h')" class="cursor-pointer">
          <ma-icon icon="ellipsis-h"/>
          <div> ellipsis-h </div>
        </div>

        <div @click="copyIcon('exclamation')" class="cursor-pointer">
          <ma-icon icon="exclamation"/>
          <div> exclamation </div>
        </div>

        <div @click="copyIcon('exclamation-circle')" class="cursor-pointer">
          <ma-icon icon="exclamation-circle"/>
          <div> exclamation circle </div>
        </div>

        <div @click="copyIcon('exclamation-triangle')" class="cursor-pointer">
          <ma-icon icon="exclamation-triangle"/>
          <div> exclamation triangle </div>
        </div>

        <div @click="copyIcon('expand-alt')" class="cursor-pointer">
          <ma-icon icon="expand-alt"/>
          <div> expand alt </div>
        </div>

        <div @click="copyIcon('external-link-alt')" class="cursor-pointer">
          <ma-icon icon="external-link-alt"/>
          <div> external-link-al </div>
        </div>
      
          <div @click="copyIcon('equals')" class="cursor-pointer">
            <ma-icon icon="equals"/>
            <div> equals </div>
          </div>

          <div @click="copyIcon('globe')" class="cursor-pointer">
            <ma-icon icon="globe"/>
            <div> globe </div>
          </div>

          <div @click="copyIcon('key')" class="cursor-pointer">
            <ma-icon icon="key"/>
            <div> key </div>
          </div>
          
          <div @click="copyIcon('layer-group')" class="cursor-pointer">
            <ma-icon icon="layer-group"/>
            <div> layer-group </div>
          </div>
        
          <div @click="copyIcon('minus')" class="cursor-pointer">
            <ma-icon icon="minus"/>
            <div> minus </div>
          </div>
      
          <div @click="copyIcon('play-circle')" class="cursor-pointer">
            <ma-icon icon="play-circle"/>
            <div> play-circle </div>
          </div>
        
          <div @click="copyIcon('plus-square')" class="cursor-pointer">
            <ma-icon icon="plus-square"/>
            <div> plus square </div>
          </div>
       
          <div @click="copyIcon('plug')" class="cursor-pointer">
            <ma-icon icon="plug"/>
            <div> plug </div>
          </div>
      
          <div @click="copyIcon('question')" class="cursor-pointer">
            <ma-icon icon="question"/>
            <div> question </div>
          </div>
       
          <div @click="copyIcon('rocket')" class="cursor-pointer">
            <ma-icon icon="rocket"/>
            <div> rocket </div>
          </div>
       
          <div @click="copyIcon('search')" class="cursor-pointer">
            <ma-icon icon="search"/>
            <div> search </div>
          </div>
        
          <div @click="copyIcon('sign-out-alt')" class="cursor-pointer">
            <ma-icon icon="sign-out-alt"/>
            <div> sign-out-alt </div>
          </div>
       
          <div @click="copyIcon('slash')" class="cursor-pointer">
            <ma-icon icon="slash"/>
            <div> slash </div>
          </div>
       
          <div @click="copyIcon('star')" class="cursor-pointer">
            <ma-icon icon="star"/>
            <div> star </div>
          </div>
       
          <div @click="copyIcon('times')" class="cursor-pointer">
            <ma-icon icon="times"/>
            <div> times </div>
          </div>
        
          <div @click="copyIcon('times-circle')" class="cursor-pointer">
            <ma-icon icon="times-circle"/>
            <div> times circle </div>
          </div>
       
          <div @click="copyIcon('users-cog')" class="cursor-pointer">
            <ma-icon icon="users-cog"/>
            <div> users cog </div>
          </div>
        
          <div @click="copyIcon('upload')" class="cursor-pointer">
            <ma-icon icon="upload"/>
            <div> upload </div>
          </div>
        
          <div @click="copyIcon('list-ol')" class="cursor-pointer">
            <ma-icon icon="list-ol"/>
            <div> list ol </div>
          </div>
       
          <div @click="copyIcon('file-image')" class="cursor-pointer">
            <ma-icon icon="file-image"/>
            <div> file-image </div>
          </div>
       
          <div @click="copyIcon('camera')" class="cursor-pointer">
            <ma-icon icon="camera"/>
            <div> camera </div>
          </div>
        
          <div @click="copyIcon('share-alt')" class="cursor-pointer">
            <ma-icon icon="share-alt"/>
            <div> share alt </div>
          </div>
        
          <div @click="copyIcon('shield-alt')" class="cursor-pointer">
            <ma-icon icon="shield-alt"/>
            <div> shield alt </div>
          </div>
        
          <div @click="copyIcon('mobile-alt')" class="cursor-pointer">
            <ma-icon icon="mobile-alt"/>
            <div> mobile alt </div>
          </div>
        
          <div @click="copyIcon('money-bill-alt')" class="cursor-pointer">
            <ma-icon icon="money-bill-alt"/>
            <div> money bill alt </div>
          </div>
       
          <div @click="copyIcon('clock')" class="cursor-pointer">
            <ma-icon icon="clock"/>
            <div> clock </div>
          </div>
        
          <div @click="copyIcon('code-branch')" class="cursor-pointer">
            <ma-icon icon="code-branch"/>
            <div> code-branch </div>
          </div>
        
          <div @click="copyIcon('file')" class="cursor-pointer">
            <ma-icon icon="file"/>
            <div> file </div>
          </div>
        
          <div @click="copyIcon('file-alt')" class="cursor-pointer">
            <ma-icon icon="file-alt"/>
            <div> file alt </div>
          </div>
       
      
          <div @click="copyIcon('image')" class="cursor-pointer">
            <ma-icon icon="image"/>
            <div> image </div>
          </div>
       
          <div @click="copyIcon('link')" class="cursor-pointer">
            <ma-icon icon="link"/>
            <div> link </div>
          </div>
       
          <div @click="copyIcon('dollar-sign')" class="cursor-pointer">
            <ma-icon icon="dollar-sign"/>
            <div> dollar-sign </div>
          </div>
      
          <div @click="copyIcon('sticky-note')" class="cursor-pointer">
            <ma-icon icon="sticky-note"/>
            <div> sticky-note </div>
          </div>
        
          <div @click="copyIcon('id-badge')" class="cursor-pointer">
            <ma-icon icon="id-badge"/>
            <div> id-badge </div>
          </div>
        
          <div @click="copyIcon('th')" class="cursor-pointer">
            <ma-icon icon="th"/>
            <div> th </div>
          </div>
       
          <div @click="copyIcon('text-width')" class="cursor-pointer">
            <ma-icon icon="text-width"/>
            <div> text width </div>
          </div>
       
          <div @click="copyIcon('id-card')" class="cursor-pointer">
            <ma-icon icon="id-card"/>
            <div> id card </div>
          </div>
        
          <div @click="copyIcon('angle-double-up')" class="cursor-pointer">
            <ma-icon icon="angle-double-up"/>
            <div> angle-double-up </div>
          </div>
       
          <div @click="copyIcon('drafting-compass')" class="cursor-pointer">
            <ma-icon icon="drafting-compass"/>
            <div> drafting compass </div>
          </div>
      
          <div @click="copyIcon('graduation-cap')" class="cursor-pointer">
            <ma-icon icon="graduation-cap"/>
            <div> graduation cap </div>
          </div>
      
          <div @click="copyIcon('chart-area')" class="cursor-pointer">
            <ma-icon icon="chart-area"/>
            <div> chart area </div>
          </div>
      
          <div @click="copyIcon('tag')" class="cursor-pointer">
            <ma-icon icon="tag"/>
            <div> tag </div>
          </div>
       
          <div @click="copyIcon('trash')" class="cursor-pointer">
            <ma-icon icon="trash"/>
            <div> trash </div>
          </div>
        
          <div @click="copyIcon('bars')" class="cursor-pointer">
            <ma-icon icon="bars"/>
            <div> bars </div>
          </div>
        
          <div @click="copyIcon('redo')" class="cursor-pointer">
            <ma-icon icon="redo"/>
            <div> redo </div>
          </div>
        
          <div @click="copyIcon('video')" class="cursor-pointer">
            <ma-icon icon="video"/>
            <div> video </div>
          </div>
       
          <div @click="copyIcon('book')" class="cursor-pointer">
            <ma-icon icon="book"/>
            <div> book </div>
          </div>

          <div @click="copyIcon('calendar')" class="cursor-pointer">
            <ma-icon icon="calendar"/>
            <div> calendar </div>
          </div>

          <div @click="copyIcon('calendar-alt')" class="cursor-pointer">
            <ma-icon icon="calendar-alt"/>
            <div> calendar-alt </div>
          </div>
      </div>
      
      </div>
    `,
});
Icons.storyName = 'icons';

export const Colors = () => ({
    components: { MaIcon },
    template: `
      <div class="m-p-10 m-d-flex">
      <div class="m-d-flex m-bg-purple-800">
        <p class="m-mx-10 m-p-10">
          <ma-icon icon="plus" color="white"/>
        </p>
        <p class="m-bg-purple-800 m-mx-10 m-p-10">
          <ma-icon icon="plus" size="2x" color="white"/>
        </p>
        <p class="m-bg-purple-800 m-mx-10 m-p-10">
          <ma-icon icon="plus" size="3x" color="white"/>
        </p>
        <p class="m-bg-purple-800 m-mx-10 m-p-10">
          <ma-icon icon="plus" size="5x" color="white"/>
        </p>
      </div>
      </div>
    `,
});
Colors.storyName = 'colors';

