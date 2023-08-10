import { useState } from 'react'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useSelector } from 'react-redux'

const ButtonMercadoPago = () => {
    const [preferenceId, setPreferenceId] = useState(null)
    const token = useSelector(state => state.token)

    initMercadoPago('TEST-4f16f016-a822-4c4d-bb35-e48447a441d6')

    const createPreference = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/create_preference',
                {
                    description: 'Mi producto',
                    price: 100,
                    quantity: 1,
                    currency_id: 'ARS'
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
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
            <p>$100</p>
            <button onClick={handleBuy}>Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
    )
}

export default ButtonMercadoPago
