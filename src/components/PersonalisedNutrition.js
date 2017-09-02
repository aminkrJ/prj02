import React, { Component } from 'react';
import {Rect, Layer, Arc, Stage, Text, Group, Label, Tag} from 'react-konva';
import PropTypes from 'prop-types';
import _ from 'lodash';

const colors = ['LightSkyBlue', 'PaleVioletRed', 'SlateBlue', 'Khaki', 'DarkSeaGreen', 'DarkOrange']

class PersonalisedNutriton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: this.props.product.ingredients
    }
  }

  calcAngel(percentage) {
    return percentage * 3.6
  }

  handleMouseOverArc(ref) {
    const arc = this.refs[ref]
    arc.parent.parent.parent.container().style.cursor = 'pointer'
    //TODO
  }

  handleMouseLeaveArc(ref) {
    const arc = this.refs[ref]
    arc.parent.parent.parent.container().style.cursor = ''
  }

  handleExpansion(ingredient) {
    let handle = 10
    var newIngredients = Object.assign([], this.state.ingredients)
    _.each(newIngredients, (i) => {
      i.id === ingredient.id ? i.percentage += handle : i.percentage -= (handle / (newIngredients.length - 1))
    })
    this.setState({ ingredients: newIngredients })
  }

  convertPercentageToGram(percentage) {
    return percentage * this.props.product.weight / 100
  }

  round(value, decimal = 2) {
    return Number(Math.round(value+'e'+decimal)+'e-'+decimal)
  }

  calcTotalPrice() {
    return this.round(_.sumBy(this.state.ingredients, (ingredient) => { return this.convertPercentageToGram(ingredient.percentage) * ingredient.price }))
  }

  render() {
    var prevAngel = 0
    var arcs = this.state.ingredients.map((ingredient, index) => {
      let angle = this.calcAngel(ingredient.percentage)
      let ref = "arc" + index
      let arc =
        <Group key={index}>
          <Arc
          ref={ref}
          x={100} y={100}
          innerRadius={50} outerRadius={80}
          angle={angle}
          onMouseOver={this.handleMouseOverArc.bind(this, ref)}
          onMouseLeave={this.handleMouseLeaveArc.bind(this, ref)}
          onClick={this.handleExpansion.bind(this, ingredient)}
          rotation={prevAngel}
          fill={colors[index]}
          />
          <Group>
            <Rect fill={ colors[index] } width={15} height={15} x={210} y={(index * 25) + 4} />
            <Text fill={"#606975"} x={230} y={index * 25} fontSize={12} fontFamily="Maven Pro" text={ ingredient.name } padding={5} />
          </Group>
        </Group>
      prevAngel = angle
      return arc
    })

    return (
      <div>
        <h3>{ this.calcTotalPrice() }</h3>
        <Stage width='500' height='200'>
          <Layer>{ arcs }</Layer>
        </Stage>
      </div>
    )
  }
}

PersonalisedNutriton.propTypes = {
  product: PropTypes.object
}

export default PersonalisedNutriton
