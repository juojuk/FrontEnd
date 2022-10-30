let numbers = [5,1,7,2,-9,8,2,7,9,4,-5,2,-6,8,-4,6];

function addParagraphToDiv(){
    const d = document.getElementsByTagName("div")[0];
     numbers.forEach(function(number, index) {
         number = "<p>Index #: "+index+" value: "+number+"</p>";
         d.innerHTML += number;
     });
}

addParagraphToDiv()
