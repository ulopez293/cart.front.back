
function Products({ car, setCar }) {

    const remove = (e) => {
        const name = e.target.parentNode.getAttribute('name')
        const auxCar = [...car]
        auxCar.map(item => {
            if (item.code == name) return { ...item, amount: (item.amount) ? item.amount-- : 0 }
            return item
        })
        setCar([...auxCar])
    }

    const add = (e) => {
        const name = e.target.parentNode.getAttribute('name')
        const auxCar = [...car]
        auxCar.map(item => {
            if (item.code == name) return { ...item, amount: item.amount++ }
            return item
        })
        setCar([...auxCar])
    }

    return (
        <div className="container text-center">
            <div className="row">
                {
                    car.map((item, id) => {
                        return (
                            <div className="col" name={item.code} key={id}>
                                <img src={item.src} width="50" height="50" />
                                <p>{item.name}</p>
                                <button onClick={add} type="button" className="btn btn-primary">add</button>
                                <button onClick={remove} type="button" className="btn btn-danger">remove</button>
                                <br />
                                <p>$ {item.price} ( {item.amount} )</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products