from .ComfyUIAudioMass import NODE_CLASS_MAPPINGS
import os
import nodes
from aiohttp import web
import importlib
import execution
import logging
from pathlib import Path
import uuid
import json
import datetime

js_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), "js")

nodes.EXTENSION_WEB_DIRS["ComfyUI-AudioMass"] = js_dir

__all__ = ['NODE_CLASS_MAPPINGS']

from server import PromptServer

routes = PromptServer.instance.routes

@routes.get('/audiomass')
async def serve_audiomass_index(request):
    audiomass_path = Path(__file__).parent / 'audiomass-ui' / 'index.html'
    if audiomass_path.exists():
        return web.FileResponse(audiomass_path)
    else:
        return web.Response(text="AudioMass UI not found", status=404)

@routes.get('/audiomass/{path:.*}')
async def serve_audiomass_static(request):
    path = request.match_info.get('path', '')
    if '..' in path or path.startswith('/'):
        return web.Response(text="Invalid path", status=400)
    
    audiomass_path = Path(__file__).parent / 'audiomass-ui' / path

    if audiomass_path.is_dir():
        index_path = audiomass_path / 'index.html'
        if index_path.exists():
            return web.FileResponse(index_path)

    if audiomass_path.exists() and audiomass_path.is_file():
        return web.FileResponse(audiomass_path)
    
    return web.Response(text="File not found", status=404)