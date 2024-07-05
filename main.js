var typed = new Typed(".auto-typed",{
    strings: ["បាល់ទាត់គឺជា", "វិធីល្អបំផុត", "ក្នុងការបង្កើតមិត្ត"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})
var typed = new Typed(".activiti",{
    strings: ["ពួកយើងទាំងអស់គ្នា", "គឺជា ONE DIRECTION"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})
var typed = new Typed(".activitii",{
    strings: ["រាល់គ្រប់ការប្រកួត", "ធ្វើឡើងដើម្បីបង្កើតមិត្ត"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})
var typed = new Typed(".activitiii",{
    strings: ["យើងទាំងអស់គ្នា", "រួមចំណែកអភិវឌ្ឍន៍", "វិស័យបាល់ទាត់នៅកម្ពុជា។"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

const btnMenu = document.getElementById('btnMenu');
const mobileNavbar = document.getElementById('mobile-navbar');
btnMenu.onclick = function(){
    mobileNavbar.classList.toggle('active');
} 