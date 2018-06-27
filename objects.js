var playlist={Django:['My Sweet','SBR'], Jimmy:"Undecided"}
updatePlaylist(playlist,'Fappy','Lavende')

console.log(playlist)

function updatePlaylist(obj,key,value){
  playlist[key]=value
}