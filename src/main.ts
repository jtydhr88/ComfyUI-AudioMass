import {app} from "../../../scripts/app.js";
import App from "@/App.vue";

const {ComfyButton} = window.comfyAPI.button


app.registerExtension({
    name: 'ComfyUI.AudioMass.TopMenu',
    setup() {
        function openAudioMass() {
            app.extensionManager?.dialog.showExtensionDialog({
                key: "global-audiomass",
                title: "ComfyUI AudioMass",
                component: App,
                dialogComponentProps: {
                    style: "width: 80vw; height: 80vh;",
                    maximizable: !0
                }
            });
        }

        app.menu?.settingsGroup.append(
            new ComfyButton({
                icon: 'image',
                tooltip: 'comfyui-audiomass',
                content: 'AudioMass',
                action: openAudioMass,
            }),
        )
    },
})