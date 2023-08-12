import { useState } from 'react'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const ButtonMercadoPago = () => {
    const [preferenceId, setPreferenceId] = useState(null)
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    initMercadoPago('TEST-4f16f016-a822-4c4d-bb35-e48447a441d6')

    const createPreference = async () => {
        try {
            const response = await axios.post(
                '/buy',
                {
                    description,
                    price: parseFloat(price),
                    quantity: parseInt(quantity),
                    currency_id: 'ARS',
                }
            )

            const { id } = response.data
            return id
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <div>
            <img src="" alt="" />
            <h3>Boton de Pago</h3>
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(elem) => setDescription(elem.target.value)}
            />
            <input
                type="text"
                placeholder="Precio"
                value={price}
                onChange={(elem) => setPrice(elem.target.value)}
            />
            <input
                type="number"
                placeholder="Cantidad"
                value={quantity}
                onChange={(elem) => setQuantity(elem.target.value)}
            />
            <button onClick={handleBuy}>Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
    )
}

export default ButtonMercadoPago
