function InventoryItem({ name, type, quantity = 0, price = 0 }) {

	const lowStock = 5;
	const total = price * quantity;

	return (
		<div>
			<h2>{name} {type}</h2>
			{
				quantity < lowStock &&
				<Message>
					<p>low stock:{quantity}</p>
				</Message>
			}
			{
				total > valueThreshold &&
				<Message>
					<p>thats above 1000</p>
				</Message>
			}
		</div>
	);
}
