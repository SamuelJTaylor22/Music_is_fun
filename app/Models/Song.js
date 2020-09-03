export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
    this.user = data.user || ''
  }

  get Template() {
    return `
    <div onclick="app.songsController.select('${this._id}')"class="card-body">
        <img src="${this.albumArt}" >
        <h3>${this.album}</h1>
        <h3>${this.title}</h1>
   </div>
        `;
  }
  get playlistTemplate() {
    return `
          <li onclick="app.playlistsController.select('${this._id}')">${this.title}</li> 
        `;
  }
  get activeTemplate() {
    return `
        <div class="card">
          <img class="card-img-top" src="${this.albumArt}" alt="">
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <p class="card-text">${this.price}</p>
            ${this.Button}
            </div>
            </div>
            `;
          }
          
   get Button(){

    if(this.user){
      return `
      <h1>test</h1>
      `
    } 
    return`
    <button type="button" class="btn btn-success" onclick="app.songsController.addSong(${this._id})">Add Song</button>
    ` 
   }       
          
        }
