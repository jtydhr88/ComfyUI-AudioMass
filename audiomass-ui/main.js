// Main entry point for AudioMass
// Import all the JavaScript modules in the correct order

// Import styles
import './main.css';

// Core libraries - These need to be loaded first
import './dist/wavesurfer.js';
import './dist/plugin/wavesurfer.regions.js';
import './oneup.js';

// Core application files
import './app.js';
import './keys.js';
import './contextmenu.js';
import './ui-fx.js';
import './ui.js';
import './modal.js';
import './state.js';
import './engine.js';
import './actions.js';
import './drag.js';
import './recorder.js';

// Feature modules
import './welcome.js';
import './fx-pg-eq.js';
import './fx-auto.js';
import './local.js';
import './id3.js';
import './lzma.js';

// WebAssembly modules
import './flac.js';
import './lame.js';
import './wav.js';
import './libflac.js';
import './rnn_denoise.js';
import './lz4-block-codec-wasm.js';

// Initialize the editor
if (typeof PKAudioEditor !== 'undefined' && PKAudioEditor.init) {
  window.addEventListener('DOMContentLoaded', () => {
    const editor = PKAudioEditor.init('app');
    
    // Register service worker if available
    if ('serviceWorker' in navigator) {
      try {
        // navigator.serviceWorker.register('./sw.js');
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }
  });
}