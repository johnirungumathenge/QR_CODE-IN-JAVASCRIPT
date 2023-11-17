const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg= wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innetText="Generating QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innetText="Generating QR code"
    })
 
    
})
qrInput.addEventListener('keyup', ()=> {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})