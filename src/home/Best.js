

import React, { Component } from 'react'

export class Best extends Component {
  render() {
    return (
      <div>
            <div class="video">
        <video src="img/Apple (مصر).mp4" loop autoPlay muted ></video>
    </div>
    <div class="box-3">
        <h2>best seller</h2>
        <div class="container">
            <div class="cards">
                <div class="card2">
                    <div class="container">
                        <img src="img/download.jpeg" class="img-fluid" alt=""/>
                            <h4>sumsung galaxy s21 ultra</h4>
                            <div class="ttee">
                                <p>34,999 EGP</p>
                                <a href="shopping/shopping.html">show more</a>
                            </div>
                    </div>
                </div>
                <div class="card2">
                    <div class="container">
                        <img src="img/iphone 14.jpeg" class="img-fluid" alt=""/>
                        <h4>iphone 14 pro</h4>
                        <div class="ttee">
                            <p>54,999 EGP</p>
                            <a href="shopping/shopping.html">show more</a>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <div class="container">
                        <img src="img/pixel.jpeg" class="img-fluid" alt=""/>
                        <h4>pixel 6</h4>
                        <div class="ttee">
                            <p>24,999 EGP</p>
                            <a href="shopping/shopping.html">show more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Best