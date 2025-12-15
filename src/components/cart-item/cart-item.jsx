export const CartItem = ({dishId, dishName, amount}) => {

    return (
        <span>
            {dishName} - {amount}
        </span>
    )
}