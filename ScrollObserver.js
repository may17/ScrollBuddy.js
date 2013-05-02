/**
 * ScrollObserver
 * @author Joe Ray Gregory 2013
 * @copyright Joe Ray Gregory 2013
 * @license MIT Style
 * @type {Class}
 */
var ScrollObserver = new Class({

    /**
     * Implemented classes
     */
    Implements: [Options, Events],

    /**
     * Options
     */
    options: {
        direction: 'y',
        offset: 0
      /**
       * callback
       * onPositionEnter
       */
    },

    /**
     * Constructor
     * @param item
     * @param coord
     * @param options
     */
    initialize: function(item, coord, options) {
        var self = this;

        this.setOptions(options);
        this.scrollElement = item;
        this.coord = this._defineCoordinate(coord) + this.options.offset;

        console.log(this.coord);

        this.scrollElement.addEvent('scroll', function() {
            var scroll = self.getMethodDirection(this, 'getScroll');
            if(scroll >= self.coord) {
                self.positionEnter();
            } else if(scroll< self.coord) {
                self.positionLeave();
            }
        });
    },

    /**
     * get a method with direction
     * @param el
     * @param type
     * @returns int
     */
    getMethodDirection: function(el, type) {
        if(type === 'getScroll') {
            return this.bindDirectionWithItem(el.getScroll());
        } else if(type === 'getPosition') {
            return this.bindDirectionWithItem(el.getPosition());
        }
    },

    /**
     * check direction and return int
     * @param object
     */
    bindDirectionWithItem: function(item) {
        if(this.options.direction === 'y') {
            return item.y;
        } else if(this.options.direction === 'x') {
            return item.x;
        } else {
            return false;
        }
    }.protect(),

    /**
     * check the type
     * @param mixed coord
     */
    _defineCoordinate: function(coord) {

        if(typeOf(coord) === 'number') {
            return coord;
        } else if(typeOf(coord) === 'element') {
            return this.getMethodDirection(coord, 'getPosition');
        }
    }.protect(),

    /**
     * callback onEnter
     */
    positionEnter: function() {
        this.fireEvent('positionEnter', [this]);
    },

    /**
     * callback onLeave
     */
    positionLeave: function() {
        this.fireEvent('positionLeave', [this]);
    }
});