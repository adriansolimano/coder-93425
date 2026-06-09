import { useState } from "react"
import { Button } from "./Button"

export const Counter = ({ minValue = 0, maxValue = 100 }) => {

    const [value, setValue] = useState(minValue)

    const sumar = () => {
        if(value >= maxValue) return
        setValue(value + 1)
    }

    const restar = () => {
        if(value <= minValue) return
        setValue(value - 1)
    }

    return (

        <div>
            <Button onClick={restar}>
                - <span>Resta</span>
            </Button>
            { value }
            <Button onClick={sumar}>
                + <span>Suma</span>
            </Button>
        </div>

    )

}