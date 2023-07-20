import React from "react";
import ActiveIngredients from "./ActiveIngredients";
import DiscardedIngredients from "./DiscardedIngredients";
import { Container, Row, Col } from "react-bootstrap";



function IngredientList (props) {
    
	return (
		<Container class='container'>
			<Row className='row d-flex justify-content-center'>
				<Col>
					<ActiveIngredients activeIngredients={props.activeIngredients}
					removeIngredient={props.removeIngredient} />
				</Col>
				<Col>
					<DiscardedIngredients discardedIngredients={props.discardedIngredients}
					restoreIngredient={props.restoreIngredient} />
				</Col>
			</Row>
		</Container>
	)
}

export default IngredientList