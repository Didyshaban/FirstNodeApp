const fs = require('fs');

//readFiles
//  fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
//  })

//write Files

// fs.writeFile('./docs/blog1.txt', 'Hello , gang',()=>{
//     console.log('file is written');
// });

//make directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
        
//     })
    
// }else{
//     if(fs.existsSync('./assets')){
//         fs.rmdir('./assets',(err)=>{
//             if(err){
//                 console.log(err)
//             }
//             console.log('folder deleted')
            
//         })
//     }
// }


// delete files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            
            console.log(err)
        }
        console.log('file deleted')
       
    })
}