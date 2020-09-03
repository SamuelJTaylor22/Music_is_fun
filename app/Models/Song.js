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

    <div onclick="app.songsController.select('${this._id}')" class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${this.albumArt}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${this.album}</p>
          <p class="card-text"><small class="text-muted">${this.title}</small></p>
        </div>
      </div>
    </div>
  </div>

        `;
  }
  get playlistTemplate() {
    return `
    <div onclick="app.playlistsController.select('${this._id}')" class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${this.albumArt}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${this.album}</p>
          <p class="card-text"><small class="text-muted">${this.title}</small></p>
        </div>
      </div>
    </div>
  </div>
 
        `;
  }
  get activeTemplate() {
    return `
        <div class="card">
          <img class="card-img-top" src="${this.albumArt}" alt="">
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <audio controls src="${this.preview}"></audio>
            <p class="card-text">${this.price}</p>
            ${this.Button}
            </div>
            </div>
            `;
  }

  get Button() {

    if (this.user) {
      return `
      <button type="button" class="btn btn-danger" onclick="app.playlistsController.removeSong('${this._id}')">Yeet Song</button>
      `
    }
    return `
    <button type="button" class="btn btn-success" onclick="app.songsController.addSong('${this._id}')">Add Song</button>
    `
  }

}
