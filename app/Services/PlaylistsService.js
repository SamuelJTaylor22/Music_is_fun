import { sandBoxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";











class PlaylistsService{

  constructor(){}


   async getPlaylist(){
    let res = await sandBoxApi.get("")
    console.log(res.data)
    ProxyState.playlist = res.data.data
   }



}


export const playlistsService = new PlaylistsService