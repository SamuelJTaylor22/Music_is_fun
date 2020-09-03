import { ProxyState } from "../AppState.js";
import { playlistsService } from "../Services/PlaylistsService.js";


function _drawPlaylist(){
  let template = ""
  ProxyState.playlist.forEach(s => template += s.playlistTemplate)
  document.getElementById("playlist").innerHTML= template
}







export default class PlaylistsController{

  constructor(){
    ProxyState.on("playlist", _drawPlaylist)
    playlistsService.getPlaylist()
  }
  select(id){
    playlistsService.select(id)
  }




}