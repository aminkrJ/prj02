import React, { Component } from 'react';
import {Layer, Arc, Stage} from 'react-konva';
import Konva from 'konva';
import PropTypes from 'prop-types';

class PersonalisedNutriton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  calcAngel(percentage) {
    return percentage * 3.6
  }

  handleMouseOverArc(ref) {
    const arc = this.refs[ref]
    //TODO
  }

  calTotalPrice() {
  }

  render() {
    var prevAngel = 0
    var arcs = this.props.product.ingredients.map((ingredient, index) => {
      let angle = this.calcAngel(ingredient.percentage)
      let ref = "arc" + index
      let arc =
        <Arc key={index}
        ref={ref}
        x={200} y={200}
        innerRadius={40} outerRadius={100}
        angle={angle}
        onMouseOver={this.handleMouseOverArc.bind(this, ref)}
        rotation={prevAngel}
        fill={Konva.Util.getRandomColor()}
        />
      prevAngel = angle
      return arc
    })

    return (
      <Stage width='400' height='400'>
        <Layer>{ arcs }</Layer>
      </Stage>
    )
  }
}

PersonalisedNutriton.propTypes = {
  product: PropTypes.object
}

export default PersonalisedNutriton
