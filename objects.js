var playlist={Django:'My Sweet', Jimmy:"Undecided"}
updatePlaylist(playlist,'Fappy','Lavende')

console.log(playlist)

function updatePlaylist(obj,key,value){
  playlist[key]=value
}

function removeFromPlaylist(obj,key){
  delete playlist.key
}