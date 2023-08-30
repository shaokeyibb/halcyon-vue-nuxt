import {addComponent, defineNuxtModule} from "@nuxt/kit";
import {Halcyon} from "halcyon-vue/plugin";
import components from "halcyon-vue";

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.options.vite.plugins = nuxt.options.vite.plugins || []
        nuxt.options.vite.plugins.push(Halcyon(options))

        nuxt.options.css.push("halcyon:reset.css", "halcyon:theme.css", "halcyon:base.css", "halcyon-vue/style")

        for (const component in components) {
            addComponent({
                name: component,
                export: component,
                filePath: "halcyon-vue",
            })
        }
    }
})