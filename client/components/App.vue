<template>
  <main id="app">
    <router-view></router-view>
    <footer class="bg-black-10 white-80 pv2 pv3-l ph3 ph5-ns">
        <p class="f6"><span class="dib mr4 mr5-ns">By @stormwarning</span>
            <a class="link white-80 hover-light-purple" href="https://github.com/stormwarning">GitHub</a> /
            <a class="link white-80 hover-light-purple" href="https://twitter.com/stormwarning">Twitter</a> /
            <a class="link white-80 hover-light-purple" href="http://tidaltheory.co/">Tidal Theory</a>
        </p>
    </footer>
  </main>
</template>

<style>
:root {
    --bg: #16191b;
    --fg: #e2e6e8;
}

body {
    color: var(--fg);
    background-color: var(--bg);
}

body > main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

article {
    flex: 1 0 auto;
}

.c2sc {
    text-transform: uppercase;
    font-variant-caps: all-small-caps;
    -ms-font-feature-settings: "smcp" 0, "c2sc";
}

@supports (font-variant-caps: all-small-caps) or (font-feature-settings: "c2sc") {
  .c2sc {
    text-transform: lowercase;
  }
}

@supports not (font-variant-caps: all-small-caps) {
  .c2sc {
    -webkit-font-feature-settings: "onum", "smcp" 0, "c2sc", "smcp", "c2sc";
    font-feature-settings: "onum", "smcp" 0, "c2sc", "smcp", "c2sc";
  }
}
</style>
