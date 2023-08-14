/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const ButtonMercadoPago = (props) => {
    const [preferenceId, setPreferenceId] = useState(null)
    const [description, setDescription] = useState(props.description)
    const [price, setPrice] = useState(props.price)
    const [quantity, setQuantity] = useState(props.quantity)
    const [showPayButton, setShowPayButton] = useState(false)

    initMercadoPago('TEST-4f16f016-a822-4c4d-bb35-e48447a441d6')

    const createPreference = async () => {
        try {
            const response = await axios.post('/buy', {
                description,
                price: parseFloat(price),
                quantity: parseInt(quantity),
                currency_id: 'ARS',
            })

            const { id } = response.data
            setShowPayButton(true)
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
            {/*  <img src="" alt="" />
            <h3>Boton de Pago</h3>
            <input
                type="text"
                placeholder={description}
                value={description}
                readOnly
                // onChange={(elem) => setDescription(elem.target.value)}
            />
            <input
                type="text"
                placeholder={price}
                value={price}
                readOnly
                // onChange={(elem) => setPrice(elem.target.value)}
            />
            <input
                type="number"
                placeholder={quantity}
                value={quantity}
                readOnly
                // onChange={(elem) => setQuantity(elem.target.value)}
            />*/}

            {!showPayButton && <button onClick={handleBuy}>Pagar</button>}
            {showPayButton && <Wallet initialization={{ preferenceId }} />}
        </div>
    )
}

export default ButtonMercadoPago
