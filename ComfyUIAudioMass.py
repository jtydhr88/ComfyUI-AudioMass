class ComfyUIAudioMass:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
            },
        }

    RETURN_TYPES = ()

    FUNCTION = "run"

    OUTPUT_NODE = True

    CATEGORY = "AudioMass"

    def run(self,  **kwargs):
        return None,

NODE_CLASS_MAPPINGS = {
    "ComfyUIAudioMass": ComfyUIAudioMass
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "ComfyUIAudioMass": "AudioMass"
}