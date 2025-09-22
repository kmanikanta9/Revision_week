

async function fetchData(){
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        let result = await response.json()
        let data = result.categories
        console.log(data)

        let first = document.getElementById('first')
        

        data.map((item,index)=>{
            let secondDiv = document.createElement('div')
            let p1 = document.createElement('p')
            p1.innerText =item.strCategory
        
            let image = document.createElement('img')
            image.src = item.strCategoryThumb
            let p2 = document.createElement('p')
            p2.innerText =item.strCategoryDescription
            secondDiv.append(p1,image,p2)
            
            first.append(secondDiv)


            secondDiv.addEventListener('click',()=>{
                setTimeout(()=>{
                    alert('Order is being prepared.')
                    setTimeout(()=>{
                        alert('Order is dispatched.')
                        setTimeout(()=>{
                            alert('Food deliverd, enjoy your meal.')
                        },3000)
                    },2000)
                },2000)
                
            })
        })

    } catch (error) {
        console.log(error)
    }
}

fetchData()