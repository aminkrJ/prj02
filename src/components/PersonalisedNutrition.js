import React, { Component } from 'react';
import {Layer, Arc, Stage, Text, Group, Label, Tag} from 'react-konva';
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
        <Group>
          <Arc key={index}
          ref={ref}
          x={100} y={100}
          innerRadius={40} outerRadius={100}
          angle={angle}
          onMouseOver={this.handleMouseOverArc.bind(this, ref)}
          onMouseLeave={this.handleMouseLeaveArc.bind(this, ref)}
          onClick={this.handleExpansion.bind(this, ingredient)}
          rotation={prevAngel}
          fill={colors[index]}
          />
          <Label >
            <Tag fill={ colors[index] } x={210} y={index * 25} />
            <Text fill='white' x={210} y={index * 25} width={300} fontSize={13} text={ ingredient.name } padding={5} />
          </Label>
        </Group>
      prevAngel = angle
      return arc
    })

    return (
      <div>
        <h3>{this.calcTotalPrice()}</h3>
        <Stage width='400' height='400'>
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
