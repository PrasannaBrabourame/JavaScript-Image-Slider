 var _imgPath = {
   "imageDetails": [{
       "Id": "F0001",
       "Name": "figure1.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
     },
     {
       "Id": "F0002",
       "Name": "figure2.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
     },
     {
       "Id": "F0003",
       "Name": "figure3.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'
     },
     {
       "Id": "F0004",
       "Name": "figure4.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png'
     },
     {
       "Id": "F0005",
       "Name": "figure5.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
     },
     {
       "Id": "F0006",
       "Name": "figure6.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'
     },
     {
       "Id": "F0007",
       "Name": "figure7.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'
     },
     {
       "Id": "F0008",
       "Name": "figure8.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/frymire.png'
     },
     {
       "Id": "F0009",
       "Name": "figure9.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/girl.png'
     },
     {
       "Id": "F00010",
       "Name": "figure10.jpg",
       "Src": 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'
     }
   ]
 }
 var currentImage, LastImage;

 function initLoader(arg_imgPath) {
   if (arg_imgPath.imageDetails.length > 0) {
     sliderImgTag.src = arg_imgPath.imageDetails[0]['Src'];
     sliderImgTag.setAttribute('cid', arg_imgPath.imageDetails[0]['Id']);
     sliderImgTag.setAttribute('alt', arg_imgPath.imageDetails[0]['name']);
     currentImage = 0;
     document.querySelector('.Prod_Arrow.left').style.visibility = "hidden"
   }
   document.querySelector('.Prod_Arrow.right').addEventListener('click', function() {
     btnArrowShift((currentImage + 1), true);
   })
   document.querySelector('.Prod_Arrow.left').addEventListener('click', function() {
     btnArrowShift((currentImage - 1), false);
   })
 }
 initLoader(_imgPath);
 document.querySelector('.Prod_Arrow.right').addEventListener('click', function() {
   btnArrowShift((currentImage + 1), true);
 })
 document.querySelector('.Prod_Arrow.left').addEventListener('click', function() {
   btnArrowShift((currentImage - 1), false);
 })

 function btnArrowShift(value, types) {
   if (types) {
     if (value != _imgPath.imageDetails.length) {
       document.querySelector('.Prod_Arrow.left').style.visibility = "visible"
       sliderImgTag.src = _imgPath.imageDetails[value]['Src'];
       sliderImgTag.setAttribute('cid', _imgPath.imageDetails[value]['Id']);
       sliderImgTag.setAttribute('alt', _imgPath.imageDetails[value]['name']);
       currentImage = value;
       if (value === (_imgPath.imageDetails.length - 1)) {
         document.querySelector('.Prod_Arrow.right').style.visibility = "hidden";
       }
     }
   } else {
     if (value != _imgPath.imageDetails.length) {
       document.querySelector('.Prod_Arrow.right').style.visibility = "visible"
       sliderImgTag.src = _imgPath.imageDetails[value]['Src'];
       sliderImgTag.setAttribute('cid', _imgPath.imageDetails[value]['Id']);
       sliderImgTag.setAttribute('alt', _imgPath.imageDetails[value]['name']);
       currentImage = value;
       if (value === 0) {
         document.querySelector('.Prod_Arrow.left').style.visibility = "hidden";
       }
     }
   }
 }
