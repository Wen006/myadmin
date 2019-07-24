/**
 * @description 动画canvs 背景
 * @author wen
 */

/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-global-assign */
import React, { Component, Fragment } from 'react'
import lodash from 'lodash'
import styles from './style.less'

const defaultConfig = {
    circle: {
        amount: 18,
        layer: 4,
        color: [157, 97, 207],
        alpha: 0.3
    },
    line: {
        amount: 12,
        layer: 3,
        color: [255, 255, 255],
        alpha: 0.3
    },
    speed: 0.5,
    angle: 20
};
 
export default class BgCL extends Component {

    M = window.Math; // Cached Math

    degree = 0;

    circles = [];

    lines = [];

    wWidth;

    wHeight;

    timer;

    constructor(props) {
        super(props)
        this.domId = `bg`;
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.domId).querySelectorAll("canvas");
        this.background = this.canvas[0];
        this.foreground1 = this.canvas[1];
        this.foreground2 = this.canvas[2];
        this.config = defaultConfig
        this.degree = this.config.angle / 360 * this.M.PI * 2; 
        if (this.background.getContext) {
            this.bctx = this.background.getContext('2d');
            this.fctx1 = this.foreground1.getContext('2d');
            this.fctx2 = this.foreground2.getContext('2d');

            const that = this
            window.onresize = function () {
                that.setCanvasHeight();
                that.createItem();
            }
            
            this.setCanvasHeight();
            this.createItem();
        }
    }


    getRequestAnimationFrame = _ => (
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (callback, element) { setTimeout(callback, 1000 / 60); })

    getCancelAnimationFrame = () => (
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        clearTimeout)

    setCanvasHeight = () => {
        this.wWidth = window.innerWidth; // 
        this.wHeight = window.innerHeight;
        if(this.canvas && this.canvas.length > 0){
            lodash.forEach(this.canvas,ele=>{
                ele.width = this.wWidth;
                ele.height = this.wHeight;
            })
            // this.canvas.forEach(ele => {
            //     ele.width = this.wWidth;
            //     ele.height = this.wHeight;
            // })
        }
    };

    drawCircle = (x, y, radius, color, alpha) => {
        const gradient = this.fctx1.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`);
        gradient.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},${alpha - 0.1})`);
        this.fctx1.beginPath();
        this.fctx1.arc(x, y, radius, 0, this.M.PI * 2, true);
        this.fctx1.fillStyle = gradient;
        this.fctx1.fill();
    };

    drawLine = (x, y, width, color, alpha) => {
        const endX = x + this.M.sin(this.degree) * width;
        const endY = y - this.M.cos(this.degree) * width;
        const gradient = this.fctx2.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`);
        gradient.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},${alpha - 0.1})`);

        this.fctx2.beginPath();
        this.fctx2.moveTo(x, y);
        this.fctx2.lineTo(endX, endY);
        this.fctx2.lineWidth = 3;
        this.fctx2.lineCap = 'round';
        this.fctx2.strokeStyle = gradient;
        this.fctx2.stroke();
    };

    drawBack = () => {
        this.bctx.clearRect(0, 0, this.wWidth, this.wHeight);

        const gradient = [];

        gradient[0] = this.bctx.createRadialGradient(this.wWidth * 0.3, this.wHeight * 0.1, 0, this.wWidth * 0.3, this.wHeight * 0.1, this.wWidth * 0.9);
        gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
        gradient[0].addColorStop(1, 'transparent');

        this.bctx.translate(this.wWidth, 0);
        this.bctx.scale(-1, 1);
        this.bctx.beginPath();
        this.bctx.fillStyle = gradient[0];
        this.bctx.fillRect(0, 0, this.wWidth, this.wHeight);

        gradient[1] = this.bctx.createRadialGradient(this.wWidth * 0.1, this.wHeight * 0.1, 0, this.wWidth * 0.3, this.wHeight * 0.1, this.wWidth);
        gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
        gradient[1].addColorStop(0.8, 'transparent');

        this.bctx.translate(this.wWidth, 0);
        this.bctx.scale(-1, 1);
        this.bctx.beginPath();
        this.bctx.fillStyle = gradient[1];
        this.bctx.fillRect(0, 0, this.wWidth, this.wHeight);

        gradient[2] = this.bctx.createRadialGradient(this.wWidth * 0.1, this.wHeight * 0.5, 0, this.wWidth * 0.1, this.wHeight * 0.5, this.wWidth * 0.5);
        gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
        gradient[2].addColorStop(1, 'transparent');

        this.bctx.beginPath();
        this.bctx.fillStyle = gradient[2];
        this.bctx.fillRect(0, 0, this.wWidth, this.wHeight);
    };



    createItem = () => {
        this.circles = [];
        this.lines = [];

        if (this.config.circle.amount > 0 && this.config.circle.layer > 0) {
            for (let i = 0; i < this.config.circle.amount / this.config.circle.layer; i += 1) {
                for (let j = 0; j < this.config.circle.layer; j += 1) {
                    this.circles.push({
                        x: this.M.random() * this.wWidth,
                        y: this.M.random() * this.wHeight,
                        radius: this.M.random() * (20 + j * 5) + (20 + j * 5),
                        color: this.config.circle.color,
                        alpha: this.M.random() * 0.2 + (this.config.circle.alpha - j * 0.1),
                        speed: this.config.speed * (1 + j * 0.5)
                    });
                }
            }
        }

        if (this.config.line.amount > 0 && this.config.line.layer > 0) {
            for (let m = 0; m < this.config.line.amount / this.config.line.layer; m += 1) {
                for (let n = 0; n < this.config.line.layer; n += 1) {
                    this.lines.push({
                        x: this.M.random() * this.wWidth,
                        y: this.M.random() * this.wHeight,
                        width: this.M.random() * (20 + n * 5) + (20 + n * 5),
                        color: this.config.line.color,
                        alpha: this.M.random() * 0.2 + (this.config.line.alpha - n * 0.1),
                        speed: this.config.speed * (1 + n * 0.5)
                    });
                }
            }
        }


        this.getCancelAnimationFrame()(this.timer);
        this.timer = this.getRequestAnimationFrame()(this.animate);
        this.drawBack();
    };

    animate = () => {
        const sin = this.M.sin(this.degree);
        const cos = this.M.cos(this.degree);

        if (this.config.circle.amount > 0 && this.config.circle.layer > 0) {
            this.fctx1.clearRect(0, 0, this.wWidth, this.wHeight);
            for (let i = 0, len = this.circles.length; i < len; i++) {
                const item = this.circles[i];
                const { radius, speed } = item;
                let { x, y } = item

                if (x > this.wWidth + radius) {
                    x = -radius;
                } else if (x < -radius) {
                    x = this.wWidth + radius
                } else {
                    x += sin * speed;
                }

                if (y > this.wHeight + radius) {
                    y = -radius;
                } else if (y < -radius) {
                    y = this.wHeight + radius;
                } else {
                    y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                this.drawCircle(x, y, radius, item.color, item.alpha);
            }
        }

        if (this.config.line.amount > 0 && this.config.line.layer > 0) {
            this.fctx2.clearRect(0, 0, this.wWidth, this.wHeight);
            for (let j = 0, len = this.lines.length; j < len; j++) {
                const item = this.lines[j];
                const { width, speed } = item;
                let { x, y } = item

                if (x > this.wWidth + width * sin) {
                    x = -width * sin;
                } else if (x < -width * sin) {
                    x = this.wWidth + width * sin;
                } else {
                    x += sin * speed;
                }

                if (y > this.wHeight + width * cos) {
                    y = -width * cos;
                } else if (y < -width * cos) {
                    y = this.wHeight + width * cos;
                } else {
                    y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                this.drawLine(x, y, width, item.color, item.alpha);
            }
        }

        this.timer = this.getRequestAnimationFrame()(this.animate);
    };

    render() {
        const { children } = this.props
        return (
          <Fragment>
            <div
              className={styles.bg}
              id={this.domId}
            >
              <canvas width="1387" height="100%" />
              <canvas width="1387" height="100%" />
              <canvas width="1387" height="100%" />
            </div>
            {children}
          </Fragment>
        )
    }
}