/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import CircularProgress from '@mui/material/CircularProgress'

const ButtonMercadoPago = props => {
    const [preferenceId, setPreferenceId] = useState(null)
    const [description, setDescription] = useState(props.description)
    const [price, setPrice] = useState(props.price)
    const [quantity, setQuantity] = useState(props.quantity)
    const [showPayButton, setShowPayButton] = useState(false)
    const [loading, setLoading] = useState(false)

    initMercadoPago('TEST-4f16f016-a822-4c4d-bb35-e48447a441d6')

    const createPreference = async () => {
        setShowPayButton(true)
        setLoading(true)
        try {
            const response = await axios.post('/buy', {
                description,
                price: parseFloat(price),
                quantity: parseInt(quantity),
                currency_id: 'ARS',
            })

            const { id } = response.data
            
            setLoading(false)
          
            return id
        } catch (error) {
            console.error(error)
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
            {!showPayButton && <button onClick={handleBuy}>Pagar</button>}
            {loading ? (
                <CircularProgress />
            ) : (
                <div>{showPayButton && <Wallet initialization={{ preferenceId }} />}</div>
            )}
        </div>
    )
}

export default ButtonMercadoPago
