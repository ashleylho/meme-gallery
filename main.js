var $gallery = document.querySelector('main');
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rhorizontal.w700.jpg',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://i.kym-cdn.com/entries/icons/mobile/000/039/399/ddw.jpg',
  'https://i.imgflip.com/51dy8a.jpg',
  'https://i.imgflip.com/4/dyi7z.jpg'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
