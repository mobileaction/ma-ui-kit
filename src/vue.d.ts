declare module 'vue/types/vue' {
  interface Vue {
  }

  interface VueConstructor {
    $gtm: {
      trackView(screenName: string, path: string, rest?: Record<string, any>): void,
    }
  }
}
