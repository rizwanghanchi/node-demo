console.log("javascript is up and running")


const getWeatherDetails=(location)=>{
    
fetch('/weather?address='+location).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            mssg1.textContent=data.error.info
            mssg2.textContent=""
        }
        else{
            console.log(data.data)
            mssg1.textContent="Weather Details of "+data.data.location+" :"
            mssg2.textContent=data.data.latLong
        }
    })    
})
}


const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const mssg1=document.querySelector('#mssg1')
const mssg2=document.querySelector('#mssg2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const locationVal=search.value

    
mssg1.textContent="loading........"
    getWeatherDetails(locationVal)
})