import { sandBoxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";











class PlaylistsService{

  constructor(){}


   async getPlaylist(){
    let res = await sandBoxApi.get("")
    console.log(res.data)
    ProxyState.playlist = res.data.data.map(s => new Song(s))
   }


   select(id) {
    let found = ProxyState.playlist.find(s => s._id == id)
    ProxyState.activeSong = found
    console.log(ProxyState.activeSong)
   }
}


export const playlistsService = new PlaylistsService