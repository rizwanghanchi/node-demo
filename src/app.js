const express=require('express')
const path=require('path')
const hbs=require('hbs')
const fun=require('./utils/app')


const app=express()
const port=3000

const publicDir=path.join(__dirname,'../public')
const viewDir=path.join(__dirname,'../templates/views')
const partialDir=path.join(__dirname,'../templates/partials')

console.log(__dirname,viewDir)

// app.get('/',(req,res)=>{
//     res.send('Hello Express!')
// })

app.set('view engine','hbs')
app.set('views',viewDir)
hbs.registerPartials(partialDir)

app.use(express.static(publicDir))

app.get('/help',(req,res)=>{
    res.send('Your help is '+req.query.id)
})

app.get('',(req,res)=>{
    res.render('index',{
        name:'pollard',
        player:{
            name:'K Pollard',
            team:'West Indies',
            runs:[{
                first:10,
                second:33
            },{
                first:101,
                second:331
            },{
                first:102,
                second:332
            }]
        }
    })
})

app.all('/about',(req,res)=>{
    res.render('about',{
        name:'Rizwan'
    })
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact US</h1>")
})


app.get('/weather',(req,res)=>{

    fun.weatherDetails(req.query.address,(error,data)=>{

        if(error){
            return res.send({error})
        }
            res.send({data})


    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Page Not Found',
        name:'Rizwan ghanchi'
    })
})

app.listen(port,()=>{
    console.log("Server is Started")
})