import { withKnobs } from '@storybook/addon-knobs';
import MaMenu from './MaMenu.vue';

export default {
    title: 'MaMenu',
    decorators: [withKnobs],
    parameters: {
        component: MaMenu,
    },
};

export const Base = () => ({
    components: { MaMenu },
    data() {
        return {
            visible: false,
            parentMenu: [
                { titleShort: 'APP',icon: 'eye',overall: '/app-profile',showWatchList: true,
                    submenus: [
                        { link: '/app-profile',name: 'app-profile' },
                        { link: '/publisher',name: 'publisher' },
                        { link: '/featured-apps?store=ios',name: 'featured-apps' },
                        { link: '/categoryrankings',name: 'category-rankings' },
                        { link: '/review',name: 'review' },
                        { link: '/similar-apps',name: 'similar-apps',isNew: true },
                        { name: 'top-charts',
                            subpages: [
                                { link: '/leaderboard',name: 'leaderboard' },
                                { name: 'biggest-mover',link: '/leaderboard?p=biggest-mover' },
                                { name: 'biggest-loser',link: '/leaderboard?p=biggest-loser' },
                                { name: 'new-apps',link: '/leaderboard?p=new-apps' }],
                        }],
                    isActive: true },
                { titleShort: 'ASO',icon: 'crosshairs',overall: '/keyword',showWatchList: true,
                    submenus: [
                        { name: 'aso-basic',
                            subpages: [
                                { link: '/keyword',name: 'keyword-tracking' },
                                { link: '/keyword-optimization',name: 'keyword-optimization' },
                                { link: '/keyword-suggestion',name: 'keyword--suggestion' },
                                { link: '/keywordinvestigator',name: 'keyword-investigator' },
                                { link: '/keywordresearch',name: 'keyword-research' },
                                { link: '/keyword-explorer',name: 'keyword-explorer' },
                                { link: '/keyword-trends',name: 'keyword-trends' },
                                { link: '/translation',name: 'translation' },
                                { link: '/assets-analysis',name: 'assets-analysis',title: 'Creative Asset Hub' }],
                        },
                        { name: 'aso-advanced',subpages: [{ link: '/aso-report',name: 'aso-report' },
                            { link: '/visibility-report',name: 'visibility-report' },
                            { link: '/keywordintelligence',name: 'keyword-intelligence' },
                            { link: '/appupdatetimeline',name: 'app-update-timeline' },
                            { link: '/localization',name: 'localization' }] }],
                    isActive: false },
                { titleShort: 'SEARCH ADS',icon: 'rocket',overall: '/searchads/search-by-app',showWatchList: true,
                    submenus: [
                        { link: '/searchads/search-by-app',name: 'searchads-intel--app' },
                        { link: '/searchads/search-by-keyword',name: 'searchads-intel--keyword' },
                        { link: '/searchads/top-advertisers',name: 'searchads-intel--top-advertisers' }],
                    isActive: false },
                { titleShort: 'MARKET',icon: 'chart-bar',overall: '/market/app-analysis',showWatchList: false,
                    submenus: [
                        { link: '/market/app-analysis',name: 'market--app-analysis' },
                        { link: '/market/store-analysis',name: 'market--store-analysis' },
                        { link: '/market/publisher-analysis',name: 'market--publisher-analysis' },
                        { link: '/market/top-apps',name: 'market--top-apps' },
                        { link: '/market/top-publishers',name: 'market--top-publishers' }],
                    isActive: false },
            ],
        };
    },
    template:
        `
          <div class="m-2 p-2 w-12" style="background-color: #202348">
              <ma-menu
                  :menu-list="parentMenu"
                  parent-menu
              />
          </div>
        `,
});

Base.storyName = 'Base';
