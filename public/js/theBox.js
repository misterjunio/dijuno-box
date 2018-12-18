// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
// Create a storage reference from our storage service
const storageRef = storage.ref();
// Create child references
const musicRef = storageRef.child('music');

const currentSong = storageRef.child('music/amelie.mp3');

$(document).ready(function() {
	console.log("currentSong", currentSong);
	currentSong.getDownloadURL().then(url => {
		console.log("url", url);
		$("#musicSrc").attr("src", url);
	})
	$("#theBox").click(function() {
		$("#quote").fadeIn(2500);
		$("#theBox").fadeOut(2500, function() {
			$("#music").prop('controls', true);
			$("#music")[0].play();
		});
	});
});
