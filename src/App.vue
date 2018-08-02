<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class App extends Vue {
    created(): void {
        // Safari 禁用双击缩放
        (function disabledDoubleTouch() {
            let lastTouchEnd = 0;
            let now = null;
            document.addEventListener('touchend', function(event) {
                if (event.touches.length === 1) {
                    now = new Date().getTime();
                    if (now - lastTouchEnd <= 300) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                }
            }, false);
        })();
    }
}
</script>
