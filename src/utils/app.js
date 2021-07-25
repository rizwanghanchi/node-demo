const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=0570d1b54f26e59a1e173745d1f8042c&query=diu'

// request({url:url, json:true},(err,res,body)=>{
//     const data=res.body

//     if(err){
//         console.error('err',err)
//         return
//     }else if(data.error){
//         console.error('err',data.error) 
//         return

//     }
//     console.log(data.current.weather_icons[0])
// })

const weatherDetails=(address,callback)=>{
    
    const url="http://api.weatherstack.com/current?access_key=0570d1b54f26e59a1e173745d1f8042c&query="+address

    request({url:url,json:true},(err,res,body)=>{

        if(err){
            callback(err)
        }else if(res.body.error){
            callback(res.body.error)
        }else{

            data={
                location : res.body.location.name,
                country : res.body.location.country,
                region : res.body.location.region,
                latLong : res.body.location.lat+","+res.body.location.lon
            }

            callback(null,data)
        }
    })
}

module.exports={weatherDetails}

// weatherDetails("lodo",(err,data)=>{

//     if(err){       
//         console.log("error",err)
//     }else{
//         console.log("data",data)
//     } 
// })