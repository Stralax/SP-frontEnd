console.log('addArticle.js');

const articleNameInput = document.getElementById('articleNameInput');
const articleDescriptionInput = document.getElementById('articleDescriptionInput');
const articleCategoryInput = document.getElementById('articleCategoryInput');
const articleStartingPriceInput = document.getElementById('articleStartingPriceInput');
const submitArticleButton = document.getElementById('submitArticleButton');
const inputImage = document.getElementById('inputImage');
const imageUploadArea = document.getElementById('imageUploadArea');


articleNameInput.addEventListener('input', () => {
    console.log('Article Name Input Changed:', articleNameInput.value);
});

articleDescriptionInput.addEventListener('input', () => {
    console.log('Article Description Input Changed:', articleDescriptionInput.value);
});

articleCategoryInput.addEventListener('input', () => {
    console.log('Article Category Input Changed:', articleCategoryInput.value);
});

articleStartingPriceInput.addEventListener('input', () => {
    console.log('Article Starting Price Input Changed:', articleStartingPriceInput.value);
});

submitArticleButton.addEventListener('click', () => {
    console.log('Article Submit Button Clicked');
});

inputImage.addEventListener('change', () => {
    console.log("change");
    uploadImage(inputImage.files[0]);
});

imageUploadArea.addEventListener('dragover', (event) => {
    event.preventDefault();
});

imageUploadArea.addEventListener('drop', (event) => {
    event.preventDefault();
    uploadImage(event.dataTransfer.files[0]);
});


function uploadImage(image) {
    console.log('Image Selected:', image);
}