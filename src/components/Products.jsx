
let data=[
    {id: 1, name:"Earphones", price:1200},
    {id: 2, name:"Wireless Charger", price:1000},
    {id: 3, name:"Phone", price:50000},
    {id: 4, name:"Casing", price:500}
]

export function Products() {
    let productList = data.map(product=> <div>
                                                            <h1>{product.name}</h1>
                                                            <p>Ksh.{product.price}</p>
                                                        </div>)
    // destructuring/unpacking values
    let productList2 = data.map(({id, name, price})=> <div>
        <h1>{name}</h1>
        <p>Ksh.{price}</p>
    </div>)

    return (
        <div className="container">
            <div className="row">
                {productList}
            </div>

        </div>
    )
}