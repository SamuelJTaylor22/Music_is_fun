import { ProxyState } from "../AppState.js";
import { playlistsService } from "../Services/PlaylistsService.js";


function _draw(){}







export default class PlaylistsController{

  constructor(){
    ProxyState.on("playlist", _draw)
    playlistsService.getPlaylist()
  }





}